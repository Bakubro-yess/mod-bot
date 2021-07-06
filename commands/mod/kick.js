
module.exports = {
    commands: 'kick',
    description: 'Kicks A User.',
    permissions: 'KICK_MEMBERS', 
    permissionError: 'OI, YOU CANNOT KICK A PERSON',
  
    callback: (message, args) => {
        const member = message.mentions.members.first()
        if(!member) return message.reply('Mention a member')
        if (member === message.member) return message.reply('You cannot kick yourself bruh'); 
        if (member.roles.highest.position >= message.member.roles.highest.position) 
        return message.reply('Not allowed to kick someone with a role higher or equal to ya');
        if (member.kick()) return message.reply(`I have kicked <@${member.user.id}>!`)
    }
}
module.exports = {
	name: 'kick',
	description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
	execute(message) {
        const member = message.mentions.members.first()
        if(!member) return message.reply('Mention a member')
        if (member === message.member) return message.reply('You cannot kick yourself bruh'); 
        if (member.roles.highest.position >= message.member.roles.highest.position) 
        return message.reply('Not allowed to kick someone with a role higher or equal to ya');
  
  member.kick()

	},
};
