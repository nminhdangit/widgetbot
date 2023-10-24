import { Permissions, PermissionsBitField } from 'discord.js'
import fetchChannel from 'engine/util/fetchChannel'

interface Request {
  server: string
  channel: string
  snowflake: string
}

async function rolePerms({ snowflake, ...req }: Request) {
  const { guild, channel } = await fetchChannel(req, null)
  const permissions = new PermissionsBitField()

  // Get permissions for us in this channel
  const channelPermissions = guild.members.me.permissionsIn(channel)
  permissions.add(channelPermissions)

  return permissions
}

export default rolePerms
