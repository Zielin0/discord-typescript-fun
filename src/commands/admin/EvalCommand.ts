import { Message, MessageEmbed } from 'discord.js'
import BaseCommand from '../../utils/structures/BaseCommand'
import DiscordClient from '../../client/client'

export default class EvalCommand extends BaseCommand {
  constructor() {
    super('Eval', 'admin', ['eval'])
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    const input = args.join(' ')
    if (!input) {
      message.reply('Provide command to eval')
      return
    }

    if (!input.toLowerCase().includes('token')) {
      const embed = new MessageEmbed()

      try {
        let output = eval(input)
        if (typeof output !== 'string')
          output = require('util').inspect(output, { depth: 0 })

        embed
          .addField(
            'Input',
            `\`\`\`js\n${
              input.length > 1024 ? 'Too large to display.' : input
            }\`\`\``
          )
          .addField(
            'Output',
            `\`\`\`js\n${
              output.length > 1024 ? 'Too large to display.' : output
            }\`\`\``
          )
          .setColor('#66FF00')
      } catch (err: any) {
        embed
          .addField(
            'Input',
            `\`\`\`js\n${
              input.length > 1024 ? 'Too large to display.' : input
            }\`\`\``
          )
          .addField(
            'Output',
            `\`\`\`js\n${
              err.length > 1024 ? 'Too large to display.' : err
            }\`\`\``
          )
          .setColor('#FF0000')
      }

      message.channel.send(embed)
    } else {
      message.channel.send('(╯°□°)╯︵ ┻━┻ MY token. **MINE**.')
    }
  }
}
