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

process.on("SIGINT", () => {
    console.log("Bot is offline.");
    process.exit();
});

const ipsetup = require('./commands/validateip')
var serveripaddr = ""


client.on("messageCreate", (message) => {
    // console.log(message.content)

    
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ + /);
    const command = args.shift().toLowerCase();
    const x = client.commands.get('mapcommandslist').commandslist(command,client, message, args)
    // console.log(x);
    if (x){return}
    // client.commands.get('serverinfo').uwinfo(command, message, fs)

    if (command === "ping") {
        client.commands.get('ping').execute2(message, args);

    }else if (command == "help"){
        fs.readFile('./helptextfiles/help.txt', 'utf-8', (err, data) => {
            message.channel.send(data);
        });    
        return;

    }else if (command == "commands"){
        fs.readFile('./helptextfiles/commandslist.txt', 'utf-8', (err, data) => {
            message.channel.send(data);
        });    
        return;

    }else if (command === "addons"){
        fs.readFile('./underworldMaps/maplist.txt', 'utf-8', (err, data) => {
            message.channel.send(data);
        });
        return;

    }else if (command === "ip"){
        message.channel.send('Underworld 1 IP address is 85.114.151.173:27015\n');  
        message.channel.send('Underworld 2 IP address is 89.163.187.47:27015\n');  
        return;

    }else if (command === "slots"){
        message.channel.send("Underworld 1's slots range from 6-9 slots\n");
        message.channel.send("Underworld 2's slots range from 6-11 slots\n");
        return;   

    }else if (command == "uw1"){
        message.channel.send("Connected to Underworld 1, please use server commands to get info about the server")
        serveripaddr = "uw1"

    }else if (command == "uw2"){
        message.channel.send("Connected to Underworld 2, please use server commands to get info about the server")
        serveripaddr = "uw2"

    }else if(serveripaddr == "uw2"){
        client.commands.get('underworld2Serverinfo').serverinfo(command, message, fs);
        return;

    }else if(serveripaddr == "uw1"){
        client.commands.get('underworld1Serverinfo').serverinfo(command, message, fs);
        return;

    }else{
        if (serveripaddr != "uw1" || serveripaddr != "uw2"){
            fs.readFile('./helptextfiles/disconnectedplusunknown.txt', 'utf-8', (err, data) => {
                message.channel.send(data);
            });    
            return;
        }else{
            fs.readFile('./helptextfiles/unknowncommand.txt', 'utf-8', (err, data) => {
                message.channel.send(data);
            });    
            return;            
        }
    }
})










// IMPORTANT //////////////////////////////////////////////////////////////////////////
// In order to give this bot a token please create a text file EXACTLY NAMED 'logintoken.txt' and put it in the main directory
fs.readFile('./logintoken.txt', 'utf-8', (err, data) => {
    client.login(data)
});   
