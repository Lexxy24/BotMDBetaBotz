/*
 - Create By FenZo||77+
 - Contact Me on https://wa.me/+6281385062956
 - Base Dika 
 - Jangan Di Ubh Author Dek awas aj
 - New Update Antivirus
 */
 
 
 

process.on('uncaughtException', console.error) //Safe Log Error
//=====================
require("./config")
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, WAFlag } = require('@adiwajshing/baileys')
const zmans = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
const path = require('path')
const os = require('os')
 const { TiktokDownloader } = require('./lib/tiktokdl') 
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const hx = require("hxz-api")
const hxz = require('./lib/hxz-api')
const bdr = require('rumus-bdr')
const yogipw = require("tod-api")
const { color, bgcolor } = require('./lib/color')
const thiccysapi = require('textmaker-thiccy')
const toHur = require('@develoka/angka-terbilang-js')
const mathjs = require('mathjs')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { EmojiAPI } = require("emoji-api")
const imgbbUploader = require('imgbb-uploader')
const primbon = new Primbon()
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./lib/limit.js');
const emoji = new EmojiAPI()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const { aiovideodl } = require('./lib/scraper.js')
const cheerio = require ("cheerio");
const textpro = require('./lib/textpro')
const { detikNews } = require('./lib/detik')
const { wikiSearch } = require('./lib/wiki.js');
const { Gempa } = require("./lib/gempa.js");
const ms = require('ms')
 let { covid } = require('./lib/covid.js') 
const { jadwaltv }= require('./lib/jadwaltv');
const { 
  yta, 
  ytv, 
  searchResult 
 } = require('./lib/ytdl')
// Database Rpg
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

// Read Database
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    ...(global.db || {})
}

let lolkey = global.lolhuman
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
//DATABASE
let pendaftar = JSON.parse(fs.readFileSync('./storage/user/user.json'))
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let ssewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let ban = JSON.parse(fs.readFileSync('./database/ban.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'))
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/level.json'))
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let _sewa = require("./lib/sewa");
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));

// UCAPAN WAKTU ( FenZo||77+)
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const ucap = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qris = 'https://telegra.ph/file/0b4c0cf58301ec7c73a70.jpg'
const faxc = 'https://telegra.ph/file/7188012d573871aaf4fa0.jpg'
// TANGGAL ( FenZo||77+ )
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)

module.exports = mans = async (mans, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await mans.decodeJid(mans.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = args.join(" ")
const from = m.chat
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)

// Group
const groupMetadata = m.isGroup ? await mans.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isUser = pendaftar.includes(m.sender)
 
//const lakal = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
// Other
const isBan = banUser.includes(m.sender)
const isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const AntiLink = m.isGroup ? ntilink.includes(from) : false
const welcm = m.isGroup ? wlcm.includes(from) : true
const GcRvk = m.isGroup ? gcrevoke.includes(from) : false
const isLeveling = m.isGroup ? _leveling.includes(from) : true
const isAutoStick = _autostick.includes(from)
const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
const isSewa = _sewa.checkSewaGroup(from, sewa)
autoreadsw = true
// Quoted
const content = JSON.stringify(m.message)
const q = args.join(' ')
const isImage = (m.type === 'imageMessage')
        const isVideo = (m.type === 'videoMessage')
        const isMedias = (m.mtype === 'imageMessage' || m.mtype === 'videoMessage')
		const isQuotedImage = m.mtype === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = m.mtype === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedLoca = m.mtype === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedContact = m.mtype === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocs = m.mtype === 'extendedTextMessage' && content.includes('documentMessage')
        const isQuotedTeks = m.mtype === 'extendedTextMessage' && content.includes('quotedMessage')
        const isQuotedTag = m.mtype === 'extendedTextMessage' && content.includes('mentionedJid')
        const isQuotedProd = m.mtype === 'extendedTextMessage' && content.includes('productMessage')
        const isQuotedReply = m.mtype === 'extendedTextMessage' && content.includes('Message')

//Sewa
_sewa.expiredCheck(mans, sewa)

// Auto-group sticker
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await mans.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Detec Autosticker`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await mans.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
                if (isAutoStick) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await mans.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Detec Autosticker`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await mans.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
            }
            
		
if (m.message) {
addBalance(m.sender, randomNomor(574), balance)
console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mCMD\x1b[1;37m]', time, color(`${prefix + command} [${args.length}]`, 'cyan'), 'from', color(m.pushName), 'in', color(groupName, 'orange'))
}
        if (isCmd && !isUser){
			pendaftar.push(m.sender)
			fs.writeFileSync('./storage/user/user.json', JSON.stringify(pendaftar))
        } 
        // Leveling Punya Chika 🗿🗿 Di Copas Oleh Fardan
            const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
               }
            }

            const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
                }
            }

            const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
                }
             }

            const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }

            const getUserRank = (userId) => {
    let position = null
    let found = false
    _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userId) {
            position = i
            found = true
        }
    })
    if (found === false && position === null) {
        const obj = { id: userId, xp: 0, level: 1 }
        _level.push(obj)
        fs.writeFileSync('./database/level.json', JSON.stringify(_level))
        return 99
    } else {
        return position + 1
    }
}

const xpGain = new Set()

const isGained = (userId) => {
    return !!xpGain.has(userId)
}

const addCooldown = (userId) => {
    xpGain.add(userId)
    setTimeout(() => {
        return xpGain.delete(userId)
    }, 60000) // Each minute
}

var levelRole = getLevelingLevel(m.sender)
        var role = 'Copper V'
        if (levelRole <= 5) {
            role = 'Copper IV'
        } else if (levelRole <= 10) {
            role = 'Copper III'
        } else if (levelRole <= 15) {
            role = 'Copper II'
        } else if (levelRole <= 20) {
            role = 'Copper I'
        } else if (levelRole <= 25) {
            role = 'Silver V'
        } else if (levelRole <= 30) {
            role = 'Silver IV'
        } else if (levelRole <= 35) {
            role = 'Silver III'
        } else if (levelRole <= 40) {
            role = 'Silver II'
        } else if (levelRole <= 45) {
            role = 'Silver I'
        } else if (levelRole <= 50) {
            role = 'Gold V'
        } else if (levelRole <= 55) {
            role = 'Gold IV'
        } else if (levelRole <= 60) {
            role = 'Gold III'
        } else if (levelRole <= 65) {
            role = 'Gold II'
        } else if (levelRole <= 70) {
            role = 'Gold I'
        } else if (levelRole <= 75) {
            role = 'Platinum V'
        } else if (levelRole <= 80) {
            role = 'Platinum IV'
        } else if (levelRole <= 85) {
            role = 'Platinum III'
        } else if (levelRole <= 90) {
            role = 'Platinum II'
        } else if (levelRole <= 95) {
            role = 'Platinum I'
        } else if (levelRole < 100) {
            role = 'Exterminator'
        }

        var levelRoles = getLevelingLevel(m.sender)
        var roles = 'Cop V'
        if (levelRoles <= 5) {
            roles = 'Cop IV'
        } else if (levelRoles <= 10) {
            roles = 'Cop III'
        } else if (levelRoles <= 15) {
            roles = 'Cop II'
        } else if (levelRoles <= 20) {
            roles = 'Cop I'
        } else if (levelRoles <= 25) {
            roles = 'Sil V'
        } else if (levelRoles <= 30) {
            roles = 'Sil IV'
        } else if (levelRoles <= 35) {
            roles = 'Sil III'
        } else if (levelRoles <= 40) {
            roles = 'Sil II'
        } else if (levelRoles <= 45) {
            roles = 'Sil I'
        } else if (levelRoles <= 50) {
            roles = 'Gol V'
        } else if (levelRoles <= 55) {
            roles = 'Gol IV'
        } else if (levelRoles <= 60) {
            roles = 'Gol III'
        } else if (levelRoles <= 65) {
            roles = 'Gol II'
        } else if (levelRoles <= 70) {
            roles = 'Gol I'
        } else if (levelRoles <= 75) {
            roles = 'Plat V'
        } else if (levelRoles <= 80) {
            roles = 'Plat IV'
        } else if (levelRoles <= 85) {
            roles = 'Plat III'
        } else if (levelRoles <= 90) {
            roles = 'Plat II'
        } else if (levelRoles <= 95) {
            roles = 'Plati I'
        } else if (levelRoles < 100) {
            roles = 'Exter'
        }
        //function levelingnya
                        if (m.isGroup && isLeveling && isUser && mans.public) {
                                const currentLevel = getLevelingLevel(m.sender)
                                const checkId = getLevelingId(m.sender)
                                try {
                                        addCooldown(m.sender)
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 200
                                        const requiredXp = 200 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(m.sender)
                                        addLevelingXp(m.sender, amountXp)
                                        if (requiredXp <= getLevelingXp(m.sender)) {
                                        addLevelingLevel(m.sender, 1)
teks = `*──「 LEVEL UP 」──*\n\n❑ *Name*:  @${m.sender.split("@")[0]}\n❑ *XP*: ${getLevelingXp(m.sender)}\n❑ *Level*: ${getLevel} -> ${getLevelingLevel(m.sender)}\n❑ *Role*: ${role} \n\nCongrats!! 🎉`
mans.sendMessage(m.chat, {text: teks, mentions:[m.sender]}, {quoted:m})
}

                        } catch (err) {
                                console.error(err)
                        }
                }
if (command) {
await mans.sendPresenceUpdate('composing', m.chat)
}
if (autoreadsw) {
		if (from === 'status@broadcast') {
		mans.chatRead(from)
	}
	}
	

const hariRaya = new Date('6 1, 2022 00:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
			
async function hitungmundur(bulan, tanggal) { //By Fax Ngk Usah Di Ubah
          let from = new Date(`${bulan} ${tanggal}, 2022 00:00:00`).getTime();
          let now = Date.now();
          let distance = from - now;
          let days = Math.floor(distance / (1000 * 60 * 60 * 24));
          let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);
          return days + "Hari " + hours + "Jam " + minutes + "Menit " + seconds + "Detik"
        }
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.error(err)
}

const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
 "orderMessage": {
"orderId": orid, // Ganti Idnya
"thumbnail": img, // Ganti Imagenya
"itemCount": itcount, // Ganti Item Countnya
"status": "INQUIRY", // Jangan Diganti
"surface": "CATALOG", // Jangan Diganti
"orderTitle": title, // Ganti Titlenya
"message": text, // Ganti Messagenya
"sellerJid": sellers, // Ganti sellernya
"token": tokens, // Ganti tokenya
"totalAmount1000": ammount, // Ganti Total Amountnya
"totalCurrencyCode": "IDR", // Terserah
}
}), { userJid: jid })
mans.relayMessage(jid, order.message, { messageId: order.key.id})
}

//function rpg
const { 
addInventoriDarah, 
cekDuluJoinAdaApaKagaDiJson, 
addDarah, 
kurangDarah, 
getDarah 
}  = require('./storage/user/darah.js')
const { 
cekInventoryAdaAtauGak, 
addInventori,  
addBesi, 
addEmas, 
addEmerald,
addUmpan,
addPotion,
kurangBesi, 
kurangEmas, 
kurangEmerald, 
kurangUmpan,
kurangPotion,
getBesi, 
getEmas, 
getEmerald,
getUmpan,
getPotion
} = require('./storage/user/alat_tukar.js')
const { 
addInventoriMonay, 
cekDuluJoinAdaApaKagaMonaynyaDiJson, 
addMonay,
kurangMonay, 
getMonay 
} = require('./storage/user/monay.js')
const { 
addInventoriLimit, 
cekDuluJoinAdaApaKagaLimitnyaDiJson, 
addLimit, 
kurangLimit, 
getLimit 
} = require('./storage/user/limit.js')
const { 
cekDuluHasilBuruanNya, 
addInventoriBuruan, 
addIkan,
addAyam, 
addKelinci, 
addDomba, 
addSapi,
addGajah,
kurangIkan,
kurangAyam, 
kurangKelinci, 
kurangDomba, 
kurangSapi,
kurangGajah,
getIkan,
getAyam, 
getKelinci, 
getDomba,
getSapi,
getGajah
} = require('./storage/user/buruan.js')
let DarahAwal =  global.rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const ikan = ['🐟','🐠','🐡']   
   
   //Fax
let picaks = ['flaming','fluming','flarun','flasmurf']
let picak = picaks[Math.floor(Math.random() * picaks.length)]
// Rakyat
if (!isRakyat) {
rkyt.push(m.sender.split("@")[0])
}

