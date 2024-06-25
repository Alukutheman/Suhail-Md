const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_30_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3LFxuICAgICAgICA1MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNixcbiAgICAgICAgNzksXG4gICAgICAgIDQyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjU0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjQsXG4gICAgICAgIDUsXG4gICAgICAgIDcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQxLFxuICAgICAgICA3NyxcbiAgICAgICAgOTksXG4gICAgICAgIDIwMixcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQxLFxuICAgICAgICA1NixcbiAgICAgICAgMzYsXG4gICAgICAgIDUxLFxuICAgICAgICAxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDU5LFxuICAgICAgICAyNyxcbiAgICAgICAgODksXG4gICAgICAgIDgsXG4gICAgICAgIDI5LFxuICAgICAgICA0MixcbiAgICAgICAgNjYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDgsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTg4LFxuICAgICAgICA3OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgwLFxuICAgICAgICA2MixcbiAgICAgICAgMjA3LFxuICAgICAgICA1NixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDM0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNixcbiAgICAgICAgODMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzMsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTUsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY2LFxuICAgICAgICA5MixcbiAgICAgICAgMTIyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDg5LFxuICAgICAgICA2LFxuICAgICAgICA5NixcbiAgICAgICAgMzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTE2LFxuICAgICAgICA5NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDM0LFxuICAgICAgICAxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAzNSxcbiAgICAgICAgMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDYsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDksXG4gICAgICAgIDkyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNjaEpYQ01ncm1ORXhaZm9pQmd4VmsrOGlNWjlpNDdzU3UzeGtMa2tLOTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzIwOTYyNTM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGQjg2OEI0NUU0QjJGM0U3RDM0MjA2N0RFQzVBOUVEQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkzMDc4NDRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MjA5NjI1MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQ4OUQzMDRBN0VGM0I4QkE4N0QzODZGQzVBNThBRkM3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTMwNzg0NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJkbW1xN0RJTVF1UzJkYUl3QXJ0MTd3XCIsXG4gIFwicGhvbmVJZFwiOiBcImQ0YjgwOGI1LWFjNTYtNDJjMy1hNzJlLThiOTljZjU1ZWZlYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MCxcbiAgICAgIDExNSxcbiAgICAgIDE4MixcbiAgICAgIDEyNyxcbiAgICAgIDY0LFxuICAgICAgMjQ1LFxuICAgICAgNjAsXG4gICAgICAxNDYsXG4gICAgICAxOTksXG4gICAgICAxNDEsXG4gICAgICAyMTIsXG4gICAgICAyMDgsXG4gICAgICAxMzIsXG4gICAgICAyMDYsXG4gICAgICA3MyxcbiAgICAgIDI0NixcbiAgICAgIDg3LFxuICAgICAgMTE0LFxuICAgICAgMTE5LFxuICAgICAgODhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEwLFxuICAgICAgMTQyLFxuICAgICAgNTYsXG4gICAgICAxOTYsXG4gICAgICAxMTYsXG4gICAgICAyMzEsXG4gICAgICAxNzIsXG4gICAgICAyMjAsXG4gICAgICAxNzQsXG4gICAgICA4NCxcbiAgICAgIDczLFxuICAgICAgMjI3LFxuICAgICAgMjIzLFxuICAgICAgMTA5LFxuICAgICAgMzAsXG4gICAgICAyMTksXG4gICAgICAzNyxcbiAgICAgIDIwNixcbiAgICAgIDIxMCxcbiAgICAgIDIyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGUUxMS0Q5WFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzIwOTYyNTM4OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzNTg0MTg4ODAxODUyMjoxMUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn5iJSsmG4oK04oK0yYbwn5iJXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkQ5MXI4SEVMcWM2ck1HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJFb3ViQ01hWER1RFAwS0NmYlgwMFo4YklmbE5aNGx0TXM1RndJL3VVdXlBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZ5dWY2bmhNZFFWV0REQXFLcEVIaVhVMDV2c3NtbGUyVm9LNXh6TFF3b29wVXZVWW5oMjREdFUwemttSGJVdmNjWmtLNC9OYTdNUGlIMlNtQ0dCN0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi80SVhyOTFkNWM1Zk9vcmxqSmR6UTNIUDVEUU9JVFQ1UGd4SzRaTmJUWDlIZEZpdFh3ZWk2UEYvSUhXTUZ5cjFNYWVySEwrVzhtMExvRGg4YS9NQmh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcyMDk2MjUzODoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkzMDc4MzcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGZFBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZkUC5qc29uIjogIntcImtleURhdGFcIjpcIjZhVmtMWmhZOVZwV25CNUMvcG5jQThhcnV4WWdpdElKNGRTRWlYaVJRWFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAxMjU5MzgwNyxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsNiw3XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkzMDY2NTY0ODFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
