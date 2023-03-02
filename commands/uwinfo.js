module.exports = {
    
    name: 'serverinfo',
    description: "returns server information",
    uwinfo(command, message,  fs){
        if (command === "ip"){
        message.channel.send('Underworld 1 IP address is 85.114.151.173:27015\n');  
        message.channel.send('Underworld 2 IP address is 89.163.187.47:27015\n');  
        return;  
        }else if (command === "slots"){
            message.channel.send("Underworld 1's slots range from 6-9 slots\n");
            message.channel.send("Underworld 2's slots range from 6-11 slots\n");
            return;                 
        }else if (command === "addons"){//"addons"
            fs.readFile('./underworldMaps/maplist.txt', 'utf-8', (err, data) => {
                message.channel.send(data);
            });
            return;  
        }else if (command === "servercommands"){
            fs.readFile('./commands/servercommands.txt', 'utf-8', (err, data) => {
                message.channel.send(data);
            });          
            return;    
        }else if (command === "help"){
            fs.readFile('./commands/help.txt', 'utf-8', (err, data) => {
                message.channel.send(data);
            });          
            return;   
        }else if (command === "commands"){
            fs.readFile('./commands/help.txt', 'utf-8', (err, data) => {
                message.channel.send(data);
            });          
            return;   
        }
        else{
            fs.readFile('./helptextfiles/unknowncommand.txt', 'utf-8', (err, data) => {
                message.channel.send(data);
            });    
            return;
        }
    }
}