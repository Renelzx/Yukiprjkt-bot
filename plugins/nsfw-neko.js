import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text, args }) => {
  let res = await fetch(`https://api.waifu.pics/nsfw/neko`)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Solid banget kamuh', m)
}
handler.command = /^(nsfwneko|nneko)$/i
handler.premium = false
handler.limit = true

export default handler