import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
≡ _Saya sangat berterima kasih kepada kalian semua_

┌─⊷ _*THANKS TO*_
➠ Nurutomo
➠ Dylux
➠ Baileys 
➠ Whiskey
➠ BETABOTZ
➠ BOTCAHX
➠ Hard Ofc
➠ NasXploit
➠ GuhXSenpai
➠ Rehan
➠ Nayla
➠ SUBSCRIBER
└──────────────
`

    let pp = 'https://telegra.ph/file/f59076db06b7acb6c1f5d.jpg' 
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
   
}
handler.customPrefix = /^(tqto|tq|.tqto|.tq)$/i
handler.command = new RegExp

export default handler