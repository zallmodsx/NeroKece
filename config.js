/*
Thanks to Botcahx
Thanks to Betabotz
Thanks to DyLux-FG
Thanks to Subscriber
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['62895340476887', '𝚉𝚊𝚕𝚕𝙼𝚘𝚍𝚜', true],
  ['62895340476887']
] // Nomor Owner

global.mods = ['62895340476887'] 
global.prems = ['62895340476887', '62895340476887']

// apikey
global.lann = 'apikeylu'
// apikeylu di ganti menggunakan apikey yang di dapatkan di website https://api.betabotz.org. contohnya global.lann = 'nans' (contoh). cara mendapatkan apikey. masuk website > scroll ke bawah dan cari harga yang kamu mau ada juga yang free dan tekan > otomatis akan di arahkan untuk registrasi, isi data diri email dll. > kalo sudah klik profil dan di situ akan muncul apikey mu. terima kasih.

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-fgmods.ddns.net': 'mhdAnan',
  'https://api.betabotz.org': 'apikeylu'
}

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org'
}

// Watermark
global.nama = '𝚉𝚊𝚕𝚕𝙼𝚘𝚍𝚜' // nama owner
global.nomor = '62895340476887' // nomor owner
global.nans = '𝚉𝚊𝚕𝚕𝙼𝚘𝚍𝚜' // nama bot 
global.thumb = 'https://telegra.ph/file/f59076db06b7acb6c1f5d.jpg' // thumbnail bot ( foto menu )
global.dygp = 'https://chat.whatsapp.com/GexHItKmrL4ILft1gBb5ck' // link group yang ada di menu

// Sticker wm
global.packname = '𝚉𝚊𝚕𝚕𝙼𝚘𝚍𝚜' 
global.author = '62895340476887' 
global.fgig = 'https://chat.whatsapp.com/GexHItKmrL4ILft1gBb5ck' // bebas tapi jangan kosong 
global.fgsc = 'https://github.com/zallmodsx' // bebas tapi jangan kosong
global.fgyt = 'https://blog.zallmodsx.repl.co' // bebas tapi jangan kosong
global.fgpyp = 'https://blog.zallmodsx.repl.co' // bebas tapi jangan kosong
global.fglog = 'https://telegra.ph/file/f59076db06b7acb6c1f5d.jpg'

// Other
global.dana = '62895340476887'
global.qris = 'https://telegra.ph/file/f59076db06b7acb6c1f5d.jpg'
global.web = '𝚉𝚊𝚕𝚕𝙼𝚘𝚍𝚜'
global.email = 'zallmodsx@gmail.com'
global.lastm = '*----[ 𝚉𝚊𝚕𝚕𝙼𝚘𝚍𝚜 ]----*'

global.wait = 'Wait....'
global.rwait = '🗿'
global.dmoji = '😂'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // Peringatan maksimum

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})