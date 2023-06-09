import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'
import { group } from 'console'
import PhoneNumber from 'awesome-phonenumber'
/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00 
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)


global.owner = [
['6287780999540', true],
['6287780999540', 'Renelz', true],
['6287780999540', 'Renelz', true]
]
global.mods = []
global.prems = []
global.nomorbot = '6281319274456'
global.nomorown = '6287780999540'
global.nomorown1 = '6287780999540'
global.nomorown2 = '6287780999540'
global.nomorwa = '6287780999540'


global.readMore = readMore
global.author = 'Renelz'
global.namebot = '​Yukiprjkt'
global.wm = '©Yukiprjkt'
global.media = 'https://telegra.ph/file/02a8d3c4b00146bbfeb5d.jpg'
global.watermark = wm
global.wm2 = 'Yukiprjkt'
global.botdate = `Date: ${week} ${date}\nTime: ${wktuwib}`
global.bottime = `Time: ${wktuwib}`
global.titlebot = `Yukiprjkt`
global.stickpack = 'Yukiprjkt'
global.stickauth = `©Renelz`
global.week = `${week} ${date}`
global.wibb = `${wktuwib}`
global.nameown1= 'Renelz'
global.nameown2 = 'Renelz'
global.Linkgc = 'https://chat.whatsapp.com/Jtrxmg0GXdIIEOavTjSjGR'
global.lynk = '-'
//Link Social Media Ganti Aja Kalau Ga Punya Biarin Aja
global.sig = 'https://www.instagram.com/reyuvvu' //instagram
global.sgh = 'https://github.com/Renelx' //github
global.sgc = 'https://chat.whatsapp.com/Jtrxmg0GXdIIEOavTjSjGR' //group whatsapp
global.sdc = '-' //discord
global.snh = 'https://www.youtube.com/@Renelz' //youtube
//Donasi/Payment
global.psaweria = '-'
global.ptrakterr = '-'
global.pdana = '-' // dana
global.povo = '-'
global.pgopay = '087780999540' // gopay
global.plinkaja = '-' //link aja
global.ppulsa = '087780999540' // pulsa
global.ppulsa2 = '-' //pulsa 2
global.ListHargaSewa = '├ 5 Hari IDR 3.000\n├ 7 Hari IDR 5.000\n├ 15+5 Hari IDR 10.000\n├ 30 Hari IDR 15.000'
//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ TAMPILAN ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.LyAtas1 = '•⟅━━━ ❨'
global.LyAtas2 = '❩'
global.Ly = '┃'
global.lybwh = '┗━━┈┈ ⳻⳻'
global.sym = '◈▻'
global.sym2 = '➭'
global.dmenut = 'ଓ═┅═━–〈' //top
global.dmenub = '┊↬' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer
global.dashmenu = '❏ *DASHBOARD* ❏'
global.cmenut = '❏––––––『' //top
global.cmenuh = '』' //header
global.cmenub = '┊✦ ' //body
global.cmenuf = '┗━═┅═━––––––๑\n' //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '
global.pmenus = '✦'
global.htki = '『' // Hiasan Titile (KIRI)
global.htka = '』' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = '✦'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']
// wait proses
global.stiker_wait = '_Sedang Di Proses, Mohon Tunggu_.....'
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
// kata game tapi biarin aja ga ngaruh :v
global.benar = '𝙶𝚘𝚘𝚍 𝙹𝚘𝚋𝚋! ◕◡◕'
global.salah = '𝙽𝚘𝚝 𝙱𝚊𝚍! ◕◠◕'
global.dikit = "𝙳𝚒𝚔𝚒𝚝 𝙻𝚊𝚐𝚒,𝚂𝚎𝚖𝚊𝚗𝚐𝚊𝚝!!"


global.multiplier = 69 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

// untuk apikey biarin aja pake ini aja kalau fitur error beli apikeynya
global.zenzkey = 'zenzkey_1ec92f71d3bb'
global.lolkey = 'SGWN'
global.caliph = 'Lwlct6wi'
global.rose = 'Rs-Danil_Elistz'
global.zeltoria = 'Elistz'
global.ibeng = 'tamvan'
global.xcode = 'Frieren'
global.xzn = 'renelz'
global.openai = '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'
global.APIs = {
  lol: 'https://api.lolhuman.xyz',
  violetics : 'https://violetics.pw',
  rose: 'https://api.itsrose.site',
  popcat : 'https://api.popcat.xyz',
  xcoders : 'https://api-xcoders.site',
  violetics : 'https://violetics.pw'
}

global.APIKeys = { 
  'https://api.lolhuman.xyz': 'SGWN',
  'https://violetics.pw': 'beta',
  'https://zxn.wtf': 'renelz'
  'https://api.itsrose.site': 'Rs-Danil_Elistz',
  'https://api-xcoders.site': 'Frieren',
  'https://violetics.pw': 'beta'
}

global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'
global.optsnsfw = true 
global.premnsfw = true 
// foto/image bot
//ganti aja kalau ga tau cara gantinya buka telegra.ph upload
//foto nya di situ terus salin link nya kesini
global.lia = 'https://telegra.ph/file/e4a09e991383e3426230d.jpg'
global.thumb = 'https://telegra.ph/file/75ca93a92e12fbda3a868.jpg' 
global.imagebot = 'https://telegra.ph/file/3cdaaf791f4eeffe51416.jpg'
global.giflogo = 'https://telegra.ph/file/c02bad57b6ce1d594a11c.mp4'
global.thumbs = ['https://telegra.ph/file/5adcb114b279c0085ac15.jpg']
global.thumbnailUrl = [
  'https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg'
]
global.fotonya1 = 'https://telegra.ph/file/66cde7753935a62dc5c90.jpg'
global.fotonya2 = 'https://telegra.ph/file/1436170f781da2f2db978.jpg' 
global.dtu = 'Official Group'
global.urlnya = "https://chat.whatsapp.com/Jtrxmg0GXdIIEOavTjSjGR"
global.dtc = 'Call Owner'
global.phn = '0877 8099 9540'

global.fsizedoc = '999'
global.fpagedoc = '999'
global.thumbdoc = 'https://telegra.ph/file/5adcb114b279c0085ac15.jpg'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
