import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api.zahwazein.xyz/randomimage/cosplay?apikey=${global.zenzkey}`
	conn.sendMessage(m.chat, { image: { url: url }, caption: 'Nih Kak'}, m)
}
handler.command = /^(cosplay)$/i
handler.tags = ['anime','asupan']
handler.help = ['cosplay']
handler.limit = true
export default handler