//Add Hit Fax
global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/FaxBot/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/FaxBot${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
 
// AFK
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

// Detect Group Invite
if (m.mtype === 'groupInviteMessage') {
teks = `Ketik .owner untuk bergabung ke group whatsapp anda`
sendOrder(m.chat, teks, "5123658817728409", fs.readFileSync('./media/image/mans.jpg'), 2022, "Lol Lexxy+ ~ Multi Device", "6283155687629@s.whatsapp.net", "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==", "99999999999999999999")
}
/*const bodyyy = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
if (!isCmd && !m.isGroup && !m.key.fromMe) {
const simi = await fetchJson(`https://caliph.my.id/api/simi.php?text=${budy}`)
const sami = simi.result
await mans.sendMessage(from, {text:sami}, {quoted:m})
}*/

// AntiLink
if (AntiLink) {
linkgce = await mans.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
m.reply(`\`\`\`「 Detect Link 」\`\`\`\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
} else if (isUrl(m.text)) {
bvl = `\`\`\`「 Detect Link 」\`\`\`\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await mans.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
mans.sendMessage(from, {text:`\`\`\`「 Detect Link 」\`\`\`\n\n@${kice.split("@")[0]} Telah dikick karena send link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}

// Public & Self
if (!mans.public) {
if (!m.key.fromMe) return
}

// write database every 1 minute
setInterval(() => {
fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)

// reset limit every 12 hours
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.users)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
for (let jid of user) global.db.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})


if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await mans.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© ||77+ - X - Lol Lexxy+", m)
delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await mans.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© Lol Lexxy+ - X - Lol Lexxy+", m)
delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await mans.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© Lol Lexxy+ - X - Lol Lexxy+", m)
delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await mans.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, "© Lol Lexxy+ - X - Lol Lexxy+", m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await mans.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© Lol Lexxy+ - X - Lol Lexxy+", m)
delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await mans.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© Lol Lexxy+ - X - Lol Lexxy+", m)
delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await mans.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© Lol Lexxy+ - X - Lol Lexxy+", m)
delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (('family100'+m.chat in _family100) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
let room = _family100['family100'+m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
mans.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+m.chat]
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
mans.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
mans.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) mans.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) mans.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) mans.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
mans.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) mans.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) mans.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
mans.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}

//Cerpen
async function cerpen (category) {
    return new Promise((resolve, reject) => {
        let title = category.toLowerCase().replace(/[()*]/g, "")
        let judul = title.replace(/\s/g, "-")
        let page = Math.floor(Math.random() * 5)
        axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let link = []
            $('article.post').each(function (a, b) {
                link.push($(b).find('a').attr('href'))
            })
            let random = link[Math.floor(Math.random() * link.length)]
            axios.get(random)
            .then((res) => {
                let $$ = cheerio.load(res.data)
                let hasil = {
                    title: $$('#content > article > h1').text(),
                    author: $$('#content > article').text().split('Cerpen Karangan: ')[1].split('Kategori: ')[0],
                    kategori: $$('#content > article').text().split('Kategori: ')[1].split('\n')[0],
                    lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1].split('\n')[0],
                    cerita: $$('#content > article > p').text()
                }
                resolve(hasil)
            })
        })
    })
}
// Math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `     「 Tictactoe Game 」
Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await mans.sendText(room.x, str, m, { mentions: parseMention(str) } )
await mans.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: mans.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, mans.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
mans.ev.emit('messages.upsert', msg)
}

// Fake Reply
//FAKEREPLY PRODUCT
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": log0 //Gambarnye
},
"title": "Lol Lexxy+", //Kasih namalu 
"description": "SELF BOT", 
"currencyCode": "USD",
"priceAmount1000": "2000",
"retailerId": "MyMans",
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}
//FAKEREPLY TROLI
const ftroli = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 1,
status: 1,
surface : 1,
message: 'MyMans', //Kasih namalu
orderTitle: 'Bang',
thumbnail: log0, //Gambarnye
sellerJid: '0@s.whatsapp.net'

}
}
}
//FAKEREPLY LOCATION
const flokasi = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
locationMessage: {
name: 'Russia',
jpegThumbnail: log0
}
}
}
//FAKEREPLY DOCUMENT
const fdocs = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: 'Halo bang', 
jpegThumbnail: log0
}
}
}
//FAKEREPLY VIDEO
const fvideo = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title":"hallo bang",
"h": `Hmm`,
'seconds': '30', 
'caption': 'Halo bang',
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GROUPINVITE
const fgclink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "mememteeeekkeke",
"groupName": "P", 
"caption": "Halo bang jagoo", 
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GIF
const fgif = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
 "videoMessage": { 
 "title":"Lol Lexxy+",
 "h": `Hmm`,
 'seconds': "30", 
 'gifPlayback': 'true', 
 'caption': 'Lol Lexxy+',
 'jpegThumbnail': log0
}
}
} 
//FAKEREPLY TEXT WITH THUMBNAIL
const fakey = (teks) => {
            mans.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `Join Jadi Hengker 😎`,"body": `Join Bot's Official GC`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/fenzo.jpg`),"sourceUrl": "https://chat.whatsapp.com/E3zewfxrc5pKE6Rzb3BuqG"}}}, { quoted: m})
        }
const ftextt = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"extendedTextMessage": {
 "text":"hallo bang",
"title": `Hmm`,
 'jpegThumbnail': log0
}
} 
}
//FAKEREPLY VN
const fvn = {
key: { 
fromMe: false,
participant: `62882000383955@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "30",
"ptt": "true"
}
} 
}
l = 1
monospace = '```'
const levelMenu = getLevelingLevel(m.sender)
const xpMenu = getLevelingXp(m.sender)
const uangku = getBalance(m.sender, balance)
const reqXp  = 200 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
const jumlahUser = pendaftar.length
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
  
const listmn = `Selamat ${salam} ${pushname} 👋
Saya *${namebot}*, Assisten *Lexxy Official* Bot Ini Adalah Beta Multi-Device WhatsApp.
Jika Ada Fitur Error Atau Bug Segera Lapor Ke Owner Bot
─────────────
❏ *Info User*
> Username : *${pushname}!*
> Limit User : *${global.db.users[m.sender].limit}*
> Role User : *${role}*
────────────
❏ *Info Creator*
> Name : *Lexxy Official*
> Nomor : *082279915237*
> Umur : *18+*
> Region : *Indonesia 🇲🇨*
> Hobyy : *Coding*
> Made in : *Palembang*
> Nama Asli : *Pebri Pratama*
────────────
❏ *Info Server*
> Tanggal Server : *${jangwak}*
> Database : *MongoDB*
> Waktu Server : *${time}*
> User Server : *${jumlahUser}*
────────────
❏ *Jam Indonesia*
> WIB : *${moment().utcOffset('+0700').format('HH:mm')}*
> WITA : *${moment().utcOffset('+0800').format('HH:mm')}*
> WIT : *${moment().utcOffset('+0900').format('HH:mm')}*
────────────
❏ *Info Pengguna*
> Uptime : *${runtime(process.uptime())}*
> Total Hit Server : *${jumlahcmd}*
> Library : *Baileys-Md*
> Total Hit Today : *${jumlahharian}*
└────────────
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${require('./help/help.js').help(prefix, l, pushname)}`
const qtod = m.quoted? "true":"false"

// Case Nye Sini Ngab
switch(command) {
case 'donasi': case 'donate':{
mans.sendMessage(from, {image:{url:qris}, caption:`${require('./help/help.js').donate(prefix, l, pushname)}`}, {quoted:m})
}
break
case 'hanzo': case 'prp': case 'inventori': case 'profile':{
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     
     var flob = await getBuffer(picak+'Profile User')
     let teksehmazeh = `*── 「 PROFIL BIODATA 」 ──*\n\n`
     teksehmazeh += `*Name* : ${pushname}\n`
     teksehmazeh += `*Nomer* : _wa.me/${m.sender.split("@")[0]}_\n`
     teksehmazeh += `*Limit* : ${global.db.users[m.sender].limit}\n`
     teksehmazeh += `*Role* : ${role}\n`
     teksehmazeh += `*Level* : ${getLevelingLevel(m.sender)}`
     let butRun = [
        	{ urlButton: { displayText: `Group WhatsApp`, url : `https://chat.whatsapp.com/E3zewfxrc5pKE6Rzb3BuqG` } },
        	{ urlButton: { displayText: `Instagram`, url : `https://Instagram.com/Lexxy24` } },
            { urlButton: { displayText: `☎️Contact Me`, url: `+62 857-8900-4732` } },
            { quickReplyButton: { displayText: `🏧 leaderboard`, id: 'leaderboard'} }
        	]
        	mans.sendMessage(m.chat, { caption: teksehmazeh, document: { url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx' }, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: '© LexxyBotMD', templateButtons: butRun, footer: `ingin Berpetualang Lagi`, mentions: [m.sender] })
        	}
        	break
 
case 'list': case 'menu': case 'help': case '?': {
                let kontol = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/Lexxy24/KaguraMD'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 822-7991-5237'
                                }
                            },{
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Info Profile',
                                    id: 'hanzo'
                                }
                            }]
mans.send5ButImg(m.chat, listmn, `© 𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 𝘓𝘦𝘹𝘹𝘺 𝘖𝘧𝘧𝘪𝘤𝘪𝘢𝘭`, global.thumb, kontol)
}
        	break
