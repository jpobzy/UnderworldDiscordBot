module.exports = {
    
    name: 'serverinfo',
    description: "returns server information",
    uwinfo(command, newclient,message, args, maplist, fs){
        if (command === "ip"){
        message.channel.send('Underworld 1 IP address is 85.114.151.173:27015\n');  
        message.channel.send('Underworld 2 IP address is 89.163.187.47:27015\n');  
        return;  
        }
        if (command === "slots"){
            message.channel.send("Underworld 1's slots range from 6-9 slots\n");
            message.channel.send("Underworld 2's slots range from 6-11 slots\n");
            return;                 
        }
        if (command === "addons"){//"addons"
            fs.readFile('./underworldMaps/maplist.txt', 'utf-8', (err, data) => {
                message.channel.send(data);
            });
            return;  
        }
        if (command === "servercommands"){
            fs.readFile('./commands/servercommands.txt', 'utf-8', (err, data) => {
                message.channel.send(data);
            });          
            return;    
        }

        if (command === "help"){
            fs.readFile('./commands/help.txt', 'utf-8', (err, data) => {
                message.channel.send(data);
            });          
            return;   
        }
        fs.readFile('./commands/help.txt', 'utf-8', (err, data) => { //forces it to say help info if invalid command given
            message.channel.send(data);
        });    
        return;

    }


}