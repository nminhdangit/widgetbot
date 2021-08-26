import { Permissions, PermissionString } from 'discord.js'
import logger from 'logger'

/**
 * Merges permissions into one
 * @param bot The permissions for the bot on the channel
 * @param everyone The permissions for @everyone on the channel
 */
function Merge(bot: Permissions, everyone: Permissions): PermissionString[] {
  const userPermissions = []

  // If the bot can't send messages, the user can't either
  if (bot.has(Permissions.FLAGS.SEND_MESSAGES) || bot.has(Permissions.FLAGS.MANAGE_WEBHOOKS)) userPermissions.push('SEND_MESSAGES')

  // If the bot can / can't read messages, the user can / can't either
  if (bot.has(Permissions.FLAGS.READ_MESSAGE_HISTORY)) userPermissions.push('READ_MESSAGE_HISTORY')
  return userPermissions
}

export default Merge
