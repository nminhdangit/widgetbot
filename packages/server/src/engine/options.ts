import config from 'config'
import { ClientOptions, Intents, Options } from 'discord.js'

const options: ClientOptions = {
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.GUILD_INVITES], //TODO: Verify that this is the only intent we need.
  makeCache: Options.cacheWithLimits({ MessageManager: config.cache['graphql.messageHistory'] }) /*,
  messageSweepInterval: 10*/
}

export default options
