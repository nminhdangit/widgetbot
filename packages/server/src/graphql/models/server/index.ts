import config from 'config'
import { Fetch } from 'database/server'
import { cache, client } from 'engine'
import Messages from 'engine/messages'
import Channels from './channels'

async function Server() {
  const guild = client.guilds.cache.get(config.discord.server)
  if (!guild) throw Messages.BAD_SERVER

  const channels = await Channels(config.discord.server)

  return {
    config: () => config.embed.config,
    async theme() {
      const storage = await Fetch(config.discord.server)
      return storage.theme
    },
    async channel({ name: channelName }) {
      const textChannel = channels.find(({ name }) => name === channelName)

      if (!textChannel) throw Messages.BAD_CHANNEL

      return {
        ...textChannel,
        messages: await cache.getMessages({ server: config.discord.server, channel: textChannel.id }),
        async threads() {
          return textChannel.threads.map(async thread => ({
            id: thread.id,
            name: thread.name,
            messages: await cache.getMessages({ server: config.discord.server, channel: thread.id })
          }))
        }
      }
    }
  }
}

export default Server
