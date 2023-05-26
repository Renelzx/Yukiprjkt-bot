import fetch from 'node-fetch'

let handler = async (m, { conn, text, command }) => {
    if (!text) throw 'Mau Cari Apa?'
	let zeltoria = `https://api.lolhuman.xyz/api/wallpaper?apikey=${global.lolkey}&query=${text}`
	conn.sendMessage(m.chat, { image: { url: zeltoria }, caption: `Nih Kak Pencarian Dari ${text}`}, m)
}
handler.help = ['wallpaper','wp']
handler.tags = ['search']
handler.command = /^(wallpaper|wp)$/i

handler.limit = true

export default handler