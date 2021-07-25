import { Message, MessageEmbed } from 'discord.js'
import BaseCommand from '../../utils/structures/BaseCommand'
import DiscordClient from '../../client/client'
import fetch from 'node-fetch'

export default class GithubCommand extends BaseCommand {
  constructor() {
    super('Github', 'fun', ['g', 'gh'])
  }

  async run(client: DiscordClient, message: Message, args: string[]) {
    if (!args[0]) {
      message.reply('Provide github username')
      return
    }

    const res = await fetch(`https://api.github.com/users/${args[0]}`)
    const json = await res.json()

    var twitter = json.twitter_username
      ? `[${json.twitter_username}](https://twitter.com/${json.twitter_username})`
      : '`None`'
    var website = json.blog ? `[${json.blog}](http://${json.blog})` : '`None`'

    const embed = new MessageEmbed()
      .setTitle(json.login)
      .setAuthor(json.login, json.avatar_url, json.html_url)
      .setDescription(json.bio)
      .setThumbnail(json.avatar_url)
      .addField('Type', json.type, true)
      .addField('Website/Blog', website, true)
      .addField('Twitter', twitter, true)
      .addField('Public Repos', json.public_repos, true)
      .addField('Followers', json.followers, true)
      .addField('Following', json.following, true)
      .addField('Email', json.email ? json.email : '`None`', true)
      .addField('Name', json.name ? json.name : '`None`', true)
      .addField('Location', json.location ? json.location : '`None`', true)
      .setColor('RANDOM')
      .setFooter(
        message.member?.displayName,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp()

    message.channel.send(embed)
  }
}
