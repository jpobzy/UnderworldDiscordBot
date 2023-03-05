module.exports = {
    
    name: 'underworld1Serverinfo',
    description: "returns underworld 1 server information",

    commandslist(command, message,  fs){
        fs.readFile('./commands/uw1botcommands.txt', 'utf-8', (err, data) => { //forces it to say help info if invalid command given
            message.channel.send(data);
        });    
    },



    serverinfo(command, message, fs){
        const steamServerStatus = require('steam-server-status');
        steamServerStatus.getServerStatus('85.114.151.173',27015, function(serverinfo){
            if (serverinfo.error) {
                console.log(serverinfo.error);
                message.channel.send(serverinfo.error);
                return;
            }else{
                // console.log("command3 is " + command)
                if (command === "servername" || command === "server"){
                    message.channel.send("Server is Underworld 1");
                    return;
                }
                else if (command === "difficulty" || command === "diff"){
                    message.channel.send("Underworld 1's current difficulty is: " +serverinfo.gameDescription);
                    return;
                }
                else if (command === "players"){
                    message.channel.send("Underworld 1's current players count: " + serverinfo.numberOfPlayers + "/" + serverinfo.maxNumberOfPlayers);
                    return;
                }
                else if (command === "map"){
                    message.channel.send("Underworld 1's current map is: " + serverinfo.map);
                    return;
                } 

                // EXTRA COMMANDS //////////////////////////////////////
                else if (command === "gamename"){
                    message.channel.send("Game name is: " + serverinfo.gameName);
                    return;
                }               
                else if (command === "gamedir"){
                    message.channel.send("Game Directory is: " + serverinfo.gameDirectory);
                    return;
                }
                else if (command === "gamedesc"){
                    message.channel.send("Game description is: " + serverinfo.gameDescription);
                    return;
                }            

                else if (command === "id"){
                    message.channel.send("Application Id is: " + serverinfo.applicationId);
                    return;
                }     
                else if (command === "pnum"){
                    message.channel.send("Number of players is: " + serverinfo.numberOfPlayers);
                    return;
                }     
                else if (command == "maxpnum"){
                    message.channel.send("Max number of players is: " + serverinfo.maxNumberOfPlayers);
                    return;
                }     
                else if (command === "bots"){
                    message.channel.send("Bot count is: " + serverinfo.numberOfBots);
                    return;
                }     
                else if (command === "ds"){
                    if (serverinfo.dedicatedServer == true){
                        message.channel.send("Server is officially dedicated");
                        return;
                    }else{
                        message.channel.send("Server is not officially dedicated");
                        return;
                    }
                }     
                else if (command === "os"){
                   if (serverinfo.operatingSystem == 'l'){
                        message.channel.send("Host operating system is Linux");
                        return;
                   }else if (serverinfo.operatingSystem == 'w'){
                        message.channel.send("Host operating system is Windows");
                        return;
                   }else{
                    message.channel.send("ERROR could not get server info");
                        return;
                   }
                }     
                else if (command === "pw"){
                    if (serverinfo.passwordRequired == false){
                        message.channel.send("Server currently does not require a password");
                        return;
                    }else if (serverinfo.passwordRequired == true){
                        message.channel.send("Server currently does require a password");
                        return;
                    }else{
                        message.channel.send("ERROR could not get server info");
                        return;
                    }
                }    
                else if (command === "vac"){
                    if (serverinfo.secure == false){
                        message.channel.send("Server is currently not secured");
                        return;
                    }else if (serverinfo.secure == true){
                        message.channel.send("Server is currently secured");
                        return;
                    }else{
                        message.channel.send("ERROR could not get server info");
                        return;
                    }
                }
                else if (command == "gv"){
                    message.channel.send("Server is running on game version: " + serverinfo.gameVersion);
                    return; 
                }
                else if (command == "host"){
                    message.channel.send("Host number is: " + serverinfo.hostname);
                    return;
                }
                else if (command == "port"){
                    message.channel.send("Port number is: " + serverinfo.port);
                    return;
                }
                else{
                    fs.readFile('./helptextfiles/unknowncommand.txt', 'utf-8', (err, data) => {
                        message.channel.send(data);
                    });    
                    return;
                }
            }
        })
    }

}