import { Permissions, PermissionsBitField } from 'discord.js'
import logger from 'logger'

/**
 * Merges permissions into one
 * @param bot The permissions for the bot on the channel
 * @param everyone The permissions for @everyone on the channel
 */
function Merge(bot: PermissionsBitField, everyone: PermissionsBitField): PermissionsBitField {
  const userPermissions = new PermissionsBitField()

  // If the bot can't send messages, the user can't either
  if (bot.has(PermissionsBitField.Flags.SendMessages) || bot.has(PermissionsBitField.Flags.ManageWebhooks))
    userPermissions.add(PermissionsBitField.Flags.SendMessages)

  // If the bot can / can't read messages, the user can / can't either
  if (bot.has(PermissionsBitField.Flags.ReadMessageHistory)) userPermissions.add(PermissionsBitField.Flags.ReadMessageHistory)
  return userPermissions
}

export default Merge
