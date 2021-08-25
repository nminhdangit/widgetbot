import { Permissions } from 'discord.js'
import fetchChannel from 'engine/util/fetchChannel'

interface Request {
  server: string
  channel: string
  snowflake: string
}

async function rolePerms({ snowflake, ...req }: Request) {
  const { guild, channel } = await fetchChannel(req, null)
  const permissions = new Permissions()

  // Get permissions for us in this channel
  const channelPermissions = guild.me.permissionsIn(channel)
  permissions.add(channelPermissions)

  return permissions
}

export default rolePerms
