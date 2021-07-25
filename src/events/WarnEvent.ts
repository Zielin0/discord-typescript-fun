// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-warn
import BaseEvent from '../utils/structures/BaseEvent'
import DiscordClient from '../client/client'
import { loggerWarn } from '../utils/logs'

export default class WarnEvent extends BaseEvent {
  constructor() {
    super('warn')
  }

  async run(client: DiscordClient, info: string) {
    loggerWarn(info)
  }
}
