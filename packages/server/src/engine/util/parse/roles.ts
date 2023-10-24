import { Role } from 'discord.js'

async function Roles(roles: Role[]) {
  return roles.map(role => ({
    name: role.name,
    color: role.hexColor,
    position: role.position,
    id: role.id
  }))
}

export default Roles
