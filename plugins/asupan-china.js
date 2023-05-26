import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api.zeltoria.my.id/api/cecan/china?apikey=${global.zeltoria}`
	conn.sendMessage(m.chat, { image: { url: url }, caption: 'Nih Kak'}, m)
}
handler.command = /^(china)$/i
handler.tags = ['asupan']
handler.help = ['china']
handler.premium = false
handler.limit = true

export default handler