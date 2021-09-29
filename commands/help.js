const botConfig = require("../botConfig.json");

module.exports.run = async (client, message, args) => {

    try {

        var prefix = botConfig.prefix;

        var respone = "**Bot commands**\r\n\n";
        var general = "**__Algemeen__**\r\n";
        var info = "\n**__Informatie__**\r\n";

        client.commands.forEach(command => {

            switch(command.help.category) {

                case "general":
                    general += `${prefix}${command.help.name} - ${command.help.discription}\r\n`;
                    break;
                case "info":
                    info += `${prefix}${command.help.name} - ${command.help.discription}\r\n`;
                    break;

            }

        });

        respone += general + info;

        message.author.send(respone).then(() => {
            return message.reply("Alle commands kan je vinden in je DM.");
        }).catch(() => {
            return message.reply("Je privé berichten staan uit.")
        })

    } catch (error) {
        message.reply("Er is iets misgelopen.");
        console.log(error);
    }

}

module.exports.help = {
    name: "help",
    category : "info",
    discription: "Laat alle commands zien."
}