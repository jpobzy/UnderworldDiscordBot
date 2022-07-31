const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [
        "Guilds",
        "GuildMessages",
        "GuildVoiceStates",
        "MessageContent"
    ]
});
const prefix = "-";
const fs = require('fs');
client.commands = new Discord.Collection();

const uwcommands = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of uwcommands){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command)
}

const uwMapFiles = fs.readdirSync('./underworldMaps/').filter(file => file.endsWith('.js'));
for (const file of uwMapFiles){
    const command = require(`./underworldMaps/${file}`);
    client.commands.set(command.name, command)
}

const uwMaplist = "./underworldMaps/maplist.txt";





client.on("ready", () => {
    console.log("Bot is online!")
})

const ipsetup = require('./commands/validateip')
var serveripaddr = ""


client.on("messageCreate", (message) => {
    // console.log(message.content)
    
    
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ + /);
    const command = args.shift().toLowerCase();
    client.commands.get('mapcommandslist').commandslist(command,client, message, args)
    client.commands.get('serverinfo').uwinfo(command, message, fs)

    if (command === "ping") {
        client.commands.get('ping').execute2(message, args);
    }else if (command == "uw1"){
        message.content.send("On uw1 server info now")
        serveripaddr = "uw1"
    }else if (command == "uw2"){
        message.content.send("On uw2 server info now")
        serveripaddr = "uw2"
    }else if(serveripaddr == "uw2"){
        client.commands.get('underworld1Serverinfo').serverinfo(command, message);
    }else if(serveripaddr == "uw1"){
        client.commands.get('underworld2Serverinfo').serverinfo(command, message);
    }else{
       
    }
})










// IMPORTANT //////////////////////////////////////////////////////////////////////////
// In order to give this bot a token please create a text file EXACTLY NAMED 'logintoken.txt' and put it in the main directory
fs.readFile('./logintoken.txt', 'utf-8', (err, data) => {
    client.login(data)
});   
