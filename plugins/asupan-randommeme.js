import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api.zahwazein.xyz/randomimage/memeindo?apikey=zenzkey_1ec92f71d3bb`
        conn.sendMessage(m.chat, { image: { url: url }, caption: 'Nih Kak'}, m)
}
handler.command = /^(randommeme|meme)$/i
handler.tags = ['asupan']
handler.help = ['randommeme']

export default handler
