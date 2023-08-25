import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!args[0]) throw `Linknya?`
  let res = await fetch(`https://xzn.wtf/api/tiktok?url=${args[0]}&apikey=${global.xzn}`)
  let x = await res.json()
  let cap = `Nih Kak Videonya >,<`
  conn.sendFile(m.chat, x.data.play, 'tiktok.mp4', cap, m)
}
handler.help = ['tiktok','ttdl']
handler.tags = ['downloader']
handler.command = /^(tiktokdl|ttdl|tiktok|tt)$/i
export default handler
