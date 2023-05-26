import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api.zeltoria.my.id/api/cecan/thailand?apikey=${global.zeltoria}`
	 conn.sendMessage(m.chat, { image: { url: url }, caption: 'Nih Kak'}, m)
}
handler.command = /^(thailand)$/i
handler.tags = ['asupan']
handler.help = ['thailand']
handler.premium = false
handler.limit = true

export default handler