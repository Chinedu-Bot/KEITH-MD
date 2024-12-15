/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0dVTVdmQWRuVU16VWpwM3hzUE52TFhJUGhucmVlNWIzQlg3aGhxMTdVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV3h6MEY2cHpWMnJobSs5SzZ5T0RxK004TGVqUktsY0NHd1ZEZ1d6Y3NsZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSjM0aG5IanYycktxandNeHc4MkdpenFuK2ZMcWtrbUJKMld4MnpRa0dZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJybWxZRUZ4eFYwMGkvNkRjYk9OMU4wY3FpZXFKa05aZUh2Z3pnTVo4UEJrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldDR2t4ZEZKSzdvSlBVY1d1NVlybS8rWDhSUDZwNGlYUXNiSklMNjgyWFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNTOEtEc3ZtZ21ObFQ0NjNDSVYzZmZXRFd5S1VCdE9HdWs4cVNNOGZ2aFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUxPeEpKcmNjanpxRVhuU05WY00yZDVncFVZcGVGa0wrR0RoNEx3dFNWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3BMQWwzd0hxZktldEllNU5tcEZTUDlYL0Z5K09UWnREVVArUFRneElHOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlN5YkYzaW5HZS92YXMwcFFod3k3dlVMbFJtN0tuenlsRE03TGNsVXo4K1hQZmt2QlhJMkZBN2lUMFcyakFvaHYxM3ZBbEd4NWJEa2tlTzI0NTlXbWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAsImFkdlNlY3JldEtleSI6InVxMmhwYS9sL2dkNW1Ib1dXTytYMU5wSEVSK0tKVmxSRDYxVE9SQS9HMTQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImhUVll0WXA1U0NlVnp3LXdWdlZrRlEiLCJwaG9uZUlkIjoiYTEwYTNjYjAtYTcxMi00YTk1LTgyMTEtNGI0OGViYWRjMmUyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlyNjY3UnNLOGxicE4xL2p0b3NXVjM2a0IrMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvK0ZQQ0pkVlBTYzJmVVUwSUVaODlmeU5SbGc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiS1ZCUkEySjkiLCJtZSI6eyJpZCI6IjIzNDcwNDc1MDQ4NjA6MjVAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09xdTRLY0dFTkhoKzdvR0dBa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjRKaUloRDRmWnVvNE1hQVcwK1J2eUswbml3eE9TRlNUelQxVU5ybnZ3QnM9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImgzbGpHOGpzS1FOVTdGSDRBcEcyeXNob0s3VWZua1hCa1NidTgrNVNiVlhNbnkrQkdxWUVLdm1Yb0VZRzB2a0JUNlhXV2VQNXZ1NjArOUUvTTl1ekRRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDSmFkYldlMWNiSWwyb2dYYUk1WUJSMkJWbm4wUXpIUnFwaHdsaFJydWtIaDVJbmxEWjh2RUhYV001SnJIU3FHdm42bXlMbENoVXU4d29iN0hqM1podz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNDc1MDQ4NjA6MjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZUNZaUlRK0gyYnFPREdnRnRQa2I4aXRKNHNNVGtoVWs4MDlWRGE1NzhBYiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNDI3NTI5NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJcG0ifQ==';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.DEV || '254748387615';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antispam = process.env.ANTISPAM || 'true';
const chatbot = process.env.CHAT_BOT || 'true';
const antilink = process.env.ANTILINK || 'true';
const autoreact = process.env.AUTOREACT || 'true';
const antibot = process.env.ANTIBOT || 'true';
const anticall = process.env.ANTICALL || 'true';
const antibad = process.env.ANTI_BAD_WORD || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  autobio,
  autoreact,
  mode,
  antibad,
  antilink,
  prefix,
  anticall,
  chatbot,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  antibot,
  session,
  antitag,
  antidelete
};
