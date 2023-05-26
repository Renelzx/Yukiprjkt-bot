let handler = async (m, {conn, command, args, usedPrefix}) => {

let misi = `- Grab
- Bunuh
- Ojek
- Anu
- Polisi
Example : .misi bunuh`
const sections = [
   {
	title: `✃ MISI`,
	rows: [
	    {title: "🚖 Taxy", rowId: '.grab', description: 'Rpg Taxy' },
	    {title: "☠️ Membunuh", rowId: '.bunuh', description: 'Rpg Membunuh' },
	{title: "🛵 Ojek", rowId: '.ojek', description: 'Rpg Ojek' },
	{title: "🥵 Nganu", rowId: '.anu', description: 'Rpg Open anu' },
	{title: "🤠 Koboy", rowId: '.koboy', description: 'Rpg Koboy' },
	{title: "👮 Polisi", rowId: '.polisi', description: 'Rpg Polisi' },
	]
    }, 
]
const listMessage = {
  text: `Silakan Pilih Misi Di Bawah...`,
  footer: global.wm,
  title: `⎔───「 ${command} 」───⎔`,
  buttonText: `Pilih Disini️`,
  sections
}

await conn.sendMessage(m.chat, misi, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['misi', 'misirpg']
handler.tags = ['info']
handler.command = /^(misi(rpg)?|misirpg)$/i
handler.private = false

export default handler
