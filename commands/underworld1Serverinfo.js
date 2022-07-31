module.exports = {
    
    name: 'underworld1Serverinfo',
    description: "returns underworld 1 server information",

    commandslist(command, message,  fs){
        fs.readFile('./commands/uw1botcommands.txt', 'utf-8', (err, data) => { //forces it to say help info if invalid command given
            message.channel.send(data);
        });    
    },



    serverinfo(command, message){
        const steamServerStatus = require('steam-server-status');
        steamServerStatus.getServerStatus('85.114.151.173',27015, function(serverinfo){
            if (serverinfo.error) {
                console.log(serverinfo.error);
                message.channel.send(serverinfo.error);
                return;
            }else{
                // console.log("command3 is " + command)
                if (command === "servername" || command === "server"){
                    message.channel.send("Server is ");
                    return;
                }
                if (command === "difficulty" || command === "diff"){
                    message.channel.send("Difficulty is: " +serverinfo.gameDescription);
                    return;
                }
                if (command === "players"){
                    message.channel.send("Players: " + serverinfo.numberOfPlayers + "/" + serverinfo.maxNumberOfPlayers);
                    return;
                }
                if (command === "map"){
                    message.channel.send("Current map is: " + serverinfo.map);
                    return;
                } 

                // EXTRA COMMANDS //////////////////////////////////////
                if (command === "gamename"){
                    message.channel.send("Game name is: " + serverinfo.gameName);
                    return;
                }               
                if (command === "gamedir" || command === "gamedirectory"){
                    message.channel.send("Game Directory is: " + serverinfo.gameDirectory);
                    return;
                }
                if (command === "gamengamedescriptioname" || command === "gamedesc"){
                    message.channel.send("Game description is: " + serverinfo.gameDescription);
                    return;
                }            

                if (command === "applicationid" || command === "id"){
                    message.channel.send("Application Id is: " + serverinfo.applicationId);
                    return;
                }     
                if (command === "numberofplayers"|| command == "playernum"){
                    message.channel.send("Number of players is: " + serverinfo.numberOfPlayers);
                    return;
                }     
                if (command === "maxnumberofplayers"|| command == "maxplayernum"){
                    message.channel.send("Max number of players is: " + serverinfo.maxNumberOfPlayers);
                    return;
                }     
                if (command === "numberofbots" || command === "botcount"|| command == "botnum"){
                    message.channel.send("Bot count is: " + serverinfo.numberOfBots);
                    return;
                }     
                if (command === "dedicatedserver" || command === "ds"){
                    if (serverinfo.dedicatedServer == true){
                        message.channel.send("Server is officially dedicated");
                        return;
                    }else{
                        message.channel.send("Server is not officially dedicated");
                        return;
                    }
                }     
                if (command === "operatingsystem" || command === "os"){
                   if (serverinfo.operatingSystem == 'l'){
                        message.channel.send("Host operating system is Linux");
                        return;
                   }else if (serverinfo.operatingSystem == 'w'){
                        message.channel.send("Host operating system is Windows");
                        return;
                   }else{
                        message.channel.send("Host operating system is unknown");
                        return;
                   }
                }     
                if (command === "passwordrequired" || command === "pw"){
                    if (serverinfo.passwordRequired == false){
                        message.channel.send("Server does not require a password");
                        return;
                    }else if (serverinfo.passwordRequired == true){
                        message.channel.send("Server does require a password");
                        return;
                    }else{
                        message.channel.send("Unknown is server requires a password");
                        return;
                    }
                }    
                if (command === "vac"|| command == "secure"){
                    if (serverinfo.secure == false){
                        message.channel.send("Server is not secured");
                        return;
                    }else if (serverinfo.secure == true){
                        message.channel.send("Server is secured");
                        return;
                    }else{
                        message.channel.send("Unknown is server is secured");
                        return;
                    }
                }
                if (command === "gameversion" || command == "gv"){
                    message.channel.send("Current game version is: " + serverinfo.gameVersion);
                    return; 
                }
                if (command == "hostname"|| command == "host"){
                    message.channel.send("Host name is: " + serverinfo.hostname);
                    return;
                }
                if (command == "port"){
                    message.channel.send("Port name is: " + serverinfo.port);
                    return;
                }
            }
        })
    }

}