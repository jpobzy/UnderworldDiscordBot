module.exports = {
    
    name: 'validateip',
    description: "returns server information",
    decide(command, message, serveripaddr){
        if (command === "ip"){
            if (serveripaddr == "uw1"){
                message.channel.send("Current ipaddr set is Underworld 1"); 
                return; //include returns since this function is = to   serveripaddr 
            }else if(serveripaddr == "uw2"){
                message.channel.send("Current ipaddr set is Underworld 2 ");   
                return serveripaddr;
            }else if (serveripaddr == ""){
                message.channel.send("There is no server/ip addr set, please enter 'uw1', 'uw2' or the ip address of the server by doing '-ip[<ENTER SERVER IP HERE>]");   
                return serveripaddr;
            }else if(serveripaddr == undefined){
                message.channel.send("There is no server/ip addr set, please enter 'uw1', 'uw2' or the ip address of the server by doing '-ip[<ENTER SERVER IP HERE>]");   
                return serveripaddr;
            }else{
                message.channel.send("Current server/ip addr set is " + serveripaddr);   
                return serveripaddr;
            }
        }
        if(command === "ip[]"){
            message.channel.send("You did not enter a ip address, please enter a valid ip address");
            return;
        }
        if (message.content.includes("ip[") && message.content.includes("]") && message.content.endsWith("]")){
            splicedip = message.content.replace("-ip[","").replace("]","");
            if (splicedip.includes(" ")){
                message.channel.send("You entered an ip address including a space, please enter a valid ip address with no spaces " + splicedip)
            }else{
                const regexExp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
                iptest =  regexExp.test(splicedip);
                if (iptest == true){
               
                    serveripaddr = splicedip;
                    message.channel.send("You entered a valid ip, serveripaddr is now: " + serveripaddr);
                    return serveripaddr;

                }else if (iptest == false){
                    message.channel.send("You entered an invalid ip, please enter a valid ip");
                    return;
                }

            }
        message.channel.send("ERROR VALIDATE IP BROKEN" + serveripaddr + " " + message.content + " " + command);
        }











    }
}



// DOES NOT WORK IN INDEX.JS "Connection to server timed out."
// if (serveripaddr != undefined){
//     console.log("command2 is " + command)
//     client.commands.get('gameServerinfo').serverinfo(command,serveripaddr,message,message)
// }else{
//     serveripaddr = ipsetup.decide(command, message, serveripaddr);    
// }