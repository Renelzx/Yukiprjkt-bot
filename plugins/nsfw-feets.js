import fetch from 'node-fetch'

let handler = async (m, { command, conn }) => {
  let cap = `
Silakan Aktifkan`
   let anu = await fetch(`https://api.lolhuman.xyz/api/random/nsfw/animefeets?apikey=${global.lolkey}`)

   let fimgb = Buffer.from(await anu.arrayBuffer())

                       conn.sendMessage(m.chat, { image : { url : pickRandom(fimgb) }, caption : `Cih Dasar Sangean` }, m)
}
handler.help = ['feets']
handler.tags = ['nsfw','premium']
handler.command = /^(feets)$/i
handler.limit = true
handler.premium = true

export default handler