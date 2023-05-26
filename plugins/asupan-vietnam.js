import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api.zeltoria.my.id/api/cecan/vietnam?apikey=${global.zeltoria}`
	 conn.sendMessage(m.chat, { image: { url: url }, caption: 'Nih Kak'}, m)
}
handler.command = /^(vietnam)$/i
handler.tags = ['asupan']
handler.help = ['vietnam']
handler.premium = false
handler.limit = true

export default handler