case 'grupbot':
case 'groupbot':
case 'botgrup':
fakey(`https://chat.whatsapp.com/E3zewfxrc5pKE6Rzb3BuqG`)
break
case 'limit':
fakey(`*Sisa Limit Anda : ${global.db.users[m.sender].limit}*`)
break
case 'getscmd': {
if (isBan) return m.reply(mess.ban)
mans.sendMessage(from, {sticker:{url:"https://ZackMans.github.io/media/menu.webp"}}, {quoted:m})
mans.sendMessage(from, {sticker:{url:"https://ZackMans.github.io/media/groupopen.webp"}}, {quoted:m})
mans.sendMessage(from, {sticker:{url:"https://ZackMans.github.io/media/groupclose.webp"}}, {quoted:m})
}
break
//TEXT PRO CUY
case 'hoorror':{
	if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
     let link = `https://textpro.me/horror-blood-text-effect-online-883.html`
     let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
  case 'whitebear':{
   if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
     let link = `https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html`
     let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'thunder':{
	if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
     let link = `https://textpro.me/create-thunder-text-effect-online-881.html`
     let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'blackpink':{
	if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
     let link = `https://textpro.me/create-blackpink-logo-style-online-1001.html`
     let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'neon':{
	 if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `https://textpro.me/neon-light-text-effect-online-882.html`
     let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'matrix':{
	 if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `https://textpro.me/matrix-style-text-effect-online-884.html`
     let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'sky':{
	 if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html`
     let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'joker':{
	 if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `https://textpro.me/create-logo-joker-online-934.html`
     let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'magma':{
	 if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `https://textpro.me/create-a-magma-hot-text-effect-online-1030.html`
     let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'sand':{
	 if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `https://textpro.me/sand-writing-text-effect-online-990.html`
     let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'pencil':{
	 if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
     let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'graffiti':{
	 if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
     let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'metallic':{
	 if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `https://textpro.me/create-a-metallic-text-effect-free-online-1041.html`
     let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'steel':{
	 if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `https://textpro.me/steel-text-effect-online-921.html`
     let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'harrypotter':{
	 if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `https://textpro.me/create-harry-potter-text-effect-online-1025.html`
     let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'underwater':{
	 if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `https://textpro.me/3d-underwater-text-effect-generator-online-1013.html`
     let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'luxury':{
	 if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `https://textpro.me/3d-luxury-gold-text-effect-online-1003.html`
     let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'glue':{
	 if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html`
     let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'fabric':{
	 if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `https://textpro.me/fabric-text-effect-online-964.html`
     let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'neonlight':{
	 if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `https://textpro.me/neon-light-glitch-text-generator-online-1063.html`
     let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'lava':{
	 if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `https://textpro.me/lava-text-effect-online-914.html`
     let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'toxic':{
	 if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `https://textpro.me/toxic-text-effect-online-901.html`
     let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'ancient':{
	 if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html`
     let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'christmas':{
	 if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `https://textpro.me/sparkles-merry-christmas-text-effect-1054.html`
     let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'sci_fi':{
	 if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html`
     let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'rainbow':{
     let link = `https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html`
     let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
//BARU
case 'classic':{
let link = `https://textpro.me/video-game-classic-8-bit-text-effect-1037.html`
let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'watercolor':{
let link = `https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html`
let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'halloween':{
let link = `https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html`
let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'halloweenfire':{
let link = `https://textpro.me/halloween-fire-text-effect-940.html`
let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'writing':{
let link = `https://textpro.me/sand-writing-text-effect-online-990.html`
let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'foggy':{
let link = `https://textpro.me/write-text-on-foggy-window-online-free-1015.html`
let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'marvel':{
let link = `https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html`
let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
   case 'emojimix': {
	        if (!text) throw `Example : ${prefix + command} 😆+🤣`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await mans.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
case 'skeleton':{
let link = `https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html`
let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'sketch':{
let link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'wonderful':{
let link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'cool':{
let link = `https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html`
let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'collwall':{
let link = `https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html`
let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'multicolor':{
let link = `https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html`
let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'batman':{
   if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai\nSisa limit kamu : ${getLimit(m.sender)}`)
let link = `https://textpro.me/make-a-batman-logo-online-free-1066.html`
let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'juice':{
   if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai\nSisa limit kamu : ${getLimit(m.sender)}`)
let link = `https://textpro.me/fruit-juice-text-effect-861.html`
let anui = await textpro(link, q)
     fakey(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
//WM By Rizki
case 'pornhub':{
if(!q) return m.reply(`Example: ${prefix + command} ajg | ea`)
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
fakey(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anu)
mans.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted:m})
}
break
case 'retro':{
if(!q) return m.reply(`Example: ${prefix + command} ajg | ea`)
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
fakey(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
console.log(anu)
mans.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted:m})
}
break
case 'horror':{
if(!q) return m.reply(`Example: ${prefix + command} ajg | ea`)
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
fakey(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-a-cinematic-horror-text-effect-1045.html", [`${logo4}`,`${logo9}`])
console.log(anu)
mans.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted:m})
}
break
case '8bit':{
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
if(!q) return m.reply(`Example: ${prefix + command} ajg | ea`)
fakey(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
console.log(anu)
mans.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted:m})
}
break
case 'textmaker': {
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
if (isBan) return m.reply(mess.ban)
if (args.length < 1) return m.reply(`Example :\n${prefix + command} <name>`)
if (args[0] === 'glitch') {
if (args.length < 2) return m.reply(`Example :\n${prefix + command + ' ' + args[0]} ZackMans`)
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
mans.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else if (args[0] === 'glow') {
if (args.length < 2) return m.reply(`Example :\n${prefix + command + ' ' + args[0]} ZackMans`)
let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
mans.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else {
m.reply(`*List Text Maker :*\n•> glitch\n•> glow`)
}
}
break
case 'limituser':
{      
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    m.reply(txt)       
  }
 break
 case 'leaderboard':
{      
   let txt = `「 *LEADERBOARD* 」\n\n`
     for (let i of _buruan){
     txt += `➸ *ID :* ${i.id}\n`
     txt += `*🐟Ikan* : ${i.ikan}\n`
     txt += `*🐔Ayam* : ${i.ayam}\n`
     txt += `*🐇Kelinci* : ${i.kelinci}\n`
     txt += `*🐑Domba* : ${i.domba}\n`
     txt += `*🐄Sapi* : ${i.sapi}\n`
     txt += `*🐘Gajah* : ${i.gajah}\n\n`
     }
    m.reply(txt)       
  }
 break
case 'mancing':{
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  if (isUmpan < 1) return reply('Umpan kamu habis!, cobalah berburu dan ubah dagingnya menjadi umpan')
  m.reply("1 umpan terpakai")
  var ikannya = ikan[Math.floor(Math.random() * ikan.length)]
  var ditangkap = Math.ceil(Math.random() * 20)
  setTimeout( () => {
  let caption = `Hasil tangkapan : ${ikannya}\n> Jumlah tangkapan : ${ditangkap}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Mancing lagi🎣'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/mancing.jpg' },
      caption: caption,
      footer: "Fax Ganteng",
      buttons: buttons,
      headerType: 4
     }
     mans.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  m.reply(`@${m.sender.split("@")[0]} Mulai memancing🎣`)     
  }, 1500)
  kurangUmpan(m.sender, 1)
  addIkan(m.sender, ditangkap)	     
  }   
  break  
  case 'darah':{
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  let dapat =  getDarah(m.sender)
  m.reply(`${dapat}`)
  }
  break
  case 'bacok':{
  if (isCekDarah < 1) return reply('Darah kamu habis')
   kurangDarah(m.sender, 7)
  m.reply('Telah Si Bacok️')
  }
  break
case 'mining': case 'menambang':{
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return m.reply('Kamu kelelahan!, cobalah heal menggunakan potion') 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `[ HASIL MENAMBANG ]\n*Besi* : ${besinya}\n*Emas* : ${emasnya}\n*Emerald* : ${emeraldnya}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Menambang lagi⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/tambang.jpg' },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     mans.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  m.reply(`*${pushname}* Mulai menambang🎣`)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break 
  case 'beli': case 'buy':{
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return m.reply('Mau beli apa?')
 var anu = args[1]
  if (args[0] === 'potion'){
  let noh = 100000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} potion 2\n 1 potion = 100000 monay`)
 if (isMonay < noh) return m.reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Potion kamu* : ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'umpan'){
  let noh = 5000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} umpan 2\n 1 umpan = 2500 monay`)
 if (isMonay < noh) return m.reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Umpan kamu* : ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} limit 2\n 1 limit = 35000 monay`)
 if (isMonay < noh) return m.reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Limit kamu* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { m.reply("Format salah!") }
 }
 break
 case 'sel': case 'jual':{
 if (!q) return  m.reply(`Mau jual apa?\nExample : ${prefix + command} ikan 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'ikan'){
 if (isIkan < anu) return m.reply('Ikan kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} ikan 2\n 1 ikan = 1500 monay`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Ikan kamu* : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'ayam'){
 if (isAyam < anu) return m.reply('Ayam kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} ayam 2\n 1 ayam = 2500 monay`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Ayam kamu* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'kelinci'){
 if (isKelinci < anu) return m.reply('Kelinci kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} kelinci 2\n 1 kelinci = 3000 monay`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Kelinci kamu* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'domba'){
 if (isDomba < anu) return m.reply('Domba kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} domba 2\n 1 domba = 5000 monay`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Domba kamu* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sapi'){
 if (isSapi < anu) return m.reply('Sapi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} sapi 2\n 1 sapi = 10000 monay`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Sapi kamu* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'gajah'){
 if (isGajah < anu) return m.reply('Gajah kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} gajah 2\n 1 gajah = 15000 monay`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Gajah kamu* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'besi'){
 if (isBesi < anu) return m.reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} besi 2\n 1 besi = 15000 monay`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Besi kamu* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emas'){
 if (isEmas < anu) return m.reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} emas 2\n 1 emas = 50000 monay`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa emas kamu* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return m.reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} emerald 2\n 1 emerald = 100000 monay`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa emerald kamu* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { m.reply("Format salah!") }

 }
 break

 case 'heal':{
 if (!isCekDarah < 1) return m.reply('Kamu hanya bisa heal ketika darah kamu 0')
 if (isCekDarah > 100) return m.reply('Darah kamu sudah penuh')
 if (isPotion < 1) return m.reply('Kamu tidak punya potion, cobalah beli dengan cara #buypotion _jumlah_') 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 m.reply('Berhasil, darah kamu sudah full')
 }
 break
 case 'berburu':{ 
 //Peringatan!!!!, ini buatan rifza. jangan claim punya lu:)
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return m.reply('Darah kamu habis, cobalah heal menggunakan potion') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  let luka = ["Tertusuk duri saat berburu","Terpeleset ke jurang saat berburu","Tercakar hewan buas","Tidak berhati-hati","Terjerat akar","Terjatuh saat berburu"]
  let location = ["Hutan rimba","Hutan Amazon","Hutan tropis","Padang rumput","Hutan afrika","Pegunungan"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Hutan rimba') {
    var image = './storage/image/rimba.jpg'
   } else
 if (lokasinya === 'Hutan Amazon') {
    var image =  './storage/image/amazon.jpg'
   } else
 if (lokasinya === 'Hutan tropis') {
    var image = './storage/image/tropis.jpg'
   } else
 if (lokasinya === 'Padang rumput') {
    var image = './storage/image/padang_rumput.jpg'
   } else
 if (lokasinya === 'Hutan afrika') {
    var image = './storage/image/afrika.jpg'
   } else
 if (lokasinya === 'Pegunungan') {
   var image = './storage/image/pegunungan.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `_[ HASIL BURUAN ]_\n`
     teksehmazeh += `*🐟Ikan* : ${ikanmu}\n`
     teksehmazeh += `*🐔Ayam* : ${ayam}\n`
     teksehmazeh += `*🐇Kelinci* : ${kelinci}\n`
     teksehmazeh += `*🐑Domba* : ${domba}\n`
     teksehmazeh += `*🐄Sapi* : ${sapi}\n`
     teksehmazeh += `*🐘Gajah* : ${gajah}\n\n`
     teksehmazeh += `_[ INFO ]_\n`
     teksehmazeh += `*Lokasi* : ${lokasinya}\n`
     teksehmazeh += `*Terluka* : ${lukanya}, darah - 10\n`
     teksehmazeh += `*Sisa darah* : ${getDarah(m.sender)}\n`
    let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Berburu lagi️🏹'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: image },
      caption: teksehmazeh,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     mans.sendMessage(from, buttonMessage, { quoted: m })      
  }, 5000)  
 setTimeout( () => {
  m.reply(`@${m.sender.split("@")[0]} Mulai berburu di ${lokasinya}`)     
  }, 1000) 
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
case 'ringtone': {
		if (!args.join(" ")) return m.reply(`Contoh:\n${prefix + command} black over`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		mans.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
case 'wallpaper': {
                if (!args.join(" ")) return m.reply("Mau cari gambar apa kak?")
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(args)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `.wallpaper ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: `© Created Lol Lexxy`,
                    buttons: buttons,
                    headerType: 4
                }
                mans.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!args.join(" ")) return m.reply("Mau cari gambar apa kak?")
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(args)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: `© Created Lol Lexxy`,
                    buttons: buttons,
                    headerType: 4
                }
                mans.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'quotesimage':case 'qoutesimage':
				   let cok = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesimage?apikey=${lolkey}`)
				   fakey(mess.wait)
				  mans.sendMessage(m.chat, { image: { url: cok }, caption: 'Done By LexxySlemek' }, { quoted: m })
				  break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                mans.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
//by Thunder team
case 'anime': { 
fakey(mess.wait)
await fetchJson(`https://api.jikan.moe/v4/anime?q=${q}`)
.then((res) =>{
console.log(res)   
let sections = []   
  for (let i of res.data) {
  const list = {title: `${i.title}`,
  rows: [
	    {
	     title: `${i.title}\n\n`, 
	     rowId: `${prefix}animesearch ${i.mal_id}`,
	     description: `${i.synopsis}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  mans.sendMessage(
      from, 
      {
       text: "Anime Search",
       footer: "Lol Lexxy",
       title: "Data Base Ada Di Button Ini",
       buttonText: "Click and see search results➡️",
       sections
      }, { quoted : m }
    )  
})
}
  break
case 'grupsetting':
            case 'groupsetting':{
                    let sections = []
                    let com = [`group enable`,`leveling on`,`autosticker enable`,`welcome on`,`antilink on`]
                    let comm = [`group disable`,`leveling off`,`autosticker disable`,`welcome off`,`antilink off`]
                    let listnya = [`Group open/close`,`Leveling on/off`,`Auto-Sticker on/off`,`Welcome on/off`,`antilink on/off`]
                    let suruh = [`Enable`, `Disable`]
                    let fiturname = [`Group`,`Leveling`,`AutoSticker`,`Welcome`,`Antilink`]
                    let startnum = 0; let startnu = 0; let startn = 0;let start = 0
                    let startnumm = 1
                    for (let x of com) {
                        const yy = {title: `${listnya[startnum++]}`,
                    rows: [
                       {
                        title: `${suruh[0]}`,
                        description: `Mengaktifkan ${fiturname[startnu++]}`,
                        rowId: `${prefix}${x}`
                      },{
                        title: `${suruh[1]}`,
                        description: `Menonaktifkan ${fiturname[startn++]}`,
                        rowId: `${prefix}${comm[start++]}`
                      }
                    ]
                   }
                        sections.push(yy)
                    }
                    const sendm =  mans.sendMessage(
      from, 
      {
       text: "Group Settings",
       footer: "Only Admin Yak",
       title: "Atur Settingan Grup anda disini......",
       buttonText: "Click Button",
       sections
      }, { quoted : m }
    )  
}
  break

case 'animesearch':{
await fetchJson(`https://api.jikan.moe/v4/anime/${q}`)
.then((res) => {
let txt = `     Anime Search      \n\n*Judul:* *${res.data.title}*\n*English:* *${res.data.title_english}*\n*Japanese:* *${res.data.title_japanese}*\n*Type Anime:* *${res.data.type}*\n*Adaptasi:* *${res.data.source}*\n*Total Episode:* *${res.data.episodes}*\n*Status:* *${res.data.status}*\n*Ongoing:* *${res.data.airing ? 'Ya' : 'Tidak'}*\n*Aired:* *${res.data.aired.string}*\n*Durasi:* *${res.data.duration}*\n*Rating:* *${res.data.rating}*\n*Score:* *${res.data.score}*\n*Rank:* *${res.data.rank}*\n*Produser Utama:* *${res.data.producers.name}*\n*Studio:* *${res.data.studios[0].name}* `
mans.sendMessage(from, { image : { url : res.data.images.jpg.image_url}, caption : txt}, {quoted :m }) 
})
}
break
case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: `Created By © LexxySlemek`,
                    buttons: buttons,
                    headerType: 4
                }
                mans.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'emoji': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply('emojinya?')
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await mans.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption:"Done!"}, {quoted:m})
await mans.sendMessage(from, {text:"s"}, {quoted:mese})
})
}
break
case 'suitpvp': case 'suit': {
if (isBan) return m.reply(mess.ban)
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await mans.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) mans.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break

//============ RUMUS BIAR LU PINTER DEK - FAX
case 'luas-segitiga':
fakey(mess.wait)
if (!q) return m.reply(`untuk mencari hasil dari luas segitiga\nGunakan ${prefix}luassegitiga alas tinggi\ncontoh: ${prefix}luas-segitiga 12 7`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
try {
const luasseg = bdr.datar.luas.segitiga(args[0], args[1], false)
const caraluas = bdr.datar.luas.segitiga(args[0], args[1], true)
m.reply(`*Hasil:* ${luasseg}\n${caraluas}`)
} catch (err) {
m.reply('Format pesannya salah tuh')
}
break
case 'kel-segitiga':
fakey(mess.wait)
if (!q) return m.reply(`Untuk mencari Hasil dari keliling segitiga\nGunakan ${prefix}kelsegitiga sisi1 sisi2 sisi3\nContoh: ${prefix}kelsegitiga 32 10 8`)
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
try {
const kelsegitiga = bdr.datar.keliling.segitiga(args[0], args[1], args[2], false)
const carakel = bdr.datar.keliling.segitiga(args[0], args[1], args[2], true)
m.reply(`*Hasil:* ${kelsegitiga}\n*Rumus:* ${carakel}`)
} catch (err) {
m.reply('Format pesannya salah tuh')
}
break
case 'luas-persegi':

if (!q) return m.reply(`Untuk mencari Hasil dari luas persegi\nGunakan ${prefix}luaspersegi angka\nContoh: ${prefix}luaspersegi 32`)
try {
const luaspersegi = bdr.datar.luas.persegi(q, false)
const luaspersegis = bdr.datar.luas.persegi(q, true)
m.reply(`*Hasil:* ${luaspersegi}\n*Rumus:* ${luaspersegis}`) 
} catch (err) {
m.reply('Format pesannya salah tuh') 
}
break
case 'pythagoras':

if (!q) return m.reply(`Untuk mencari hasil pythagoras\nGunakan ${prefix}pythagoras opsi angka1 angka2\nContoh: ${prefix}pythagoras miring 8 6`) 
try {
const pytha = bdr.rdb.pythagoras(args[0], args[1], args[2], false)
const rumuspytha = bdr.rdb.pythagoras(args[0], args[1], args[2], true)
m.reply(`*Hasil:* ${pytha}\n*Rumus:* ${rumuspytha}`) 
} catch (err) {
m.reply('Format pesannya salah tuh') 
}
break
case 'perkalian':

if (!q) return m.reply(`Untuk mencari hasil perkalian\nGunakan ${prefix}perkalian angkaperkalian jumlahperkalian\nContoh: ${prefix}perkalian 5 15`) 
try {
const perkal = bdr.rdb.perkalian(args[0], args[1])
reply(`*Hasil:* ${perkal}\n*Rumus:* ${rumusperkal}`) 
} catch (err) {
m.reply('Format pesannya salah tuh') 
}
break
case 'kel-persegi':

if (!q) return m.reply(`Untuk mencari Hasil dari keliling persegi\nGunakan ${prefix}kelpersegi angka\nContoh: ${prefix}kelpersegi 78`)
try {
const persegi = bdr.datar.keliling.persegi(q, false)
const caraPersegi = bdr.datar.keliling.persegi(q, true)
reply(`*Hasil:* ${persegi}\n*Rumus:* ${caraPersegi}`) 
} catch (err) {
m.reply('Format pesannya salah tuh') 
}
break
case 'kuadrat':
if (!q) return m.reply(`Untuk mencari sebuah Hasil Kuadrat\nGunakan ${prefix}kuadrat angka\nContoh: ${prefix}kuadrat 6`) 
try {
const kuadrat = bdr.rdb.kuadrat(q)
reply(`*Hasil:* ${kuadrat}`) 
} catch (err) {
m.reply('Format pesannya salah tuh') 
}
break
case 'kubik':
if (!q) return m.reply(`Untuk mencari sebuah Hasil Kubik\nGunakan ${prefix}kubik angka\nContoh: ${prefix}kubik 9`) 
try {
const kubik = bdr.rdb.kubik(q)
reply(`*Hasil:* ${kubik}`) 
} catch (err) {
m.reply('Format pesannya salah tuh') 
}
break
case 'family100': {
if (isBan) return m.reply(mess.ban)
if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
if ('family100'+m.chat in _family100) {
m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await mans.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
break
case 'tebak': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`)
if (args[0] === "lagu") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await mans.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
mans.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
mans.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, "© Lol Lexxy+ - X - Lol Lexxy+", m)
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'gambar') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
mans.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
mans.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`,"© Lol Lexxy+ - X - Lol Lexxy+", m)
delete tebakgambar[m.sender.split('@')[0]]
}
} else if (args[0] === 'kata') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
mans.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
mans.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, "© Lol Lexxy+ - X - Lol Lexxy+", m)
delete tebakkata[m.sender.split('@')[0]]
}
} else if (args[0] === 'kalimat') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
mans.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
mans.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, "© Lol Lexxy+ - X - Lol Lexxy+", m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} else if (args[0] === 'lirik') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
mans.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
mans.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, "© Lol Lexxy+ - X - Lol Lexxy+", m)
delete tebaklirik[m.sender.split('@')[0]]
}
} else if (args[0] === 'lontong') {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
mans.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
mans.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, "© Lol Lexxy+ - X - Lol Lexxy+", m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
}
}
}
break
case 'ttc': case 'ttt': case 'tictactoe': {
if (isBan) return m.reply(mess.ban)
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply('Kamu masih didalam game')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (args.join(" ") ? room.name === args.join(" ") : true))
if (room) {
m.reply('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await mans.sendText(room.x, str, m, { mentions: parseMention(str) } )
await mans.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (args.join(" ")) room.name = args.join(" ")
m.reply('Menunggu partner' + (args.join(" ") ? ` mengetik command dibawah ini ${prefix}${command} ${args.join(" ")}` : ''))
this.game[room.id] = room
}
}
break
case 'delttc': case 'delttt': {
if (isBan) return m.reply(mess.ban)
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
mans.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
} else if (!this.game) {
m.reply(`Session TicTacToe🎮 tidak ada`)
} else throw '?'
} catch (e) {
m.reply('rusak')
}
}
break
case 'kuismath': case 'math': {
if (isBan) return m.reply(mess.ban)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let { genMath, modes } = require('./src/math')
if (!args.join(" ")) return m.reply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
let result = await genMath(text.toLowerCase())
mans.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
delete kuismath[m.sender.split('@')[0]]
}
}
break
case 'delete': case 'del': {
if (isBan) return m.reply(mess.ban)
if (!m.quoted) return
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) return m.reply('Pesan tersebut bukan dikirim oleh bot!')
mans.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'bc': case 'broadcast': case 'bcall': {
if (!isCreator) return ads(mess.owner)
if (!args.join(" ")) return m.reply(`Text mana?\n\nExample : ${prefix + command} LoL`)
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'SCRIPT',
                                    url: 'https://github.com/Lexxy24/KaguraMD'
                                }
                            }, {
                                callButton: {
                                    displayText: 'OWNER',
                                    phoneNumber: ' +62 822-7991-5237'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'STATUS',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'CREATOR',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'PROFILE',
                                    id: 'hanzo'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      mans.send5ButImg(yoi, txt, mans.user.name, global.thumb, btn)
		}
		m.reply('Sukses Broadcast')
            }
            break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh': {
if (isBan) return m.reply(mess.ban)
if (!m.quoted && !args.join(" ")) return m.reply(`Kirim/reply text dengan caption ${prefix + command}`)
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : args.join(" ") ? args.join(" ") : m.text : args.join(" ") ? args.join(" ") : m.text
m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
}
break
case 'vote': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (m.chat in vote) return m.reply(`_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`)
if (!args.join(" ")) return m.reply(`Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`)
m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
vote[m.chat] = [args.join(" "), [], []]
await sleep(1000)
upvote = vote[m.chat][1]
devote = vote[m.chat][2]
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageVote = {
image: log0,
jpegThumbnail: thum,
caption: teks_vote,
footer: "© Lol Lexxy+ - X - Lol Lexxy+",
buttons: buttonsVote,
headerType: 1
}
mans.sendMessage(m.chat, buttonMessageVote)
}
break
case 'upvote': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) return m.reply('Kamu Sudah Vote')
vote[m.chat][1].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsUpvote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageUpvote = {
image: log0,
jpegThumbnail: thum,
caption: teks_vote,
footer: "© Lol Lexxy+ - X - Lol Lexxy+",
buttons: buttonsUpvote,
headerType: 1,
mentions: menvote
}
mans.sendMessage(m.chat, buttonMessageUpvote)
}
break
case 'devote': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) return m.reply('Kamu Sudah Vote')
vote[m.chat][2].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsDevote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageDevote = {
image: log0,
jpegThumbnail: thum,
caption: teks_vote,
footer: "© Lol Lexxy+ - X - Lol Lexxy+",
buttons: buttonsDevote,
headerType: 1,
mentions: menvote
}
mans.sendMessage(m.chat, buttonMessageDevote)
}
break
case 'cekvote': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${mans.user.id}
`
mans.sendTextWithMentions(m.chat, teks_vote, m)
}
break
case 'deletevote': case'delvote': case 'hapusvote': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
delete vote[m.chat]
m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
}
break
case 'listpc': {
if (isBan) return m.reply(mess.ban)
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
let teks = `     「 List Personal Chat 」\n\nThere are ${anu.length} users using bot in personal chat`
for (let i of anu) {
 teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`
}
mans.sendTextWithMentions(m.chat, teks, m)
}
break
case 'listgc': {
if (isBan) return m.reply(mess.ban)
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `     「 List Group Chat 」\n\nThere are ${anu.length} users using bot in group chat`
for (let i of anu) {
 let metadata = await mans.groupMetadata(i)
 if (metadata.owner === "undefined") {
 loldd = false
 } else {
 loldd = metadata.owner
 }
 teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nDibuat : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
}
mans.sendTextWithMentions(m.chat, teks, m)
}
break
case 'afk': {
if (isBan) return m.reply(mess.ban)
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = args.join(" ")
m.reply(`${m.pushName} sekarang afk\nAlasan : ${args.join(" ") ? args.join(" ") : ''}`)
}
break	
case 'setcmd': {
if (isBan) return m.reply(mess.ban)
if (!m.quoted) return m.reply('Reply Pesan!')
if (!m.quoted.fileSha256) return m.reply('SHA256 Hash Missing')
if (!args.join(" ")) return m.reply(`Untuk Command Apa?`)
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.sticker[hash] && global.db.sticker[hash].locked) return m.reply('You have no permission to change this sticker command')
global.db.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
m.reply(`Done!`)
}
break
case 'delcmd': {
if (isBan) return m.reply(mess.ban)
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) return m.reply(`Tidak ada hash`)
if (global.db.sticker[hash] && global.db.sticker[hash].locked) return m.reply('You have no permission to delete this sticker command')
delete global.db.sticker[hash]
m.reply(`Done!`)
}
break
case 'listcmd': {
if (isBan) return m.reply(mess.ban)
let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
mans.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
case 'lockcmd': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!m.quoted) return m.reply('Reply Pesan!')
if (!m.quoted.fileSha256) return m.reply('SHA256 Hash Missing')
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.sticker)) return m.reply('Hash not found in database')
global.db.sticker[hash].locked = !/^un/i.test(command)
m.reply('Done!')
}
break
case 'addmsg': {
if (isBan) return m.reply(mess.ban)
if (!m.quoted) return m.reply('Reply Message Yang Ingin Disave Di Database')
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} nama file`)
let msgs = global.db.database
if (text.toLowerCase() in msgs) return m.reply(`'${args.join(" ")}' telah terdaftar di list pesan`)
msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${args.join(" ")}'
    
Akses dengan ${prefix}getmsg ${args.join(" ")}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
break
case 'getmsg': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`)
let msgs = global.db.database
if (!(text.toLowerCase() in msgs)) return m.reply(`'${args.join(" ")}' tidak terdaftar di list pesan`)
mans.copyNForward(m.chat, msgs[text.toLowerCase()], true)
}
break

case 'listmsg': {
if (isBan) return m.reply(mess.ban)
let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '「 LIST DATABASE 」\n\n'
for (let i of seplit) {
teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
}
m.reply(teks)
}
break
case 'fliptext': {
if (isBan) return m.reply(mess.ban)
if (args.length < 1) return m.reply(`Example:\n${prefix}fliptext MyMans`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
m.reply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break
case 'tohuruf': {
if (isBan) return m.reply(mess.ban)
if (!Number(args[0])) return m.reply(`Example:\n${prefix}tohuruf 456`)
try {
quere = args.join(" ")
convertes = await toHur(quere)
m.reply(`\`\`\`「 ALPHABET 」\`\`\`\n*•> Number :*\n${quere}\n*•> Alphabet :*\n${convertes}`)
} catch {
m.reply("Error")
}
}
break
case 'ghfollowing':case 'followinggh':
anu = await fetchJson(`https://api.github.com/users/${q}/following`)
teks = `*Following Github: ${q}\n\n`
buffer = await getBuffer(anu[0].avatar_url)
	teks = `*Username:* ${anu.login}\n*Link:* ${anu.html_url}\n                            \n`
mans.sendMessage(from, {image:{url:buffer}, caption:teks}, {quoted:m})
			break
case 'welcome': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
m.reply('Succes menyalakan welcome di group ini')
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Mati')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Succes mematikan welcome di group ini')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'autorevoke': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (GcRvk) return m.reply('Sudah Aktif')
gcrevoke.push(from)
m.reply('Succes menyalakan autorevoke di group ini')
} else if (args[0] === "off") {
if (!GcRvk) return m.reply('Sudah Mati')
let off = wlcm.indexOf(from)
gcrevoke.splice(off, 1)
m.reply('Succes mematikan autorevoke di group ini')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'leveling':
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === 'on'){
if (isLeveling) return m.reply(`Udah aktif`)
_leveling.push(from)
fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
m.reply('leveling aktif')
} else if (args[0] === 'off'){
let anu = _leveling.indexOf(from)
_leveling.splice(anu, 1)
fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
m.reply('leveling nonaktif')
} 
break
case 'autosticker':
            case 'autostiker':
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args.length < 1) return m.reply('ketik autosticker enable untuk mengaktifkan\nketik autosticker disable untuk menonaktifkan')
if (args[0]  === 'enable'){
if (isAutoSticker) return m.reply(`Udah aktif`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
m.reply('autosticker aktif')
} else if (args[0] === 'disable'){
let anu = autosticker.indexOf(from)
autosticker.splice(anu, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
m.reply('autosticker nonaktif')
}
break
case 'autostickerpc':
            case 'autostikerpc':
      if (m.isGroup) return fakey('Command ini khusus chat pribadi!')
if (isBan) return m.reply(mess.ban)
if (args.length < 1) return m.reply('ketik autosticker enable untuk mengaktifkan\nketik autosticker disable untuk menonaktifkan')
if (args[0]  === 'enable'){
if (isAutoStick) return m.reply(`Udah aktif`)
_autostick.push(from)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
m.reply('autostickerpc aktif')
} else if (args[0] === 'disable'){
let anu = autosticker.indexOf(from)
_autostick.splice(anu, 1)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
m.reply('autostickerpc nonaktif')
}
break
case 'sewad':
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply(`Penggunaan :\n*${prefix}sewad* add/del waktu`)
if (args[0] === 'add'){
_sewa.addSewaGroup(from, args[1], sewa)
m.reply(`Success`)
} else if (args[0].toLowerCase() === 'del'){
sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
reply(mess.success)
} else {
m.reply(`Penggunaan :\n*${prefix}sewad* add/del waktu`)}
break
case 'sewalist': 
case 'listsewa':
let cekvippsewa = ms(i.expired - Date.now())
let listsewa = `List Sewa\nJumlah : ${sewa.length}\n\n*ID :* ${i.id} \n*Expire :* ${cekvippsewa.days} day(s) ${cekvippsewa.hours} hour(s) ${cekvippsewa.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
m.reply(listsewa)
break
case 'sewacheck':
case 'ceksewa': 
if (!m.isGroup) return m.reply('khusus Grup')
if (!isSewa) return m.reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
let cekvipsewa = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
let sewanya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvipsewa.days} day(s) ${cekvipsewa.hours} hour(s) ${cekvipsewa.minutes} minute(s)`
m.reply(sewanya)
break
case 'sewa':
m.reply(`*BOT ON 24 JAM & BISA BUAT PRICELIST*
╭──「 *_SEWA BOT_* 」
├  1 MINGGU : IDR 10.000 (10k)
├  1 BULAN : IDR 15.000 (15k)
├   PERMANEN : IDR 50.000 (50k)
╰────
╭─ [ KELEBIHAN BOT ]
├  ＯＮ 24 ＪＡＭ
├  BISA BUAT PRICELIST
├  FITUR BANYAK
╰────
╭─[ KEUNTUNGAN ]
├  ANTI LINK ( AUTO KICK )
├  ANTI VIRTEX ( AUTO KICK )
├  WELCOME ( OTOMATIS )
├  DAN RATUSAN FITUR LAINYA
╰────
╭─[ *MINAT CHAT* ]
├  🪀 wa.me/6282279915237?text=sewa+bot
╰────
╭─[ *TES BOT? CHAT NOMER DI BAWAH* ]
├ Wa.me/6285750758067
╰────
╭─[ *PAYMENT* ]
├  GOPAY
├  OVO
├  PULSA +10k
├  QRIS ALL PAYMENT
╰────
*_BOT INI MEMAKAI RDP BUKAN TERMUX/HEROKU/WIBUSOFT_*
*_DI JAMIN ANTI DELAY & ON 24 JAM!_*


╭──「 *_JADI BOT + OWNER_* 」
├   RP : IDR 30.000 (30k)
╰────
╭─ [ FASILITAS ]
├  CUMA SCAN QR DOANG JADI                
│    BOT + OWNER
├  DI RUN DI RDP BUKAN HEROKU
├  FITUR BOT NYA BANYAK
├  BANYAK FITUR LANGKA
├  BUKAN BOT WIBUSOFT
╰────
╭─[ KEUNTUNGAN ]
├  BISA OPEN SEWA BOT
├  NAMA BOT, NAMA OWNER, NOMOR.OWNER,
│    DLL DI GANTI JADI TERSERAH LU
╰────
╭─[ *MINAT CHAT* ]
├  🪀 wa.me/6282279915237?text=jadi+bot
╰────


╭──「JOIN MURID BOT 」
├   RP : IDR 20.000 (20k)
╰────
╭─ [ FASILITAS ]
├  DI AJARIN SAMPE BISA
├  DI KASIH BAHAN²
╰────
╭─[ KEUNTUNGAN ]
├  BISA OPEN SEWA BOT
├  BISA OPEN MURID 
╰────
╭─[ *MINAT CHAT* ]
├  🪀 wa.me/6282279915237?text=join+murid+bot
╰────`)
break
case 'antilink': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return m.reply('Sudah Aktif')
ntilink.push(from)
m.reply('Succes menyalakan antilink di group ini')
var groupe = await mans.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
mans.sendMessage(from, {text: `PERINGATAN!!! jika bukan admin jangan send link di group ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLink) return m.reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
m.reply('Succes mematikan antilink di group ini')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'listonline': case 'listaktif': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
let liston = 1
mans.sendText(m.chat, '     「 List Online 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break
case 'chat': {
if (!isCreator) return m.reply(mess.owner)
if (!args.join(" ")) return m.reply(`Example :\n${prefix + command} 62813xxxx|Woi`)
const cpes = args.join(" ")
const nony = cpes.split("|")[0];
const pesny = cpes.split("|")[1];
lolh = `*| CHAT FITUR |*

Pesan dari admin bot
Nomor : @${m.sender.split("@")[0]}
Pesan : ${pesny}`
mans.sendMessage(nony + "@s.whatsapp.net", {text:lolh, mentions:[m.sender]}, {quoted:m})
}
await m.reply("Succes")
break
case 'cowner': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Pilih add atau del`)
if (args[1]) {
orgnye = args[1]
} else if (m.quoted) {
orgnye = m.quoted.sender.split("@")[0]
}
const isCwner = owner.includes(orgnye)
if (args[0] === "add") {
if (isCwner) return m.reply('User sudah menjadi owner')
owner.push(orgnye)
m.reply(`Succes add friends`)
} else if (args[0] === "del") {
if (!isCwner) return m.reply('User bukan owner')
let delcwner = owner.indexOf(orgnye)
owner.splice(delcwner, 1)
m.reply(`Succes del friends`)
} else {
m.reply("Error")
}
}
break
case 'ban': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Pilih add atau del`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBane) return m.reply('User sudah dibanned')
banUser.push(orgnye)
m.reply(`Succes ban`)
} else if (args[0] === "del") {
if (!isBane) return m.reply('User tidak dibanned')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
m.reply(`Succes delban`)
} else {
m.reply("Error")
}
}
break
case 'request': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} min tambahin fitur downloader`)
teks = `*| REQUEST FITUR |*`
teks1 = `\n\nNomor : @${m.sender.split("@")[0]}\nRequest : ${args.join(" ")}`
teks2 = `\n\nSucces send to owner`
for (let i of owner) {
mans.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
mans.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
break
case 'report': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : \n- ${prefix + command} fitur ig error min\n- ${prefix + command} user ini nyepam min`)
teks = `*| REPORT FITUR |*`
teks1 = `\n\nNomor : @${m.sender.split("@")[0]}\nReport : ${args.join(" ")}`
teks2 = `\n\nSucces send to owner`
for (let i of owner) {
mans.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
mans.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
break
case 'mcserver': case 'mcquery': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : \n${prefix + command} ip|port\nUses : \n${prefix + command} play.zackmans.com|19132`)
const Query = require("minecraft-query");

const qury = args.join(" ")
const iphost = qury.split("|")[0];
const portnya = qury.split("|")[1];

if (!iphost) return m.reply("ipnya mana kak?")
if (!portnya) return m.reply("portnya mana kak?")

const q = new Query({host: iphost, port: portnya, timeout: 7500});

q.fullStat()
.then(success => {
m.reply(jsonformat(success));
return q.basicStat()
})
.then(success => {
m.reply(jsonformat(success));
q.close();
})
}
break
case 'mcpedl': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} shader`)
yogipw.mcpedl(args.join(" ")).then(async(res) => {
teks = `*| MCPEDL SEARCH |*`
for (let i of res) {
teks += `\n\nName : ${i.name}\nCategory : ${i.category}\nDate : ${i.date}\nDesc : ${i.desc}\nLink : ${i.link}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: "© Lol Lexxy+",
buttons: buttons,
headerType: 4
}
mans.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'happymod': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} mobile legend`)
yogipw.happymod(args.join(" ")).then(async(res) => {
teks = '```「 HappyMod Search 」```'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: {url:res[0].icon},
jpegThumbnail: thum,
caption: teks,
footer: "© Lol Lexxy+",
buttons: buttons,
headerType: 4
}
mans.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'searchgc': {
if (isBan) return m.reply(mess.ban)
if (args.length < 1) return m.reply(`Example :\n${prefix}searchgc Editor Berkelas`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks = '```「 Search Group 」```'
for (let i of res) {
teks += `\n\n•> Group Whatsapp :\n`
teks += `${i.link}\n`
teks += `${i.nama}`
}
let buttons = [
{buttonId: `ping`, buttonText: {displayText: 'Status'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: "© Lol Lexxy+",
buttons: buttons,
headerType: 4
}
mans.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'servermc': {
if (isBan) return m.reply(mess.ban)
yogipw.servermc().then(async(res) => {
let teks = '*| SERVER MC INDONESIA |*\n\nhttps://minecraftpocket-servers.com/country/indonesia/\n\n'
let no = 1
for (let i of res) {
teks += `▸ Server Ke ${no++}\nip : ${i.ip}\nport : ${i.port}\nversi : ${i.versi}\nplayer : ${i.player}\n\n`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: "© Lol Lexxy+ ",
buttons: buttons,
headerType: 4
}
mans.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'antitag': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return
if (args.length < 1) return m.reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (antitags === true) return
global.antitags = true
m.reply(`Berhasil mengaktifkan antitag!`)
} else if (args[0] === 'off') {
if (antitags === false) return
global.antitags = false
m.reply(`Berhasil menonaktifkan antitag!`)
} else {
m.reply('Pilih on atau off')
}
}
break
case 'yts': case 'ytsearch': {
fakey(mess.wait)
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} dj 30 detik`)
let yts = require("yt-search")
let search = await yts(args.join(" "))
let teks = '*| YOUTUBE SEARCH |*\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
m.reply(teks)
}
break
case 'infochat': {
if (isBan) return m.reply(mess.ban)
if (!m.quoted) m.reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) return m.reply('Pesan tersebut bukan dikirim oleh bot!')
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⭔ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
mans.sendTextWithMentions(m.chat, teks, m)
}
break
case 'setexif': {
               if (!isCreator) return m.reply(mess.owner)
               if (!text) return m.reply(`Example : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n*Packname* : ${global.packname}\n*Author* : ${global.author}`)
            }
            break
case 'setname': case 'setsubject': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!text) return m.reply('Text ?')
await mans.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'block': {
		if (!isCreator) return m.reply(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await mans.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) return m.reply(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await mans.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
case 'setdesc': case 'setdesk': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!text) return m.reply('Text ?')
await mans.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setppbot': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await mans.downloadAndSaveMediaMessage(quoted)
await mans.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await mans.downloadAndSaveMediaMessage(quoted)
await mans.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break
case 'tagall': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${args.join(" ") ? args.join(" ") : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
mans.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'hidetag': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
mans.sendMessage(m.chat, { text : args.join(" ") ? args.join(" ") : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'virtex': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
mans.sendMessage(m.chat, { text : `${require('./storage/virtex.js').virtexfax(prefix, l, pushname)}`, mentions: participants.map(a => a.id)}, { quoted: m })
mans.sendMessage(m.chat, { text : `${require('./storage/virtex.js').virtexfax(prefix, l, pushname)}`, mentions: participants.map(a => a.id)}, { quoted: m })
mans.sendMessage(m.chat, { text : `${require('./storage/virtex.js').virtexfax(prefix, l, pushname)}`, mentions: participants.map(a => a.id)}, { quoted: m })
mans.sendMessage(m.chat, { text : `${require('./storage/virtex.js').virtexfax(prefix, l, pushname)}`, mentions: participants.map(a => a.id)}, { quoted: m })
mans.sendMessage(m.chat, { text : `${require('./storage/virtex.js').virtexfax(prefix, l, pushname)}`, mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'autoreadsw':
	if (!isCreator) return fakey(`Khusus Owner`)
	if (args[0] == 'on') {
		if (autoreadsw) return fakey('*Sudah aktif!*')
		autoreadsw = true
		fakey('*Berhasil mengaktifkan auto read sw*')
	} else if (args[0] == 'off') {
		if (!autoreadsw) return fakey('*Belum aktif!*')
		autoreadsw = false
		fakey('*Berhasil mematikan auto read sw*')
	} else {
		fakey('Pilih on atau off!')
	}
	break
case 'linkgroup': case 'linkgc': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
let response = await mans.groupInviteCode(m.chat)
mans.sendMessage(m.chat, {text:`Link Group ${groupMetadata.subject} : \nhttps://chat.whatsapp.com/${response}l`, "contextInfo": {
mimetype: "image/jpeg",
text: "Lol Lexxy+",
"forwardingScore": 1000000000,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
"title": `Lol Lexxy+`,
"body": `Lol Lexxy+`,
"previewType": "PHOTO",
"thumbnailUrl": thum,
"thumbnail": thum,
"sourceUrl": "https://youtube.com/watch?v=w6w0cy_1HY4"
}}}, { quoted: m, detectLink: true })
}
break
case 'revoke': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
mans.groupRevokeInvite(m.chat)
}
break
case 'ephemeral': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!args[0]) return m.reply('Masukkan value enable/disable')
if (args[0] === 'enable') {
await mans.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'disable') {
await mans.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
case 'editinfo': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === 'open'){
await mans.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'close'){
await mans.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: `*「 Lol Lexxy+ 」*\n\nChange Info, Select Open Or Close`,
footer: "© Lol Lexxy+",
buttons: buttons,
headerType: 4
}
mans.sendMessage(m.chat, buttonMessage, { quoted: m })
}
}
break
case 'group': case 'grup': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === 'close'){
await mans.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await mans.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: `*「 Lol Lexxy+ 」*\n\nChange Group Setting, Select Open Or Close`,
footer: "© Lol Lexxy+",
buttons: buttons,
headerType: 4
}
mans.sendMessage(m.chat, buttonMessage, { quoted: m })
}
}
break
case 'promote': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await mans.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'demote': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await mans.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'kick': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await mans.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'add': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await mans.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'inspect': {
if (!args[0]) return m.reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return m.reply("Link Invalid")
mans.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `     「 Group Link Inspector 」
▸ ID : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}
▸ Subject : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
▸ Subject update by : ${res.content[0].attrs.s_o.split("@")[0] ? "@" + res.content[0].attrs.s_o.split("@")[0] : "undefined"}
▸ Subject update at : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Create by : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Create at : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Members : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Members
▸ Desc update by : ${res.content[0].content[0].attrs.participant ? "@" + res.content[0].content[0].attrs.participant.split("@")[0] : "undefined"}
▸ Desc update at : ${res.content[0].content[0].attrs.t ? moment(res.content[0].content[0].attrs.t * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Desc id : ${res.content[0].content[0].attrs.id ? res.content[0].content[0].attrs.id : "undefined"}
▸ Description : ${res.content[0].content[0].content[0].content ? res.content[0].content[0].content[0].content.toString() : "No Description"}
`
try {
pp = await mans.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
mans.sendFile(m.chat, pp, "", m, { caption: tekse, mentions: await mans.parseMention(tekse) })
})
}
break
case 'join': {
if (isBan && isCreator) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply("Linknya mana kak?")
vdd = args[0]
let vcc = vdd.split("https://chat.whatsapp.com/")[1]
if (!vcc) return m.reply("Link invalid!")
if (isCreator) {
await mans.groupAcceptInvite(vcc).then(async(res) => m.reply(jsonformat(res))).catch(_ => _)
m.reply("Succes")
} else {
mans.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: vcc } }]
}).then(async(res) => {
sizny = res.content[0].attrs.size
if (sizny < 50) {
teks = `Maaf anggota group anda kurang dari 50, minimal agar bot join harus mempunyai lebih dari 50 anggota`
sendOrder(m.chat, teks, "5123658817728409", fs.readFileSync('./media/image/mans.jpg'), 2022, "Lol Lexxy+ ~ Multi Device", "6283155687629@s.whatsapp.net", "AR6NCY8euY5cbS8Ybg5Ca55R8HFSuLO3qZqrIYCT7hQp0g==", "99999999999999999999")
} else if (sizny > 50) {
await mans.groupAcceptInvite(vcc).then(async(res) => m.reply(jsonformat(res))).catch(_ => _)
m.reply("Succes")
} else {
m.reply("Error")
}
}).catch(_ => _)
}
}
break
case 'volume': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example: ${prefix + command} 10`)
media = await mans.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
jadie = fs.readFileSync(rname)
mans.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
jadie = fs.readFileSync(rname)
mans.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
m.reply("Kirim video/audio")
}
}
break
case 'tempo': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example: ${prefix + command} 10`)
var req = args.join(' ')
media = await mans.downloadAndSaveMediaMessage(quoted, "tempo")
if (isQuotedAudio) {
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
hah = fs.readFileSync(ran)
mans.sendMessage(from, {audio:hah, mimetype:'audio/mp4', ptt:true}, {quoted:m})
fs.unlinkSync(ran)
})
} else if (isQuotedVideo) {
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
hah = fs.readFileSync(ran)
mans.sendMessage(from, {video:hah, mimetype:'video/mp4'}, {quoted:m})
fs.unlinkSync(ran)
})
} else {
m.reply("Kirim video/audio")
}
}
break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                fakey(mess.wait)
                let media = await mans.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                mans.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
