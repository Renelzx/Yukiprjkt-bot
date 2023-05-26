import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
let res = `https://api.zeltoria.my.id/api/sfw/loli?apikey=${global.zeltoria}`
let kata = 'Cih Dasar Pedoo'
conn.sendMessage(m.chat, { image : { url: res}, caption: kata}, m)
}
handler.command = /^(loli)$/i
handler.tags = ['anime']
handler.help = ['loli']
handler.limit = true
export default handler