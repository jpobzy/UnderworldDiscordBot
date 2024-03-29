module.exports = {
    name: 'mapcommandslist',
    description: 'This is the list of commands for grabbing map information',
    commandslist(command, newclient, message, args){
        if (command === "deadecho") {
            newclient.commands.get('deadecho').execute(message, args);
            return true
        }
        else if (command === "sprawlingterror") {
            newclient.commands.get('sprawlingterror').execute(message, args);
            return true
        }
        else if (command === "pitstop") {
            newclient.commands.get('pit_stop_fixed_v8').execute(message, args);
            return true
        }
        else if (command === "residentevilrpd") {
            newclient.commands.get('residentevil_rpd').execute(message, args);
            return true
        }
        else if (command === "heavencanwait") {
            newclient.commands.get('heavencanwait').execute(message, args);
            return true
        }
        else if (command === "diescreaming") {
            newclient.commands.get('die_screaming').execute(message, args);
            return true
        }
        else if (command === "deadbeforedawn") {
            newclient.commands.get('deadbeforedawn').execute(message, args);
            return true
        }
        else if (command === "naniwa") {
            newclient.commands.get('naniwa').execute(message, args);
            return true
        }
        else if (command === "7hourslater") {
            newclient.commands.get('7_hours_later').execute(message, args);
            return true
        }
        else if (command === "deathrow") {
            newclient.commands.get('deathrow_version1.1').execute(message, args);
            return true
        }
        else if (command === "fairfieldterror") {
            newclient.commands.get('fairfield_terror').execute(message, args);
            return true
        }
        else if (command === "backtodam") {
            newclient.commands.get('back_to_dam_fixed_v4').execute(message, args);
            return true
        }
        else if (command === "viennacalling") {
            newclient.commands.get('viennacalling_1_2').execute(message, args);
            return true
        }
        else if (command === "capemurder") {
            newclient.commands.get('capemurder').execute(message, args);
            return true
        }
        else if (command === "dietrying") {
            newclient.commands.get('dietrying').execute(message, args);
            return true
        }
        else if (command === "mallofthedead") {
            newclient.commands.get('mallofthedead').execute(message, args);
            return true
        }
        else if (command === "nomercyapocalypse") {
            newclient.commands.get('no mercy apocalypse').execute(message, args);
            return true
        }
        else if (command === "nightterror") {
            newclient.commands.get('nightterror').execute(message, args);
            return true
        }
        else if (command === "projectauburn") {
            newclient.commands.get('project auburn').execute(message, args);
            return true
        }
        else if (command === "deathstop") {
            newclient.commands.get('deathstop').execute(message, args);
            return true
        }
        else if (command === "deadstreet") {
            newclient.commands.get('deadstreet').execute(message, args);
            return true
        }
        else if (command === "damit") {
            newclient.commands.get('damit').execute(message, args);
            return true
        }
        else if (command === "hellstorm") {
            newclient.commands.get('hellstorm').execute(message, args);
            return true
        }
        else if (command === "whispersinthedark") {
            newclient.commands.get('whispersinthedark').execute(message, args);
            return true
        }
        else if (command === "orangeonslaught") {
            newclient.commands.get('orange_onslaught').execute(message, args);
            return true
        }
        else if (command === "precinct84") {
            newclient.commands.get('precinct84').execute(message, args);
            return true
        }
        else if (command === "blackc") {
            newclient.commands.get('BLACKC~1').execute(message, args);
            return true
        }
        else if (command === "carnage") {
            newclient.commands.get('carnage_final').execute(message, args);
            return true
        }
        else if (command === "ihatemountains") {
            newclient.commands.get('ihatemountains').execute(message, args);
            return true
        }
        else if (command === "atticaregion") {
            newclient.commands.get('attica region').execute(message, args);
            return true
        }
        else if (command === "noesis") {
            newclient.commands.get('noesis').execute(message, args);
            return true
        }
        else if (command === "deadstreet2") {
            newclient.commands.get('dead street 2').execute(message, args);
            return true
        }
        else if (command === "bloodysunday") {
            newclient.commands.get('bloodysundayv3').execute(message, args);
            return true
        }
        else if (command === "graveoutdoors") {
            newclient.commands.get('graveoutdoors_5.0b').execute(message, args);
            return true
        }
        else if (command === "roadtonowhere") {
            newclient.commands.get('roadtonowhere').execute(message, args);
            return true
        }
        else if (command === "redemption") {
            newclient.commands.get('redemption').execute(message, args);
            return true
        }
        else if (command === "coldfear") {
            newclient.commands.get('cold fear').execute(message, args);
            return true
        }
        else if (command === "monstermill") {
            newclient.commands.get('monster_mill').execute(message, args);
            return true
        }
        else if (command === "one4nine") {
            newclient.commands.get('l4d1_one4nine').execute(message, args);
            return true
        }
        else if (command === "crashbandicootcourse") {
            newclient.commands.get('crashbandicootcourse').execute(message, args);
            return true
        }
        else if (command === "arenaofthedead") {
            newclient.commands.get('arena of the dead').execute(message, args);
            return true
        }
        else if (command === "silenthill") {
            newclient.commands.get('silenthill').execute(message, args);
            return true
        }
        else if (command === "bloodharvestapocalypse") {
            newclient.commands.get('blood harvest apocalypse').execute(message, args);
            return true
        }
        else if (command === "darkblood") {
            newclient.commands.get('darkblood_v2').execute(message, args);
            return true
        }
        else if (command === "mortuarybeta1") {
            newclient.commands.get('l4d_mortuarybeta1').execute(message, args);
            return true
        }
        else if (command === "thecomplex") {
            newclient.commands.get('the_complex_final').execute(message, args);
            return true
        }
        else if (command === "bloodwoodsapocalypse") {
            newclient.commands.get('blood woods apocalypse').execute(message, args);
            return true
        }
        else if (command === "escapefromtoronto") {
            newclient.commands.get('escapefromtoronto').execute(message, args);
            return true
        }
        else if (command === "thewoods2") {
            newclient.commands.get('the woods 2').execute(message, args);
            return true
        }
        else if (command === "deadflagblues") {
            newclient.commands.get('deadflagblues').execute(message, args);
            return true
        }
        else if (command === "lastorders") {
            newclient.commands.get('last_orders').execute(message, args);
            return true
        }
        else if (command === "deadindustry") {
            newclient.commands.get('deadindustry').execute(message, args);
            return true
        }
        else if (command === "deathtollapocalypse") {
            newclient.commands.get('death toll apocalypse').execute(message, args);
            return true
        }
        else if (command === "youaredoomed") {
            newclient.commands.get('you_are_doomed_v29').execute(message, args);
            return true
        }
        else if (command === "ravenholmwar") {
            newclient.commands.get('l4d_ravenholmwar').execute(message, args);
            return true
        }
        else if (command === "stargate") {
            newclient.commands.get('stargate').execute(message, args);
            return true
        }
        else if (command === "live4ever") {
            newclient.commands.get('live4ever').execute(message, args);
            return true
        }
        else if (command === "deadst27.17") {
            newclient.commands.get('deadst_27.11.17').execute(message, args);
            return true
        }
        else if (command === "bloodorange") {
            newclient.commands.get('bloodorange').execute(message, args);
            return true
        }
        else if (command === "thewoods") {
            newclient.commands.get('the woods').execute(message, args);
            return true
        }
        else if (command === "ilogiccity") {
            newclient.commands.get('ilogiccity').execute(message, args);
            return true
        }
        else if (command === "nomoreindustries") {
            newclient.commands.get('nomoreindustries').execute(message, args);
            return true
        }
        else if (command === "surroundedbythedead") {
            newclient.commands.get('surrounded_by_the_dead').execute(message, args);
            return true
        }
        else if (command === "deadvacation") {
            newclient.commands.get('deadvacation').execute(message, args);
            return true
        }
        else if (command === "city17") {
            newclient.commands.get('city17').execute(message, args);
            return true
        }
        else if (command === "crashcourseapocalypse") {
            newclient.commands.get('crash course apocalypse').execute(message, args);
            return true
        }
        else if (command === "lastorders") {
            newclient.commands.get('lastorders_fixed_v5').execute(message, args);
            return true
        }
        else if (command === "coldstream") {
            newclient.commands.get('cold_stream').execute(message, args);
            return true
        }
        else if (command === "strandead") {
            newclient.commands.get('strandead').execute(message, args);
            return true
        }
        else if (command === "suicideblitz") {
            newclient.commands.get('suicideblitz').execute(message, args);
            return true
        }
        else if (command === "theparish") {
            newclient.commands.get('the_parish_fixed_04').execute(message, args);
            return true
        }
        else if (command === "coaldblood") {
            newclient.commands.get('coaldblood').execute(message, args);
            return true
        }
        else if (command === "thelaststand") {
            newclient.commands.get('TheLastStand').execute(message, args);
            return true
        }
        else if (command === "pitchblackmesa") {
            newclient.commands.get('pitchblackmesa').execute(message, args);
            return true
        }
        else if (command === "deadrun") {
            newclient.commands.get('dead_run').execute(message, args);
            return true
        }
        else if (command === "blargh") {
            newclient.commands.get('blargh').execute(message, args);
            return true
        }
        else if (command === "uptownghoul") {
            newclient.commands.get('uptown_ghoul').execute(message, args);
            return true
        }
        else if (command === "fallenbeta") {
            newclient.commands.get('fallen_beta0.94').execute(message, args);
            return true
        }
        else if (command === "deadontime") {
            newclient.commands.get('deadontime').execute(message, args);
            return true
        }
        else if (command === "deathaboard") {
            newclient.commands.get('deathaboard_soundfixed_10').execute(message, args);
            return true
        }
    }
}
