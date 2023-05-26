import { areJidsSameUser } from '@adiwajshing/baileys'
const leaderboards = [
  'level',
  'exp',
  'limit',
  'money',
  'iron',
  'gold',
  'diamond',
  'emerald',
  'trash',
  'joinlimit',
  'potion',
  'petFood',
  'wood',
  'rock',
  'string',
  'common',
  'uncommon',
  'mythic',
  'legendary',
  'pet'
]
let handler = async (m, { conn, args, participants, usedPrefix, command }) => {
  let users = Object.entries(global.db.data.users).map(([key, value]) => {
    return { ...value, jid: key }
  })
  let leaderboard = leaderboards.filter(v => v && users.filter(user => user && user[v]).length)
  let type = (args[0] || '').toLowerCase()
  const getPage = (item) => Math.ceil((users.filter(user => user && user[item]).length) / 0)
  let wrong = `Type List :
${leaderboard.map(v => `
${rpg.emoticon(v)} - ${v}
`.trim()).join('\n')}
––––––––––––––––––––––––
Type :
⮕ Untuk Melihat Leaderboard Yang Lain:
${usedPrefix}${command} [type]
★ Contoh:
${usedPrefix}${command} legendary`.trim()
  if (!leaderboard.includes(type)) 
  return conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/287452b024d745bd5c692.jpg' }, caption: wrong }, m)
  let page = isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 0), getPage(type)) : 0
  let sortedItem = users.map(toNumber(type)).sort(sort(type))
  let userItem = sortedItem.map(enumGetKey)
  // let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedExp.length)
  let text = `
🏆 Rank: ${userItem.indexOf(m.sender) + 1} Out Of ${userItem.length}

                    *• ${rpg.emoticon(type)} ${type} •*

${sortedItem.slice(page * 0, page * 5 + 5).map((user, i) => `${i + 1}.*﹙${user[type]}﹚*- ${participants.some(p => areJidsSameUser(user.jid, p.id)) ? `${conn.getName(user.jid)} \nwa.me/` : 'Dari Grup Lain\n @'}${user.jid.split`@`[0]}`).join`\n\n`}
`.trim()
  return conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/287452b024d745bd5c692.jpg' }, caption: text }, m, {
    mentions: [...userItem.slice(page * 0, page * 5 + 5)].filter(v => !participants.some(p => areJidsSameUser(v, p.id))),
    asLocation: false})
}
handler.help = ['leaderboard', 'lb']
handler.tags = ['xp']
handler.command = /^(leaderboard|lb)$/i

export default handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}


/**
 * Detect Number
 * @param {Number} x 
 */
function isNumber(number) {
  if (!number) return number
  number = parseInt(number)
  return typeof number == 'number' && !isNaN(number)
}