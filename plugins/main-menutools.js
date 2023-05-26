import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, text }) => {
let usrs = db.data.users[m.sender]
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
let tek = `╭───『 Your Info 』
❏ *Nama:* ${usrs.registered ? usrs.name : conn.getName(m.sender)}
❏ *Tags:* @${m.sender.split`@`[0]}
❏ *Status:* ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
❏ *Premium:* ${usrs.premiumTime > 1 ? 'Yes': 'No'}
❏ *Limit:* ${usrs.limit}
❏ *Level:* ${usrs.level}
❏ *Role:* ${usrs.role}
❏ *Money:* ${usrs.money}
❏ *User:* ${Object.keys(global.db.data.users).length}
╰–––––––––––––––༓
${readMore}
❏–––––『 *Tools* 』
┆≼≽ start
┆≼≽ leave
┆≼≽ next
┆≼≽ sendkontak
┆≼≽ cut
┆≼≽ bass
┆≼≽ blown
┆≼≽ deep
┆≼≽ earrape
┆≼≽ fast
┆≼≽ fat
┆≼≽ nightcore
┆≼≽ reverse
┆≼≽ robot
┆≼≽ slow
┆≼≽ smooth
┆≼≽ tupai
┆≼≽ tomp3
┆≼≽ tovn
┆≼≽ blur
┆≼≽ calc
┆≼≽ fetch
┆≼≽ delnote
┆≼≽ addvn
┆≼≽ addmsg
┆≼≽ addvideo
┆≼≽ addsticker
┆≼≽ lockmsg
┆≼≽ unlockmsg
┆≼≽ removebg
┆≼≽ viewnote
┆≼≽ notepad
┆≼≽ qrcode
┆≼≽ react
┆≼≽ readmore
┆≼≽ spoiler
┆≼≽ readviewonce
┆≼≽ ssweb
┆≼≽ style
┆≼≽ toaksara
┆≼≽ tourl
┆≼≽ toimg
┆≼≽ tts
┆≼≽ upload
┆≼≽ webcek
❏–––––––––––––––༓`
conn.sendMessage(m.chat, {image: {url: global.thumb}, caption: tek}, m)
}
handler.command = /^(menutools)$/i

export default handler
