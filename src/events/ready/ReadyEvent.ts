import BaseEvent from '../../utils/structures/BaseEvent'
import DiscordClient from '../../client/client'
import { loggerInfo } from '../../utils/logs'

export default class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready')
  }
  async run(client: DiscordClient) {
    loggerInfo(`${client.user?.tag} has logged in.`)
    loggerInfo(`Bot is running ${client.guilds.cache.size} server(s)`)
  }
}
