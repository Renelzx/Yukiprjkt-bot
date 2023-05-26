let handler = async (m, { conn, usedPrefix, command }) => {
    let which = command.replace(/list/i, '')
    let msgs = global.db.data.msgs
    let split = Object.entries(msgs).map(([nama, isi]) => { return { nama, ...isi } })
    let fltr
    if (/all/i.test(command)) fltr = split
    if (/audio/i.test(command)) fltr = split
        .filter(v => v.message.audioMessage)
        .filter(m => m.message.audioMessage.ptt == false)
    if (/doc/i.test(command)) fltr = split.filter(v => v.message.documentMessage)
    if (/vn/i.test(command)) fltr = split
        .filter(v => v.message.audioMessage)
        .filter(m => m.message.audioMessage.ptt == true)
    if (/video/i.test(command)) fltr = split
        .filter(v => v.message.videoMessage && !v.message.videoMessage.gifPlayback)
    if (/gif/i.test(command)) fltr = split
        .filter(v => v.message.videoMessage)
        .filter(m => m.message.videoMessage.gifPlayback)
    if (/stic?ker/i.test(command)) fltr = split.filter(v => v.message.stickerMessage)
    if (/msg/i.test(command)) fltr = split.filter(v => v.message.conversation)
    if (/img/i.test(command)) fltr = split.filter(v => v.message.imageMessage)
    let list = fltr.map(v => `├ ${v.nama} ${v.locked ? '(🔒)' : ''}`).join('\n')
    if (list === '') throw 'gk ada'
    if (global.db.data.chats[m.chat].getmsg) return await m.reply(`
┌「 *Daftar Pesan* 」
${list}
└──────────
`.trim())
    else return await conn.reply(m.chat, `
┌「 *Daftar Pesan* 」
${list}
└──────────
`, m)
}
handler.help = ['all', 'listdoc', 'listvn', 'listmsg', 'listvideo', 'listgif', 'listaudio', 'listimg', 'liststicker']
handler.tags = ['tools']
handler.command = /^(daftar|list)(all|vn|doc|msg|video|audio|img|stic?ker|gif)$/

export default handler