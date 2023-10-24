import * as Discord from 'discord.js'
import { Attachment } from '../../../types/message'

async function Attachment(attachments: Discord.Attachment[]): Promise<Attachment> {
  const [attachment] = attachments

  return attachment
    ? {
        width: attachment.width,
        height: attachment.height,
        url: attachment.url
      }
    : null
}

export default Attachment
