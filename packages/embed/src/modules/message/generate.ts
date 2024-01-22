import Message, { Author, MessageReference } from '../../types/message'
import MessageType from '../../types/messagetype'

interface Request {
  message: string
  author: Author
  id?: string
  type?: MessageType
  timestamp?: number
  reference?: MessageReference
}

const generate = (req: Request): Message => ({
  attachment: null,
  author: req.author,
  content: req.message,
  editedAt: null,
  embeds: [],
  id: req.id || `${+new Date() * Math.random()}`,
  reference: null,
  mentions: {
    channels: [],
    members: [],
    roles: [],
    everyone: false
  },
  reactions: [],
  timestamp: req.timestamp || +new Date(),
  type: req.type || MessageType.Default
})

export default generate
