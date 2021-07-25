// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-error
import BaseEvent from '../utils/structures/BaseEvent'
import DiscordClient from '../client/client'
import { loggerError } from '../utils/logs'

export default class ErrorEvent extends BaseEvent {
  constructor() {
    super('error')
  }

  async run(client: DiscordClient, error: Error) {
    loggerError(error)
  }
}