case 'nulis': {
if (isBan) return m.reply(mess.ban)
if (args.length < 1) return m.reply(`Example :\n${prefix}nulis hai|91|#ff020a|Manusia terganteng adalah salman alfarizi`)
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
const nls = args.join(" ")
const nams = "Nama : " + nls.split("|")[0];
const kels = "Kelas : " + nls.split("|")[1];
const menlise = nls.split("|")[3];
const codewarn = nls.split("|")[2];
await m.reply('Sedang menulis')
const jangkale = menlise.replace(/(\S+\s*){1,10}/g, '$&\n')
const jangbare = jangkale.split('\n').slice(0, 30).join('\n')
const jangnam = nams.replace(/(\S+\s*){1,10}/g, '$&\n')
const jangkel = kels.replace(/(\S+\s*){1,10}/g, '$&\n')
if (kels.length > 12) return m.reply("Jumlah teks kelas maximal 4")
if (nams.length > 34) return m.reply("Jumlah teks nama maximal 27")
if (codewarn.length > 7) return m.reply("Jumlah teks warna maximal 7")
console.log('「 MENULIS 」Sedang dalam prosses')
spawn('convert', [
'./media/image/magernulis.jpg',
'-fill',
codewarn,
'-font',
'./media/font/nulis.ttf',
'-size',
'1024x784',
'-pointsize',
'20',
'-interline-spacing',
'1',
'-annotate',
'+806+78',
janghar,
'-size',
'1024x784',
'-pointsize',
'18',
'-interline-spacing',
'1',
'-annotate',
'+806+102',
jangwak,
'-size',
'1024x784',
'-pointsize',
'21',
'-interline-spacing',
'1',
'-annotate',
'+285+90',
jangnam,
'-size',
'1024x784',
'-pointsize',
'21',
'-interline-spacing',
'1',
'-annotate',
'+285+110',
jangkel,
'-size',
'1024x784',
'-pointsize',
'20',
'-interline-spacing',
'-7.5',
'-annotate',
'+344+146',
jangbare,
'./storage/hasilnulis.jpg'
])
.on('error', () => m.reply('Error') )
.on('exit', () => {
mans.sendMessage(from, {image:fs.readFileSync('./storage/hasilnulis.jpg'), caption:'Succes'}, {quoted:m}).catch(() => m.reply('```「 GAGAL 」Terjadi kesalahan dalam mengirim file```'))
})
exec(`npm i marker`)
}
break
case 'kalkulator': case 'kal': {
if (isBan) return m.reply(mess.ban)
if (args.length < 1) return m.reply(`*Example :*\n${prefix}kalkulator 2 * 5\n\n*List Bilangan :*\n•> Kali : *\n•> Bagi : /\n•> Tambah : +\n•> Kurang : -`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
m.reply('Error')
} else {
m.reply(`\`\`\`「 Kalkulator 」\`\`\`\n\n*•> Hitung :* ${qsd}\n*•> Hasil :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break
case 'public': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
mans.public = true
m.reply('Sukse Change To Public Usage')
mans.setStatus(`Mode : Public Created By Lexxy`)
}
break
case 'setstatut':
case 'setbio':
if (!q) return m.reply('Kirim perintah *#setstatus text*')
mans.setStatus(`${q}`)
break
case 'self': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
mans.public = false
m.reply('Sukses Change To Self Usage')
mans.setStatus(`Mode : Self Created By Lexxy`)
}
break
case 'speed':case 'ping': case 'botstatus': case 'statusbot': {
if (isBan) return m.reply(mess.ban)
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
m.reply(respon)
}
break
case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
case 'emojimix2': {
	    if (!text) return fakey(`Example : ${prefix + command} 😅`)
	if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await mans.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': case 'ttp': {
           if (!text) return fakey(`Example : ${prefix + command} text`)
           await mans.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'hisoka', 'morou', m, {asSticker: true})

         }
         break
case 'toimage': case 'toimg': {
if (isBan) return m.reply(mess.ban)
if (!m.quoted) return m.reply('Reply Image')
if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`)
fakey(mess.wait)
let media = await mans.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
mans.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'tomp4': case 'tovideo': {
if (isBan) return m.reply(mess.ban)
if (!m.quoted) return m.reply('Reply Image')
if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`)
fakey(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await mans.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await mans.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'toaud': case 'toaudio': {
if (isBan) return m.reply(mess.ban)
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
if (!m.quoted) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
fakey(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
mans.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break

case 'tomp3': {
if (isBan) return m.reply(mess.ban)
if (/document/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!m.quoted) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
fakey(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
mans.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${mans.user.name} (${m.id}).mp3`}, { quoted : m })
}
break
case 'tovn': case 'toptt': {
if (isBan) return m.reply(mess.ban)
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
if (!m.quoted) return m.reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
fakey(mess.wait)
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
mans.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
case 'togif': {
if (isBan) return m.reply(mess.ban)
if (!m.quoted) return m.reply('Reply Image')
if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`)
fakey(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await mans.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await mans.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'cerpen-cintasegitiga':{
let cerpe = await cerpen(`Cinta segitiga`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-islami':{
let cerpe = await cerpen(`Cinta segitiga`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-galau':{
let cerpe = await cerpen(`galau`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-persahabatan':{
let cerpe = await cerpen(`persahabatan`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-Pengorbanan':{
let cerpe = await cerpen(`Pengorbanan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'tourl':{
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
if (isBan) return m.reply(mess.ban)
fakey(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await mans.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'q': case 'quoted': {
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
kurangLimit(m.sender, 1)
m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
if (isBan) return m.reply(mess.ban)
if (!m.quoted) return m.reply('Reply Pesannya!!')
let wokwol = await mans.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
case 'getname': {
if (isBan) return m.reply(mess.ban)
if (qtod === "true") {
namenye = await mans.getName(m.quoted.sender)
m.reply(namenye)
} else if (qtod === "false") {
mans.sendMessage(from, {text:"Reply orangnya"}, {quoted:m})
}
}
break
case 'getpic': {
if (isBan) return m.reply(mess.ban)
if (qtod === "true") {
try {
pporg = await mans.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
mans.sendMessage(m.chat, { image : { url : pporg }, caption:`Done` }, { quoted : m })
} else if (qtod === "false") {
try {
pporgs = await mans.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
mans.sendMessage(m.chat, { image : { url : pporgs }, caption:`Done` }, { quoted : m })
}
}
break
case 'owner': case 'creator': {
mans.sendContact(m.chat, global.owner, m)
}
break
case 'translate': case 'terjemahan': {
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
kurangLimit(m.sender, 1)
m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply("Textnya?")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=id&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
m.reply(`🌐Translate : ${Detek}\n📘Hasil : ${Infoo}`)
}
break
case 'gimage': case 'gig': {
 fakey(mess.wait)
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply("Mau cari gambar apa kak?")
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `gimage ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `*| GOOGLE IMAGE |*

🤠 Query : ${text}
🔗 Media Url : ${images}`,
footer: "© Lol Lexxy+",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"NOMOR BOT WHATSAPP, MULTI DEVICE TERBARU FITUR BERJIBUN - ZackMans",
body:"© Lol Lexxy+ - X - Lol Lexxy+",
thumbnail: log0,
mediaType:2,
mediaUrl: "https://youtube.com/watch?v=w6w0cy_1HY4",
sourceUrl: "https://youtube.com/watch?v=w6w0cy_1HY4"
}}
}
mans.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'google': {
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
fakey(mess.wait)
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply(`Example: ${prefix + command} <query>\nUses : ${prefix + command} apa arti cinta`)
let google = require('google-it')
google({'query': args.join(" ")}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `*Title* : ${g.title}\n`
teks += `*Description* : ${g.snippet}\n`
teks += `*Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break
case 'igstory': case 'instagramstory': {
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply(`Example :\n${prefix + command} salman_alfarizi_15`)
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
try {
hx.igstory(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*| INSTAGRAM STORY |*\n\n⭔ Username : ${resed.user.username ? resed.user.name : "undefined"}\n⭔ Followers : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Pilih media dibawah untuk mendownload_`
let buttons = anu_list
let buttonMessage = {
image:log0,
jpegThumbnail:thum,
caption: textbv,
footer: "© Lol Lexxy+",
buttons: buttons,
headerType: 4
}
mans.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (err) {
m.reply(String(err))
}
}
break
case 'igdl': case 'instagram': {
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply(`Example :\n${prefix + command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
try {
hx.igdl(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*| INSTAGRAM DOWNLOADER |*\n\n⭔ Username : ${resed.user.username ? resed.user.name : "undefined"}\n⭔ Followers : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Pilih media dibawah untuk mendownload_`
let buttons = anu_list
let buttonMessage = {
image:log0,
jpegThumbnail:thum,
caption: textbv,
footer: "© Lol Lexxy+",
buttons: buttons,
headerType: 4
}
mans.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (err) {
m.reply(String(err))
}
}
break
case 'ig': {
if (args[0] === "mp4") {
mans.sendMessage(from, {video:{url:args[1]}, caption:'Done!', mimetype:'video/mp4'}, {quoted:m})
} else if (args[0] === "jpg") {
mans.sendMessage(from, {image:{url:args[1]}, caption:'Done!'}, {quoted:m})
} else {
m.reply(" Error! ")
}
}
break
case 'mp4' : {
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply("Linknya mana kak?")
try {
mans.sendMessage(from, {video:{url:args[0]}, caption:"Succes", contextInfo:{externalAdReply:{
title:"NOMOR BOT WHATSAPP, MULTI DEVICE TERBARU FITUR BERJIBUN - ZackMans",
body:"© Lol Lexxy+ - X - Lol Lexxy+",
thumbnail: log0,
mediaType:2,
mediaUrl: "https://youtube.com/watch?v=w6w0cy_1HY4",
sourceUrl: "https://youtube.com/watch?v=w6w0cy_1HY4"
}}}, {quoted:m})
} catch {
m.reply("Linknya Error")
}
}
break
case 'jpeg': {
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply("Linknya mana kak?")
try {
mans.sendMessage(from, {image:{url:args[0]}, caption:"Succes", contextInfo:{externalAdReply:{
title:"NOMOR BOT WHATSAPP, MULTI DEVICE TERBARU FITUR BERJIBUN - ZackMans",
body:"© Lol Lexxy+ - X - Lol Lexxy+",
thumbnail: log0,
mediaType:2,
mediaUrl: "https://youtube.com/watch?v=w6w0cy_1HY4",
sourceUrl: "https://youtube.com/watch?v=w6w0cy_1HY4"
}}}, {quoted:m})
} catch {
m.reply("Linknya Error")
}
}
break
case 'twitter': case 'twdl': case 'twmp4': {
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply(`Example :\n${prefix + command} https://twitter.com/cinema21/status/1517754155644821504?t=rUnbyqwh4vAE1QXMXlsVeQ&s=19`)
try {
let lotwit = await aiovideodl(args[0])
teks = `*| TWITTER DOWNLOADER |*

Caption : ${lotwit.title ? lotwit.title : "undefined"}
Type : ${lotwit.medias[1].extension}
Size : ${lotwit.medias[1].formattedSize}
Link : ${lotwit.medias[1].url}

_Pilih kualitas video dibawah dengan cara mengklik tombolnya_`
let buttons = [
{buttonId: `twddl ${lotwit.medias[0].url}`, buttonText: {displayText: `Quality ${lotwit.medias[0].quality}`}, type: 1},
{buttonId: `twddl ${lotwit.medias[2].url}`, buttonText: {displayText: `Quality ${lotwit.medias[2].quality}`}, type: 1}
]
let buttonMessage = {
video: {url:lotwit.medias[1].url},
caption: teks,
footer: "© Lol Lexxy+",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Lol Lexxy+ - Twitter Downloader",
body:lotwit.title ? lotwit.title : "Twitter Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
mans.sendMessage(from, buttonMessage, {quoted:m})
} catch {
m.reply(" Link Error!")
}
}
break
case 'twddl': {
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
if (isBan) return m.reply(mess.ban)
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
video: {url:args[0]},
caption: "Done!",
footer: "© Lol Lexxy+",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Lol Lexxy+ - Twitter Downloader",
body: "Twitter Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
mans.sendMessage(from, buttonMessage, {quoted:m})
}
break
case 'facebook': case 'fbdl': case 'fbmp4': case 'fb': {
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply(`Example :\n${prefix + command} https://fb.watch/cAX2dep-BZ/`)
try {
let resd = await aiovideodl(args[0])
teks = `*| FACEBOOK DOWNLOADER |*

Type : video/${resd.medias[0].extension}
Quality : ${resd.medias[0].quality}
Size : ${resd.medias[0].formattedSize}

_Untuk kualitas hd anda bisa klik tombol dibawah_`
let buttons = [
{buttonId: `fbddl ${resd.medias[1].url}`, buttonText: {displayText: 'QualityHD'}, type: 1}
]
let buttonMessage = {
video: {url:resd.medias[0].url},
caption: teks,
footer: "© Lol Lexxy+",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Lol Lexxy+ - Facebook Downloader",
body:"facebook downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
mans.sendMessage(from, buttonMessage, {quoted:m})
} catch {
m.reply("Link invalid!")
}
}
break
case 'fbddl': {
 fakey(mess.wait)
if (isBan) return m.reply(mess.ban)
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
video: {url:args[0]},
caption: "Done!",
footer: "© Lol Lexxy+",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Lol Lexxy+ - Facebook Downloader",
body: " Facebook Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
mans.sendMessage(from, buttonMessage, {quoted:m})
}
break
case 'tiktokaudio':
case 'tiktokmusic':{
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
  if (!q) return reply('Linknya?')
  if (!q.includes('tiktok')) return reply('Itu bukan link tiktok!')
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 m.reply(pesan.eror) 
} )
   console.log(musim_rambutan)
   const musim_duren_a = musim_rambutan.result.nowatermark
    mans.sendMessage(from, { audio: { url: musim_duren_a }, mimetype: 'audio/mp4' }, { quoted: m })
   }
 break

  case 'tiktok':{
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
  if (!q) return reply('Linknya?')
  fakey(mess.wait)
  if (!q.includes('tiktok')) return reply('Itu bukan link tiktok!')
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 m.reply(pesan.eror) 
} )
   console.log(musim_rambutan)
   const musim_duren_v = musim_rambutan.result.watermark
    mans.sendMessage(from, { video: { url: musim_duren_v }, caption: `Anda Bisa Mengubah Menjadi Nonw Dengan Mengetik\n.tiktoknowm ${q}` }, { quoted: m })
   }
  break
  case 'tiktoknowm':{
  if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
  if (!q) return reply('Linknya?')
  fakey(mess.wait)
  if (!q.includes('tiktok')) return reply('Itu bukan link tiktok!')
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 m.reply(pesan.eror) 
} )
   console.log(musim_rambutan)
   const musim_duren_v = musim_rambutan.result.nowatermark
    mans.sendMessage(from, { video: { url: musim_duren_v }, caption: "Done!" }, { quoted: m })
   }
  break
case 'iqra': {
	if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) return oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		mans.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf By Lexxy`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		fakey(mess.wait)
		mans.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		fakey(mess.wait)
		mans.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		fakey(mess.wait)
		mans.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		fakey(mess.wait)
		mans.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!args[0]) return m.reply(`Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
		if (!args[1]) return m.reply(`Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`)
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) return m.reply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`)
		if (!args[1]) return m.reply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`)
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		mans.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) return m.reply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
		if (!args[1]) return m.reply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
case 'jooxplay':   
case 'joox':
if (!q) return m.reply(`Kirim perintah ${prefix + command} judul`)
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
get_result = await fetchJson(`http://api.lolhuman.xyz/api/jooxplay?apikey=${lolkey}&query=${q}`)
                    tkt = `Title : ${get_result.result.info.song}
Artists : ${get_result.resul.tinfo.singer}
Duration : ${get_result.result.info.duration}
Album : ${get_result.result.info.album}
Uploaded : ${get_result.result.info.date}
Lirik :\n ${get_result.result.lirik}`
                   mans.sendMessage(m.chat, { image: { url: get_result.result.image }, caption: tkt }, { quoted: m })
                   mans.sendMessage(from, { audio: { url: get_result.result.audio }, mimetype: 'audio/mp4' }, { quoted: m })
               break
case 'play': case 'ytplay': {
 fakey(mess.wait)
if (isBan) return m.reply(mess.ban)
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let ytvc = await hx.youtube(anu.url)
let buttons = [
{buttonId: `.ytmp4 ${anu.url}`, buttonText: {displayText: 'VIDEO'}, type: 1},
{buttonId: `.ytmp3 ${anu.url}`, buttonText: {displayText: 'AUDIO'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail},
                    caption: `*── 「 YOUTUBE PLAY 」 ──*

Title : ${anu.title}
Ext : Search
ID : ${anu.videoId}
Duration : ${anu.timestamp}
Viewers : ${anu.views}
Upload At : ${anu.ago}
Author : ${anu.author.name}
Channel : ${anu.author.url}
Description : ${anu.description}
Url : ${anu.url}`,
                    footer: `Created By © LexxySlemek\nPilih Video Apa Audio?`,
                    buttons: buttons,
                    headerType: 4
                }
                mans.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'ytdl': case 'yt': case 'youtube':{
 fakey(mess.wait)
if (isBan) return m.reply(mess.ban)
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
if (!args[0]) return m.reply(mess.linkm)
try {
hx.youtube(args[0]).then(async(res) => {
textyt = `*── 「 YOUTUBE DOWNLOAD 」 ──*

❏ Title : ${res.title}
❏ Size : ${res.size}
❏ Quality : ${res.quality}

_Pilih video atau audio dan tunggu beberapa saat_`
let buttons = [
{buttonId: `.ytmp4 ${res.link}`, buttonText: {displayText: 'VIDEO'}, type: 1},
{buttonId: `.ytmp3 ${res.link}`, buttonText: {displayText: 'AUDIO'}, type: 1}
]
let buttonMessage = {
image: {url:res.thumb},
caption: textyt,
footer: "© Lol Lexxy+",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: res.title,
body: "© Lol Lexxy+ - X - Lol Lexxy+",
thumbnail: {url:res.thumb},
mediaType:2,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
mans.sendMessage(from, buttonMessage, {quoted:m})
}).catch(_ => _)
} catch {
m.reply("Linknya Error!")
}
}
break
case 'couple': {
                fakey(mess.wait)
          if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                mans.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                mans.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
case 'asupan':
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
 fakey(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/random`
mans.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Success"}, {quoted:m})
break
case 'asupanukhty':
case 'asupan-ukhty':
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
 fakey(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/ukhty`
mans.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Ini Kak Jangan Lupa Donasi Ya:)"}, {quoted:m})
break
case 'asupan-santuy':
case 'asupansantuy':
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
 fakey(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/santuy`
mans.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Ini Kak Jangan Lupa Donasi Ya:)"}, {quoted:m})
break
case 'hijaber':
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
 fakey(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/hijaber`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cecan-indo':
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
 fakey(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/indonesia`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cecan-malaysia':
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
 fakey(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/malaysia`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cecan-thai':
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
kurangLimit(m.sender, 1)
m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
 fakey(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/thailand`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cecan-vietnam':
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
kurangLimit(m.sender, 1)
m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
 fakey(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/vietnam`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cecan-korea':
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
kurangLimit(m.sender, 1)
m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
 fakey(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/korea`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cecan-jepan':
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
kurangLimit(m.sender, 1)
m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
 fakey(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/japan`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cecan':
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
kurangLimit(m.sender, 1)
m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
 fakey(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/cecan`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'darkjokes':

 fakey(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/randomimg/darkjokes`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'meme':
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
kurangLimit(m.sender, 1)
m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
 fakey(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/randomimg/meme`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'fakta-unik':
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
kurangLimit(m.sender, 1)
m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
 fakey(mess.wait)
tes = await fetchJson(`https://api.zacros.my.id/randomtext/faktaunik`)
teks = tes.result
buffer = `https://telegra.ph/file/7188012d573871aaf4fa0.jpg`
mans.sendMessage(from, {image:{url:buffer}, caption:teks}, {quoted:m})
break
case 'quotes':
tes = await fetchJson(`https://api.zacros.my.id/randomtext/quotes`)
teks = tes.result.quotes
buffer = `https://telegra.ph/file/7188012d573871aaf4fa0.jpg`
mans.sendMessage(from, {image:{url:buffer}, caption:teks}, {quoted:m})
break
case 'fml':
tes = await fetchJson(`https://api.zacros.my.id/randomtext/fml`)
teks = tes.result
m.reply(teks)
break
case 'cerpen':
tes = await fetchJson(`https://api.zacros.my.id/randomtext/cerpen`)
teks = tes.result
buffer = `https://telegra.ph/file/dcd94851554d89a015c5e.jpg`
mans.sendMessage(from, {image:{url:buffer}, caption:teks}, {quoted:m})
break
case 'katagalau':
tes = await fetchJson(`https://api.zacros.my.id/randomtext/katagalau`)
teks = tes.result
m.reply(teks)
break
case 'truth':{
tes = await fetchJson(`https://api.zacros.my.id/randomtext/truth`)
let buttons = [
                    {buttonId: `dare`, buttonText: {displayText: 'Dare 🎯'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/7188012d573871aaf4fa0.jpg' },
                    caption: `${tes.result}`,
                    footer: `Truth Or Dare??\nClick Button`,
                    buttons: buttons,
                    headerType: 4
                }
                mans.sendMessage(m.chat, buttonMessage, { quoted: m })
       }
            break
case 'dare':{
tes = await fetchJson(`https://api.zacros.my.id/randomtext/dare`)
teks = tes.result
let buttons = [
                    {buttonId: `dare`, buttonText: {displayText: 'Truth 🎯'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/7188012d573871aaf4fa0.jpg' },
                    caption: `${tes.result}`,
                    footer: `Truth Or Dare??\nClick Button`,
                    buttons: buttons,
                    headerType: 4
                }
                mans.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
//NEW 
case 'fotobts':
teks = `nih Kak >\\<`
buffer = `https://api.dapuhy.xyz/api/randomimage/batues?apikey=0gly81wDky`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break




//NEEWW
case 'waifu':
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/randomimg/waifu`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'husbu':
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/randomimg/husbu`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'loli':
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/randomimg/loli`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cosplay':
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/randomimg/cosplay`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break

case 'react': {
 reactionMessage = {
                    react: {
                        text: '🇮🇩',
                        key: { remoteJid: from, fromMe: false, id: quoted.id }
                    }
                }
                mans.sendMessage(from, reactionMessage)
                }
                break
case 'ytmp3':
  case 'youtubemp3':{
   fakey(mess.wait)
  if (args.length < 1) return reply('linknya?')
  if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
   try{
    await yta(args[0])
.then((res) => {
     const { dl_link } = res
      axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
   
      mans.sendMessage(from, { audio: { url: dl_link }, mimetype: 'audio/mp4' }, { quoted: m })
      })
     
})
     } catch (e){
    m.reply(from, `Akses ditolak, tidak dapat mengunduh!. Cobalah menggunakan link yang lain`, { quoted : m })
   }
  }
  break
  case 'ytmp4':
  case 'youtubemp4':{
   fakey(mess.wait)
  if (args.length < 1) return reply('linknya?')
  if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
   try{
    await ytv(args[0])
.then((res) => {
     const { dl_link } = res
      axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
   
      mans.sendMessage(from, { video: { url: dl_link }, caption: "Succes\nJangan Lupa Donasi Ya:)" }, { quoted: m })
      })
     
})
     } catch (e){
    m.reply(from, `Akses ditolak, tidak dapat mengunduh!. Cobalah menggunakan link yang lain`, { quoted : m })
   }
  }
  break
case 'pin':
case 'pinterest': {
	             if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
                fakey(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                mans.sendMessage(m.chat, { image: { url: result }, caption: ' ➭ Media Url : '+result }, { quoted: m })
            }
            break
case 'swm': case 'stickerwm': {
 fakey(mess.wait)
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example :\nswm Lexxy||77+ | Pack`)
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
mans.downloadAndSaveMediaMessage(quoted, "gifee")
mans.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await mans.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await mans.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
// Foto Editing bruda 
case 'invert':
case 'imageinvert':{
fakey(mess.wait)
if (isBan) return m.reply(mess.ban)
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
if (/image/.test(mime)) {
let dwnld = await quoted.download()
let { floNime } = require('./lib/uploader')
let fatGanss = await floNime(dwnld)
buffer = `http://api.lolhuman.xyz/api/editor/invert?apikey=${lolkey}&img=${fatGanss.result.url}`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
}
}
break
case 'tolol':
fakey(mess.wait)
		anu = `http://api.lolhuman.xyz/api/toloserti?apikey=${lolkey}&name=${q}`
		mans.sendMessage(from, {image:{url:anu}, caption:"Done!"}, {quoted:m})
		break
case 'wasted':
case 'imagewasted':{
fakey(mess.wait)
if (isBan) return m.reply(mess.ban)
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
if (/image/.test(mime)) {
let dwnld = await quoted.download()
let { floNime } = require('./lib/uploader')
let fatGa = await floNime(dwnld)
buffer = `https://api.lolhuman.xyz/api/editor/wasted?apikey=${lolkey}&img=${fatGa.result.url}`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
}
}
break
case 'jail':{
fakey(mess.wait)
if (isBan) return m.reply(mess.ban)
if (/image/.test(mime)) {
let dwnld = await quoted.download()
let { floNime } = require('./lib/uploader')
let fatGan = await floNime(dwnld)
buffer = `https://api.lolhuman.xyz/api/editor/jail?apikey=${lolkey}&img=${fatGan.result.url}`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
}
}
break
case 'smeme2': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        fakey(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await quoted.download()
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await mans.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break
	      
case 'smeme': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} |text2`
	        if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
     db.users[m.sender].limit -= 1 // -1 limit
     m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        fakey(mess.wait)
	        atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await quoted.download()
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await mans.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break
case 'sticker': case 's': {
if (isBan) return m.reply(mess.ban)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await mans.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.packname2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await mans.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.packname2 })
await fs.unlinkSync(encmedia)
} else {
m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break

// NEW FITUR INTERNET
case 'detiknews': case 'detik':{
  if (args.length < 1) return m.reply(from, 'Cari berita apa?', { quoted : m } )
  const aku_biji = await detikNews(args.join(' ')).catch(e => console.log("Undefined"))
  console.log(aku_biji)   
  let sections = []   
  for (let i = 0; i < aku_biji.length; i++) {
  const list = {title: `Result detik news ${i + 1}`,
  rows: [
	    {
	     title: `${aku_biji[i].Title}`, 
	     rowId: `#google ${aku_biji[i].Link}`,
	     description: ``
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  mans.sendMessage(
      from, 
      {
       text: "Cari berita di detik.com",
       footer: "Fax Dev",
       title: "[ Data Data Yang Kami Dapatkan Dari detik.com 🔎 ]",
       buttonText: "Click and see search results➡️",
       sections
      }, { quoted : m }
    )  
   }
  break
case 'wiki':
if (args.length < 1) return m.reply(' Yang Mau Di Cari Apa? ')
const res2 = await wikiSearch(q).catch(e => {
return m.reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
const result2 = `*Judul :* ${res2[0].judul}\n*Wiki :* ${res2[0].wiki}`
mans.sendMessage(from, { image : { url : res2[0].thumb }, caption : result2}) 
break
case 'gempa':
const tres = await Gempa()
var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
console.log(Map)
const captt = `Waktu : ${Waktu}\nLintang : ${Lintang}\nBujur : ${Bujur}\nWilayah : ${Wilayah}`
mans.sendMessage(from, { image : { url : Map }, caption : captt})
break
case 'covidindo':
case 'covid':
const c = await covid()
var { kasus, kematian, sembuh } = c[0]
mans.sendMessage(from, {text : `Kasus : ${kasus}\n\nKematian : ${kematian}\n\nSembuh : ${sembuh}`}, m)
break
case 'jadwaltv':
if (!q) return m.reply('Kirim perintah *#jadwaltv [channel]*')
m.reply(await jadwaltv(q))
break
case 'playstore': case 'apk':
if(!q) return m.reply('lu nyari apa?')
let play = await hx.playstore(q)
let storee = '❉─────────────────────❉\n'
for (let i of play){
storee += `\n*「 *PLAY STORE* 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
}
m.reply(storee)
break
//FITUR ISLAMIC
case 'kisahnabi':
	if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} muhammad`)
kisah = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/muhammad?apikey=RelzzSlemek`)
nabii = `Nama : ${kisah.result.name}
Kelahiran : ${kisah.result.thn_kelahiran}
Wafat :${kisah.result.place}
Singgah : ${kisah.result.story}

Cerita : ${kisah.kisah}`
m.reply(nabii)
break

case 'apakah':
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
mans.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: m })

break
case 'bisakah':
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
mans.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: m })

break
case 'bagaimanakah':
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
mans.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: m })
break
case 'rate':
 if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const te = ra[Math.floor(Math.random() * ra.length)]
mans.sendMessage(from, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: m })
break
case 'gantengcek':
case 'cekganteng':
 if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Riych`)
const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const teng = gan[Math.floor(Math.random() * gan.length)]
mans.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: m })
break
case 'cantikcek':
  case 'cekcantik':
 if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Riych`)
	const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const tik = can[Math.floor(Math.random() * can.length)]
mans.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: m })
break
case 'sangecek':
  case 'ceksange':
    case 'gaycek':
      case 'cekgay':
        case 'lesbicek':
          case 'ceklesbi':
				if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
mans.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: m })
break
case 'kapankah':
				if (!q) return m.reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
mans.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: m })
break
case 'wangy':
              if (!q) return m.reply(`Contoh : .wangy Riy`)
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
             m.reply(awikwok)
              break
case 'cekmati':
              if (!q) return m.reply(`Invalid!\n\nYg mau di cek siapa kontol?`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              m.reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
case 'gsmarena': {
            if (!text) return m.reply(`Example : ${prefix + command} realme`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/gsmarena?query=${text}&apikey=APIKEY`)
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `⭔ Title: ${judul}
⭔ Realease: ${rilis}
⭔ Size: ${ukuran}
⭔ Type: ${type}
⭔ Storage: ${storage}
⭔ Display: ${display}
⭔ Inchi: ${inchi}
⭔ Pixel: ${pixel}
⭔ Video Pixel: ${videoPixel}
⭔ Ram: ${ram}
⭔ Chipset: ${chipset}
⭔ Battery: ${batrai}
⭔ Battery Brand: ${merek_batre}
⭔ Detail: ${detail}`
            mans.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'jadwalbioskop': {
if (isLimit < 1) return reply("Limit kamu sudah habis , silahkan beli dengan cara #buy limit _jumlah_")
kurangLimit(m.sender, 1)
m.reply(`Satu limit terpakai\nSisa limit kamu : ${global.db.users[m.sender].limit}`)
            if (!text) return m.reply(`Example: ${prefix + command} jakarta`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/jadwalbioskop?kota=${text}&apikey=hdiiofficial`)
            let capt = `Jadwal Bioskop From : ${text}\n\n`
            for (let i of res.result){
            capt += ` Title: ${i.title}\n`
            capt += ` Thumbnail: ${i.thumb}\n`
            capt += ` Url: ${i.url}\n\n──────────────────────\n`
            }
            mans.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
            break
            case 'nowplayingbioskop': {
            let res = await fetchJson(api('zenz', '/webzone/nowplayingbioskop', {}, 'apikey'))
            let capt = `Now Playing Bioskop\n\n`
            for (let i of res.result){
            capt += ` Title: ${i.title}\n`
            capt += ` Url: ${i.url}\n`
            capt += ` Img Url: ${i.img}\n\n──────────────────────\n`
            }
            mans.sendImage(m.chat, res.result[0].img, capt, m)
            }
            break
            case 'aminio': {
            if (!text) return m.reply(`Example: ${prefix + command} free fire`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/amino?query=${text}&apikey=hdiiofficial`)
            let capt = `Amino Search From : ${text}\n\n`
            for (let i of res.result){
            capt += ` Community: ${i.community}\n`
            capt += ` Community Link: ${i.community_link}\n`
            capt += ` Thumbnail: ${i.community_thumb}\n`
            capt += ` Description: ${i.community_desc}\n`
            capt += ` Member Count: ${i.member_count}\n\n──────────────────────\n`
            }
            mans.sendImage(m.chat, 'https://'+res.result[0].community_thumb, capt, m)
            }
            break
            case 'wattpad': {
            if (!text) return m.reply(`Example : ${prefix + command} love`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/wattpad?query=$text}&apikey=hdiiofficial`)
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From query\n\n`
            capt += ` Judul: ${judul}\n`
            capt += ` Dibaca: ${dibaca}\n`
            capt += ` Divote: ${divote}\n`
            capt += ` Bab: ${bab}\n`
            capt += ` Url: ${url}\n`
            capt += ` Deskripsi: ${description}`
            mans.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'webtoons': {
            if (!text) return m.reply(`Example : ${prefix + command} love`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/webtoons?query=${text}&apikey=hdiiofficial`)
            let capt = `Webtoons Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += ` Judul: ${i.judul}\n`
            capt += ` Like: ${i.like}\n`
            capt += ` Creator: ${i.creator}\n`
            capt += ` Genre: ${i.genre}\n`
            capt += ` Url: ${i.url}\n\n──────────────────────\n`
            }
            m.reply(capt)
            }
            break
            case 'drakor': {
            if (!text) return m.reply(`Example : ${prefix + command} love`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/drakor?query=${text}&apikey=hdiiofficial`)
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⭔ Judul: ${i.judul}\n`
            capt += `⭔ Years: ${i.years}\n`
            capt += `⭔ Genre: ${i.genre}\n`
            capt += `⭔ Url: ${i.url}\n`
            capt += `⭔ Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
            }
            mans.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break
case 'bj':case 'ero':case 'cum':case 'feet':case 'yuri':case 'trap':case 'lewd':case 'feed':case 'eron':case 'solo':case 'gasm':case 'poke':case 'anal':case 'holo':case 'tits':case 'kuni':case 'kiss':case 'erok':case 'smug':case 'baka':case 'solog':case 'feetg':case 'lewdk':case 'pussy':case 'femdom':case 'cuddle':case 'eroyuri':case 'cum_jpg':case 'blowjob':case 'erofeet':case 'holoero':case 'erokemo':case 'fox_girl':case 'futanari':case 'lewdkemo':case 'pussy_jpg':case 'kemonomimi':case 'nsfw_avatar': 
	
	    buffer = `http://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkey}`
                    mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
    break
case 'cry':	anu = `http://api.lolhuman.xyz/api/random/cry?apikey=${lolkey}`
fakey(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'kiss3':	
anu = `http://api.lolhuman.xyz/api/random/kiss?apikey=${lolkey}`
fakey(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'kiss2':	
anu = `http://api.lolhuman.xyz/api/random2/kiss?apikey=${lolkey}`
fakey(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'cringe':
		anu = `http://api.lolhuman.xyz/api/random/cringe?apikey=${lolkey}`
fakey(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'dance':	
anu = `http://api.lolhuman.xyz/api/random/dance?apikey=${lolkey}`
fakey(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'kill':	
anu = `http://api.lolhuman.xyz/api/random/kill?apikey=${lolkey}`
fakey(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'happy':	
anu = `http://api.lolhuman.xyz/api/random/happy?apikey=${lolkey}`
fakey(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'patrick':	
anu = `http://api.lolhuman.xyz/api/sticker/patrick?apikey=${lolkey}`
fakey(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'bonk':	
anu = `http://api.lolhuman.xyz/api/random/bonk?apikey=${lolkey}`
fakey(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'smug2':	
anu = `http://api.lolhuman.xyz/api/random/smug?apikey=${lolkey}`
fakey(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'slap':	
anu = `http://api.lolhuman.xyz/api/random/slap?apikey=${lolkey}`
fakey(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'wave':	
anu = `http://api.lolhuman.xyz/api/random/wave?apikey=${lolkey}`
fakey(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'smile':	
anu = `http://api.lolhuman.xyz/api/random/smile?apikey=${lolkey}`
fakey(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'bully':
		anu = `http://api.lolhuman.xyz/api/random/bully?apikey=${lolkey}`
fakey(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.packname2 })
break
case 'art':case 'bts':case 'exo':case 'elf':case 'loli':case 'neko':case 'shota':case 'sagiri':case 'shinobu':case 'megumin':case 'wallnime':   

  buffer = `http://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`
    mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
    break
case 'blowjob':
case 'yaoi':
case 'ecchi':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animethighss':
case 'animearmpits':
case 'lewdanimegirls':
case 'biganimetiddies':
case 'animebellybutton': 
 buffer = `http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'naruto':
case 'minato':
case 'boruto':
case 'hinata':
case 'sasuke':
case 'sakura':
case 'kaneki':
case 'toukachan':
case 'rize':
case 'akira':
case 'itori':
case 'kurumi':
case 'miku':
fakey(mess.wait)
nye = `http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=${command}`
mans.sendMessage(from, {image:{url:nye}, caption:"Done!"}, {quoted:m})
break			
// akhir fitur anime
case 'anjing':
nye = `http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=anjing`
fakey(mess.wait)
mans.sendMessage(from, {image:{url:nye}, caption:"Done!"}, {quoted:m})
break			
// Eval Ada Disini
default:
if (budy.startsWith('=>')) {
if (!isCreator) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
mans.sendMessage(from, {image:err4r, caption:String(e)}, {quoted:m})
}
}
if (budy.startsWith('>')) {
if (!isCreator) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await mans.sendMessage(from, {image:err4r, caption:String(err)}, {quoted:m})
}
}

if (budy.startsWith('$')) {
if (!isCreator) return m.reply(mess.owner)
console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mEXEE\x1b[1;37m]', time, color(`Exe Dari Owner Awog 🗿`, 'cyan'))
exec(budy.slice(2), (err, stdout) => {
if(err) return mans.sendMessage(from, {image:err4r, caption:String(err)}, {quoted:m})
if (stdout) return m.reply(stdout)
})
}
// Anti Tag ( FenZo||77+ )
const listTag = ["6281523940672@s.whatsapp.net"]
const partiNum = (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.contextInfo.participant : ''
// Antitag Via Reply ( FenZo||77+ )
if (listTag.includes(partiNum)) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
sendNye = 'https://uploader.caliph.my.id/file/Hxf936tvPc.webp'
mans.sendReadReceipt(m.chat, m.sender, [m.key.id])
mans.sendImageAsSticker(m.chat, `https://uploader.caliph.my.id/file/Hxf936tvPc.webp`, m, {packname: packname, author: author})
}
// Antitag Via Tag ( FenZo||77+ )
if (budy.includes("@6281523940672")) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
mans.sendReadReceipt(m.chat, m.sender, [m.key.id])
mans.sendImageAsSticker(m.chat, `https://uploader.caliph.my.id/file/Hxf936tvPc.webp`, m, {packname: packname, author: author})
}
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
mans.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
} catch (err) {
mans.sendMessage("6281523940672@s.whatsapp.net", util.format(err), {quoted:m})
console.log(err)
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})