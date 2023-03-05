import requests
from bs4 import BeautifulSoup
from fixtitle import *

def createspreadsheet():
    fileLinks = open("mapAutomation/drivesharelink.txt", "r")
    writeindrive = open("mapAutomation/mapDrive.txt", "w")
    writefixtitle = open("mapAutomation/fixtitle.py", "w")
    f = fileLinks.readline()
    for line in f.split(", "):
        reqs = requests.get(line)
        soup = BeautifulSoup(reqs.text, 'html.parser')
        mapname = str(soup.find('title')).replace('.rar - Google Drive</title>','').replace('<title>','')
        tup = (mapname, line)
        writeindrive.write(tup + "\n") #creates mapdrive
        if count == 0:
            writefixtitle.write("   if title == "+ "'")     
            writefixtitle.write(mapname + "'")
            writefixtitle.write(":\n")
            writefixtitle.write('       return ' + '"'+'"' + "\n")
            count = 1
        else:
            writefixtitle.write("   else if title == "+ "'")     
            writefixtitle.write(mapname + "'")
            writefixtitle.write(":\n")
            writefixtitle.write('       return ' + '"'+'"' + "\n")









def automateunderworldMapsFiles():
    fileLinks = open("mapAutomation/drivesharelink.txt", "r")
    f = fileLinks.readline()
    with open("mapAutomation/linklist.txt", "r") as readlinklist:
        print('empty')
        for line in f.split(", "):
            reqs = requests.get(line)
            soup = BeautifulSoup(reqs.text, 'html.parser')
            mapname = str(soup.find('title')).replace('.rar - Google Drive</title>','').replace('<title>','')
            filename = "underworldMaps/" + mapname+ ".js"
            fixedmapname = fixtitle(mapname)
            createnewmapfile = open(filename, "w")
            createnewmapfile.write("module.exports = {\n")
            createnewmapfile.write("    name: "+ "'" + mapname+ "'," + "\n")
            createnewmapfile.write("    description: "+ '"'+ "links to the " + fixedmapname+ " campaign download"+ '",' + "\n")
            createnewmapfile.write("    execute(message, args){"+"\n")
            createnewmapfile.write("        message.channel.send("+ "'" + line + "'"+")" + "\n")
            createnewmapfile.write("    }"+ "\n")
            createnewmapfile.write("}"+ "\n")


# automateunderworldMapsFiles()

#write a script to create the fix title name shit ie replace deadecho from title to "Dead Echo"
#meant to only be done once and whenever a new map gets added you need to manually put it in the fixtite.py file
def automatefixtitlefile():
    fileLinks = open("mapAutomation/drivesharelink.txt", "r")
    f = fileLinks.readline()
    writefixtitle = open("mapAutomation/fixtitle.py", "w")
    writefixtitle.write("def fixtitle(title):\n")
    count = 0
    for link in f.split(","):
        reqs = requests.get(link)
        soup = BeautifulSoup(reqs.text, 'html.parser')
        title = str(soup.find('title')).replace('.rar - Google Drive</title>','').replace('<title>','')  
        titlecopy = title
        titlereplaced = titlecopy.lower().replace("_","").replace("version","").replace(" ","").replace("fixed", "")
        titleversionremoved1 = titlereplaced.replace("v1","").replace("v2","").replace("v3","").replace("v4","").replace("v5","")
        titleversionremoved2 = titleversionremoved1.replace("v6","").replace("v7","").replace("v8","").replace("v9","").replace("v10","")
        titleversionremoved3 = titleversionremoved2.replace("1.1","").replace("12","").replace("~1","").replace("5.0b","")#hard coding removals
        titleversionremoved4 = titleversionremoved3.replace("l4d1","").replace("final","").replace("9","").replace("l4d","").replace("","")
        titleversionremoved5 = titleversionremoved4.replace("0.94","").replace("04","").replace("sound10","").replace("0.4","")
        if count == 0:
            writefixtitle.write("   if title == "+ "'")     
            writefixtitle.write(title + "'")
            writefixtitle.write(":\n")
            writefixtitle.write('       return '+ "'" + str(titleversionremoved5) + "'"  "\n")
            count = 1
        else:
            writefixtitle.write("   if title == "+ "'")     
            writefixtitle.write(title + "'")
            writefixtitle.write(":\n")
            writefixtitle.write('       return '+ "'" + str(titleversionremoved5) + "'"  "\n")


# automatefixtitlefile()

#quick way to automate the commands in mapcommands.js
def automatemapcommands():
    fileLinks = open("mapAutomation/drivesharelink.txt", "r")
    f = fileLinks.readline()
    commands = open("commands/mapcommands.js", "w")        
    commands.write("module.exports = {\n")
    commands.write("    name: 'mapcommandslist',\n")
    commands.write("    description: 'This is the list of commands for grabbing map information',\n")


    commands.write("    commandslist(command, newclient, message, args){\n")
    count = 0
    for link in f.split(","):
        reqs = requests.get(link)
        soup = BeautifulSoup(reqs.text, 'html.parser')
        mapname = str(soup.find('title')).replace('.rar - Google Drive</title>','').replace('<title>','')         
        fixedmapname = fixtitle(mapname) 
        if count == 0:
            commands.write('        if (command === "' + fixedmapname + '") {\n')
            commands.write("            newclient.commands.get('" + mapname+ "').execute(message, args);\n")
            commands.write("            return true\n")
            commands.write("        }\n")
            count += 1
        else:
            commands.write('        else if (command === "' + fixedmapname + '") {\n')
            commands.write("            newclient.commands.get('" + mapname+ "').execute(message, args);\n")
            commands.write("            return true\n")
            commands.write("        }\n")
    commands.write("    }\n")
    commands.write("}\n")



automatemapcommands()

#create function to automate putting map names associated with a number into maplists.txt
def main():
    fileLinks = open("mapAutomation/drivesharelink.txt", "r")
    f = fileLinks.readline()
    count = 1
    writeinfile = open("underworldMaps/maplist.txt", "w")       
    for link in f.split(","):
        reqs = requests.get(link)
        soup = BeautifulSoup(reqs.text, 'html.parser')
        mapname = str(soup.find('title')).replace('.rar - Google Drive</title>','').replace('<title>','')         
        fixedmapname = fixtitle(mapname)
        writeinfile.write(str(count) + "." + fixedmapname + "\n")
        count += 1


# main()


#def main():





























