import fetch from 'node-fetch'

let handler = m => m
handler.all = async function (m) {
	
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/f59076db06b7acb6c1f5d.jpg')
	
	//reply link wa
   global.rpl = { contextInfo: { externalAdReply: { mediaUrl: dygp, mediaType: 'VIDEO', description: 'group suport', title: packname, body: 'group dukungan', thumbnailUrl: pp, sourceUrl: dygp }}} 
	
	//reply link PayPal
    global.rpyp = { contextInfo: { externalAdReply: { mediaUrl: fgpyp, mediaType: 'VIDEO', description: 'Donate', title: 'PayPal', body: 'membantu menjaga bot tetap aktif', thumbnailUrl: pp, sourceUrl: fgpyp }}}
	
	//reply link yt
    global.rpyt = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: fgyt, mediaType: 'VIDEO', description: '' + fgyt, title: '', body: '', thumbnailUrl: pp, sourceUrl: fgyt }}}

} 
export default handler