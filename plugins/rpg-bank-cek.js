let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  let ption = `
╭「 *B A N K  U S E R* 」
│• *Name:* ${user.registered ? user.name : conn.getName(m.sender)}
│• *Atm:* ${user.atm > 0 ? 'Level ' + user.atm : '✖️'}
│• *Bank:* ${user.bank} 💲 / ${user.fullatm} 💲
│• *Money:* ${user.money} 💲
│• *Level:* ${user.robo > 0 ? 'Level ' + user.robo : '✖️'}
│• *Status:* ${user.premiumTime > 0 ? 'Premium' : 'Free'}
│• *Registered:* ${user.registered ? 'Yes':'No'}
└──···
`
  conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/471d2d71f167ce63bddeb.jpg' }, caption: ption }, m)
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank)$/i

handler.register = false
export default handler