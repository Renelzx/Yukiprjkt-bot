import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
let pay = 'https://telegra.ph/file/cf107c0832a1de96efd57.jpg'
let info = `
╭──「 *SEWA* 」
┊• *1 Minggu:* 5K
┊• *1 Bulan:* 15K
┊• *Permanen:* 50K
┠──「 *PREMIUM* 」
┊• *1 Bulan:* 10K
╰────────────๑
┌─「 *Donasi & Payment* 」
│ • *Ovo:* [${global.povo}]
│ • *Saweria:* [${global.psaweria}]
│ • *Trakteer:* [${global.ptrakterr}]
❏──────────────๑
`
conn.sendMessage(m.chat, { image: { url: pay }, caption: info }, m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['info']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
