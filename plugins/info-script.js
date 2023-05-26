import fs from 'fs'

let handler = async (m, { conn }) => {
let sc = 'https://telegra.ph/file/a06e7fd44e0739c09e99e.jpg'
	let krtu = `Thanks To :
	
• Adiwajshing
https://github.com/adiwajshing

• Nurutomo
https://github.com/Nurutomo

• BochilGaming
https://github.com/BochilGaming

• ShirokamiRyzen
https://github.com/ShirokamiRyzen

• ImYanXiao
https://github.com/ImYanXiao

• Ekuzika
http://github.com/Rmdhn-20

• David 
https://github.com/xct007

Dan Semua Yang Berkontribusi 
Dalam Pengambangan Script Ini

Penulis Ulang : Zeltoria
https://github.com/Zeltoria

Special Thanks To : Vynaa Chan >,<`
conn.sendMessage(m.chat, { image: { url: sc }, caption: krtu }, { quoted: m})
}
handler.help = ['thankstoo']
handler.tags = ['info']
handler.command = /^(thankstoo|thanksto|credits|tqto)$/i;
handler.group = false;

export default handler;
