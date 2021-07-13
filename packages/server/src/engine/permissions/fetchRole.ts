import { client } from 'engine'

function fetchRole({ serverID, roleID }: { serverID: string; roleID: string }) {
  if (!client.guilds.cache.has(serverID)) {
    return undefined
  }

  const guild = client.guilds.cache.get(serverID)
  const role = guild.roles.cache.find(role => role.id === roleID)
  return role
}

export default fetchRole
