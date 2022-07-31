# UnderworldDiscordBot
Discord bot made for l4d underworld server

## Set up instructions
1. Download zip folder
2. Unzip and put folder somewhere easily accesable
3. Open folder in an ide(preferably vscode)
4. Open terminal
5. Put `nmp install discord.js` in terminal and hit enter

## Starting up bot instructions
1. Open the `index.js` file
2. Open a terminal and type `node .` and hit enter

## Using the bot
- When the bot is running and is online in the discord server, enter `-help` for a list of commands
- Map downloads can be used by entering `-<INSERT MAP NAME HERE>` 

<br>

L4D underworld server downloadable maps and commands have already been generated and are in the file. If you wish to create your own commands/downloadable maps, please delete the files name `mapcommands.js` file and the `downloadableMaps` folder as you will now create them from scratch. To help make them, an automative script has been created and can be found in `main.py` and instuctions follow:

## Enabling bot to send L4D map download links instructions
1. You need to upload all the maps that you want the bot to be able to send out, I created a brand new google account since multiple maps will take up a lot of storage(HIGHLY recommended you create a new google account since this will take up a lot of space, 15 GB's are given for free per account) 

2. You can upload the maps as either a VPK or RAR file, note that with a rar file if another user decides to download the map they will need either the program [winrar](https://www.win-rar.com/start.html?&L=0)  or [7zip](https://www.7-zip.org/download.html) to convert it into a vpk file(I chose to do rar)

3.Once all maps are uploaded to the drive, create a link which will share all the maps(I do it by clicking on a map and holding `ctrl-a` and then click on the share button. Make sure you give general access to anyone with link as a viewer.

## Creating map automation files instructions
1. Open `main.py` in the `mapAutomation` folder and uncomment `automatefixtitlefile()` 
2. A new file will be created named `fixtitle.py`
    - This file will fix create new map names for its respective map by removing all the unnecessary characters like "_" and " "
    - The reason for this is to make creating map commands easier. For example if a user wanted to download the grave outdoors custom campaign, instead of them having to type `-darkblood_v2`, they could type `-darkblood`
    - If you want to add a map and want a specific character to be removed and is unsure if its already being removed, go to the function `automatefixtitlefile` and look to see if the character you want to removed is in one of the `.replace(...)`
    - If you do not see it being removed type `titleversionremoved6 = titleversionremoved5.replace(<INSERT CHARACTER DESIRED TO BE REMOVED HERE>)` above the line `if count == 0:`
 3. Run the `main.py` file and wait
 4. Once the file is being done running, a new file named `fixtitle.py` should be created
 

## Creating Map Modules instructions
1. Once `fixtitle.py` is created, uncomment `from fixtitle import *` at the top and `automatedownloadableMapsFiles()` at the bottom
2. Comment out `automatefixtitlefile()` and run the file
3. Once the file is done running all the downloadable maps should have a file in `../downloadableMaps`
4. Comment out `automatedownloadableMapsFiles()`

## Creating Map command instructions
1. Uncomment `automatemapcommands()` and run the file

























Sources:
'https://discord.js.org/#/'
'https://www.crummy.com/software/BeautifulSoup/bs4/doc/'
'https://pypi.org/project/requests/'
