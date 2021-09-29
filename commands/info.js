const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var infoEmbed = new discord.MessageEmbed()
        .setTitle("Info")
        .setDescription(`Hier wat info ${message.author}!`)
        .setColor("#259121")
        .addField("Bot naam", `${client.user.username}`)
        .addField("Leden", `${message.guild.memberCount - message.guild.members.cache.filter(m =>m.user.bot).size}`)
        .addField("Makers", `<@709777869622083717> \n <@871315670363693068>`)
        .setTimestamp()
        .setFooter(`${message.author.username}`)

    return message.channel.send(`${message.author}`), message.channel.send({ embeds: [infoEmbed] });

}

module.exports.help = {
    name: "info",
    category : "info",
    discription: "Laat alle info zien."
}