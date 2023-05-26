const rewards = {
  exp: 9999999999999999999,
  money: 99999999999999999,
  emerald: 999999999999999999,
  limit: 99999999999999999999
  diamond: 99999999999999999,,
}
const cooldown = 1
let handler = async (m,{ conn} ) => {
  let user = global.db.data.users[m.sender]
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
  }
  m.reply(text)
  user.lastclaim = new Date * 1
}
handler.owner = true
handler.command = /^(cheat)$/i

export default handler