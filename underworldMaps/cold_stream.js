module.exports = {
    name: 'cold_stream',
    description: "links to the coldstream campaign download",
    execute(message, args){
        message.channel.send('https://drive.google.com/file/d/1pGNUJKuwj5FQbmPES6d2xcnMol_ks4Ti/view?usp=sharing')
    }
}
