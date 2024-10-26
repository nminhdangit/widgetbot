import { ThreadChannel } from 'discord.js'
import { client } from 'engine'
import Permissions from 'engine/permissions'
import { Thread } from '../../../types/message'

async function Threads(threadList: ThreadChannel[]) {
  return await Promise.all(
    threadList.map(
      async (thread: ThreadChannel): Promise<Thread> => {
        const { id, name } = thread
        return {
          id,
          name
        }
      }
    )
  )
}

export default Threads
