import { Message, MessageEmbed } from 'discord.js'
import BaseCommand from '../../utils/structures/BaseCommand'
import DiscordClient from '../../client/client'

export default class PingCommand extends BaseCommand {
  constructor() {
    super('Ping', 'info', ['ping', 'p'])
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    const embed = new MessageEmbed()
      .setDescription('Pinging...')
      .setColor('RANDOM')

    const msg = await message.channel.send(embed)
    const timestamp = message.editedTimestamp
      ? message.editedTimestamp
      : message.createdTimestamp

    const latency = `\`\`\`ini\n[ ${Math.floor(
      msg.createdTimestamp - timestamp
    )}ms ]\`\`\``
    const apiLatency = `\`\`\`ini\n[ ${Math.round(
      message.client.ws.ping
    )}ms ]\`\`\``

    embed
      .setTitle(`Pong!`)
      .setDescription('')
      .addField('Latency', latency, true)
      .addField('API Latency', apiLatency, true)
      .setFooter(
        message.member?.displayName,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp()
    msg.edit(embed)
  }
}
