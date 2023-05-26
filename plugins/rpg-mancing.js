let { MessageType } = (await import('@adiwajshing/baileys')).default

let wm = global.wm
let handler = async (m, { conn, usedPrefix, owner }) => { 
     try {
        let __timers = (new Date - global.db.data.users[m.sender].lastfishing)
        let _timers = (240000 - __timers) 
        let timers = clockString(_timers)
        let you = conn.getName(m.sender)
        let user = global.db.data.users[m.sender]
        
        if (global.db.data.users[m.sender].fishingrod > 0 ) {
        if (new Date - global.db.data.users[m.sender].lastfishing > 240000) {
        	
        
        let ikan = `${Math.floor(Math.random() * 30)}`.trim() 
        let lele = `${Math.floor(Math.random() * 15)}`.trim() 
        let nila = `${Math.floor(Math.random() * 10)}`.trim() 
        let bawal = `${Math.floor(Math.random() * 10)}`.trim() 
        let udang = `${Math.floor(Math.random() * 39)}`.trim()
        let paus = `${Math.floor(Math.random() * 2)}`.trim() 
        let kepiting = `${Math.floor(Math.random() * 27)}`.trim() 
           let _psepick= `${pickRandom(['1', '0', '0', '1'])}`
            let psepick = (_psepick * 1)
            let _psenjata = `${pickRandom(['1', '0', '0', '0'])}`
           let psenjata = (_psenjata * 1)
           
        let mcng = `
*Hasil Tangkapan Mu*
        
🐟Nila : ${nila}
🐡Bawal : ${bawal}
🐟Lele : ${lele}
🐟Ikan : ${ikan}
🦐Udang : ${udang}
🐋Paus: ${paus}
🦀Kepiting: ${kepiting}

_Total Pancingan↓_
${nila + bawal + ikan + lele}
        
Kamu Bisa Memasaknya Dan Mengisi Stamina Kamu💉
_Contoh:_
${ usedPrefix }Cook catfish `    
        setTimeout(() => {                 
        conn.reply( m.chat, mcng, m)
         if (psepick > 0 ) {
         	global.db.data.users[m.sender].psepick += psepick * 1
         m.reply(`Kamu Mendapatkan 🎁Weapons Epic ${psepick} item`)
         } 
        if  (psenjata > 0 ) {
        	global.db.data.users[m.sender].psenjata+= psenjata * 1
        m.reply(`Kamu Mendapatkan 🎁Weapons ${psenjata} Item`)
        	}
        }, 38000)

        setTimeout(() => {
                     m.reply(`*Tali Pancing Kamu Mau Putus, Tetapi Kamu Mencoba Berusaha Mempertahankan Seperti Dia Yg Pergi Darimu*`)
                      }, 28000)
        setTimeout(() => {
                     m.reply(`*Kamu Menunggu Ikan Memakan Umpanmu Sambil Coli 🗿*`)
                      }, 18000)
       setTimeout(() => {
                     m.reply(`*Kamu Melemparkan Umpang Ke Anu 🗿*`)
                      }, 8000)
       setTimeout(() => {
                     m.reply(`*Kamu Mulai Memancing🎣*`)
                      }, 0)
                      
        global.db.data.users[m.sender].nila += nila * 1
         global.db.data.users[m.sender].ikan += ikan * 1
         global.db.data.users[m.sender].lele += lele * 1
         global.db.data.users[m.sender].bawal += bawal * 1
         global.db.data.users[m.sender].udang += udang * 1
         global.db.data.users[m.sender].lastfishing += new Date * 1
         user.paus += paus * 1
         user.kepiting += kepiting * 1

        	  } else m.reply(`Kamu Sudah Memancing Tunggu Selama ${timers}`)
           } else m.reply(`*Kamu Tidak Punya Kail Pancingan 🎣*`)
           } catch (e) {
        console.log(e)
        conn.reply(m.chat, 'Error', m)
        if (owner) {
            let file = require.resolve(__filename)
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
      }
      handler.help = ['mancing','fishing']
handler.tags = ['rpg']
handler.command = /^(mancing|memancing|fish)$/i 

export default handler 
//JANGAN DIUBAH!
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
