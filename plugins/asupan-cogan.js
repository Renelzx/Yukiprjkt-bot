import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api.lolhuman.xyz/api/random/cogan?apikey=${global.lolkey}`
	conn.sendMessage(m.chat, { image: { url: url }, caption: 'Nih Kak'}, m)
	}
handler.command = /^(cogan)$/i
handler.tags = ['asupan']
handler.help = ['cogan']
handler.limit = true
export default handler
