import config from 'config'
import { ClientOptions, Intents, Options } from 'discord.js'

const options: ClientOptions = {
  intents: [Intents.FLAGS.GUILD_MESSAGES], //TODO: Verify that this is the only intent we need.
  makeCache: Options.cacheWithLimits({ MessageManager: config.cache['graphql.messageHistory'] }),
  messageSweepInterval: 10
}

export default options
