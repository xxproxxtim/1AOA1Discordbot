module.exports.run = async (bot, message, args) => {

    return message.channel.send("Hallo!");

}

module.exports.help = {
    name: "hallo",
    category : "general",
    discription: "Zegt hallo."
}