import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  
let res = await fetch(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${global.lolkey}`)
    let json = await res.json()
await conn.sendMessage(m.chat, { image: { url: json.result.thumbnail }, caption: `Judul: ${json.result.title}
Desc: ${json.result.desc}
Cerita: ${json.result.story}`}, { quoted: m})
}
handler.help = ['ceritahoror']
handler.tags = ['internet','fun']
handler.command = /^ceritahoror$/i


export default handler