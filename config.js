const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib05ZYzV3RDhlM01jdU5BU0xSVDQ0SmZZMmxJSkZDS0MxVm43bVlCQ2xWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0RQVUUxL1pCZmFKMlJpZ1FZSHpWQ0ZkOXpJV0lHNEhDY2Z2Tm1CWW9EUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnQ2NrUjB1ek5yTXp2WWlrQkEyUy9IdmFYWWNaVy8vN3VxNS90UHFsZ1hzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJURjJSVUhFdUc5cXZXVGtjV3BaQndUbnVtWkFTdXdtd2l1d24wcjdRQm1nPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVOUkF5ME9sK3BWYllLOHNHVTVsaGhxcmZwTU1jNTlaaWpNYzdDaVl2bWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldUNmZoMmg0WGlPZDY2Wlk3cjVPcGF6UnVrVUxTZ25WcmlPcWNMY1J3M2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0xOK1JoRTRWNnBwdUdxY29CZDllR3lYTUZQZkZzYVhmbEY1ZGIxQVBGaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFlRTFlrTU51NlFURDFZd0poYVJVMi9tZWZkNU0xL001MEI2WFQrWUcyUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdldmkzTUV2b0Y1OFdhU0NDZ0szSkRQaVMvZW5ZNFNPZUNYeU9hcWRJbkY0SUdBMWNFRWplakVWU2hIUDJ1NmpGNi8yVkhtYnhGOFlGSit3VUNaRERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzAsImFkdlNlY3JldEtleSI6Imw3MlJ0a0VTV09DRjBLS2VCM1poa2ZtbHhzY3V4K1I1d0dpNXh2OE44R2s9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkU1TkdEUDNLIiwibWUiOnsiaWQiOiI5NDc1MzY4NjM1MDozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFrYXNoIO+jvyIsImxpZCI6IjE3MjQwMzM0Mjk5Mjk2OjNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQYXN0NkFDRU1yNzI4UUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJreWdNUGIyVFBzTHI1WXBpd1o1TVZPL0tadEx6OVByL1JUM1hSSTJpUWdnPSIsImFjY291bnRTaWduYXR1cmUiOiI3dEpSZkMvV3p5dkpNSUpkaml5bDExUE5ER1J6UUUvK2lIUHFNaWg1Q0QyczZTQWJSSW1FMCszdzJDeUdtY2EwVTBiSkFtTGF1ck5hVDRVeXJoQ2hDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiY3BySERucjAxUHIvSkNaZnRTWTJFaG9XbXo5aWhSc1VkRGZlaS9nQUNuZ3lkS3F6bW5RdWJhNzBLbVEvajY2dmF4M1R0YVJ0SFp2R2N2T1NidnRIQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc1MzY4NjM1MDozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpNb0REMjlrejdDNitXS1lzR2VURlR2eW1iUzgvVDYvMFU5MTBTTm9rSUkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NDcyNTgzNywibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQbGoifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY AKASH-MD-V4 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/5rujjj.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "AKASH-MD-V4",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "AKASH-MD-V4",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94753686350",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Akash-MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Akash-MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/5rujjj.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "94753686350",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
