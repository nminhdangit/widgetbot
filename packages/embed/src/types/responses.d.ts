import { Dictionary } from '@cerebral/fluent'

import { Theme } from '../store/types'
import Message from './message'

type Channels = {
  name: string
  unread: boolean
  id: string
  type: number
  category: string
  permissions: string[]
}[]

export interface Channel {
  name: string
  permissions: string[]
  topic?: string
  id?: string
  messages?: Dictionary<Message>
}

export interface ChannelResponse {
  server: {
    channel: Channel & { messages: Message[] }
  }
}

export interface ServerResponse {
  server: {
    name: string
    memberCount: number
    icon: string
    theme: Theme
    channels: Channels
    channel?: ChannelResponse['server']['channel']
  }
}
