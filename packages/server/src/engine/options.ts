import config from 'config'
import { ClientOptions } from 'discord.js'

const options: ClientOptions = {
  messageCacheMaxSize: config.cache['graphql.messageHistory'],
  messageSweepInterval: 10
}

export default options
