module.exports = {
    name: 'ping',
    description: "this is a ping command",
    execute2(message, args){
        message.channel.send('pong!')
    }
}