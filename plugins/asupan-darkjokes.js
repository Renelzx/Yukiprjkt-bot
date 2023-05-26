import fetch from 'node-fetch'
import bo from 'dhn-api'
let handler = async (m, { conn }) => {
const res = await bo.Darkjokes()
await conn.sendMessage(m.chat, { image: { url: res }, caption: 'Dark Ga Sih Adik Adik?'}, m)
}
handler.help = ['darkjoke']
handler.tags = ['asupan']
handler.command = /^(darkjoke)$/i
handler.limit = true

export default handler