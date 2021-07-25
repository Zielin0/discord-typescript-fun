// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-debug
import BaseEvent from '../utils/structures/BaseEvent'
import DiscordClient from '../client/client'
import { loggerWarn } from '../utils/logs'

export default class ChannelPinsUpdateEvent extends BaseEvent {
  constructor() {
    super('channelPinsUpdate')
  }

  async run(client: DiscordClient, info: string) {
    loggerWarn(info)
  }
}
