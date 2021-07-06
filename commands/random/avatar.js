const Discord = require('discord.js')

module.exports = {
	name: 'avatar',
	description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
	execute(message) {
  const member = message.mentions.members.first() || message.member;
const avatarEmbed = new Discord.MessageEmbed()
	.setColor('#ffffff') // you can keep this what ever color you want
	.setTitle('Your Avatar!') // You can change the title to what ever you want ( if you want the user's name use member.user.name )
  .setImage(member.user.displayAvatarURL({ dynamic: true, size: 1024 }))

message.channel.send(avatarEmbed);
	},
};
