import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api.lolhuman.xyz/api/random/husbu?apikey=${global.lolkey}`
	conn.sendMessage(m.chat, { image : { url : url }, caption : 'Nih Kak Husbunya' }, m)
}
handler.command = /^(husbu)$/i
handler.tags = ['anime']
handler.help = ['husbu']
handler.limit = true
export default handler
