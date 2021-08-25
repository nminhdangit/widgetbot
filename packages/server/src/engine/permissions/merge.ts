import { Permissions } from 'discord.js'

/**
 * Merges permissions into one
 * @param bot The permissions for the bot on the channel
 * @param everyone The permissions for @everyone on the channel
 */
function Merge(bot: Permissions, everyone: Permissions) {
  const user = everyone

  // If the bot can't send messages, the user can't either
  if (!(bot.has(Permissions.FLAGS.SEND_MESSAGES) && !bot.has(Permissions.FLAGS.MANAGE_WEBHOOKS))) user.remove(Permissions.FLAGS.SEND_MESSAGES)

  // If the bot can / can't read messages, the user can / can't either
  if (!bot.has(Permissions.FLAGS.READ_MESSAGE_HISTORY)) user.remove(Permissions.FLAGS.READ_MESSAGE_HISTORY)

  // If the bot is set to be allowed to send messages, make it so
  if (bot.has(Permissions.FLAGS.SEND_MESSAGES)) user.add(Permissions.FLAGS.SEND_MESSAGES)

  return user
}

export default Merge
