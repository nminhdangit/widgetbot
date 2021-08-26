import config from 'config'
import { TextChannel } from 'discord.js'
import { client } from 'engine'
import Permissions from 'engine/permissions'
import memoize from 'memoizee'
import timestring from 'timestring'

import { Channel } from '../../../types/message'

async function Channels(server: string) {
  const guild = client.guilds.cache.get(server)

  return await Promise.all(
    guild.channels.cache
      // Only allow text & news channels we have permission to view.
      .filter(channel => (channel.type === 'GUILD_TEXT' || channel.type === 'GUILD_NEWS') && channel.permissionsFor(client.user).has('VIEW_CHANNEL', true))

      // Order channels by position
      .sort((a, b) => ((a as TextChannel).position > (b as TextChannel).position ? 1 : -1))

      // Inject extra details into the channels
      .map(
        async (channel: TextChannel): Promise<Channel> => {
          const { parent, name, topic, type, id } = channel

          const permissions = await Permissions({ server, channel: id })
          const category = parent ? parent.name : null

          return { name, topic, type, id, category, permissions }
        }
      )
  )

  // // Filter the channels by whether they have the READ_MESSAGES permission
  // return channels.filter(({ permissions }) => {
  // 	if (!permissions)
  // 		return false
  // 	if (!permissions.VIEW_CHANNEL)
  // 		return false
  // 	return permissions.READ_MESSAGE_HISTORY
  // })
}

export default memoize(Channels, {
  promise: true,
  maxAge: timestring(config.cache['graphql.channelsExpiration'], 'ms')
})
