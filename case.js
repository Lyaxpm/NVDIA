/* 

 * Base Created By Anggazyy
 * Simple base & ringan
 * Versi 1.0
 * Jangan hapus credit ya kaks
*/

const { exec } = require('child_process');
const systeminformation = require('systeminformation');
const os = require('os');
const chalk = require('chalk');
const fs = require('fs')

// disini fungsi memanggil penanganan pesan di index js 
// gua memakai module.exports.handleincomingMessage 
// dia akan memangil di index.js
module.exports.handleIncomingMessage = async (nvdia, msg) => {
    const sender = msg.key.remoteJid;
    const messageType = msg.message.conversation
        ? 'conversation'
        : Object.keys(msg.message)[0];

    let messageContent;

   
    if (messageType === 'conversation') {
        messageContent = msg.message.conversation;
    } else if (messageType === 'extendedTextMessage') {
        messageContent = msg.message.extendedTextMessage.text;
    } else if (messageType === 'imageMessage') {
        messageContent = msg.message.imageMessage.caption || '';
    } else if (messageType === 'videoMessage') {
        messageContent = msg.message.videoMessage.caption || '';
    } else if (messageType === 'documentMessage') {
        messageContent = msg.message.documentMessage.caption || '';
    } else if (messageType === 'stickerMessage') {
        messageContent = '[Sticker]';
    } else if (messageType === 'contactMessage') {
        messageContent = '[Contact]';
    } else {
        messageContent = '';
    }

    // Console message
    console.log(
        chalk.green(`[${new Date().toLocaleTimeString()}]`) + 
        chalk.blue(` Pesan diterima dari `) + chalk.bold(sender) + 
        chalk.yellow(`: "${messageContent}"`) + 
        chalk.magenta(` (Type: ${messageType})`) 
    );

    // Multi-prefix
    const prefixes = ['!', '.', '']; 
    const prefixUsed = prefixes.find((prefix) => messageContent.startsWith(prefix)) || '';
    const command = prefixUsed
        ? messageContent.slice(prefixUsed.length).split(' ')[0].toLowerCase()
        : messageContent.split(' ')[0].toLowerCase();
    const args = prefixUsed
        ? messageContent.slice(prefixUsed.length).split(' ').slice(1)
        : messageContent.split(' ').slice(1);

    
    switch (command) {
        case 'halo':
            await reply(nvdia, msg, 'Halo! Apa kabar?');
            break;
          case 'menu':
          let menuk = `
          Halo! Aku bot *NVDIA*
           • info < info bot >
           • ping < check ping >
           • halo < test bot >`
           nvdia.sendMessage(sender, { text: menuk})
            break;

        case 'info':
            await reply(nvdia, msg, 'Ini adalah bot WhatsApp sederhana dengan multi-prefix!');
            break;

        case 'ping':
            const startTime = Date.now();
            await reply(nvdia, msg, 'Memeriksa status...');
            const uptime = os.uptime();
            const systemInfo = await systeminformation.getStaticData();
            const cpuInfo = systemInfo.cpu;
            const memoryInfo = systemInfo.mem;

            const pingMessage = `
                Pong! 🏓
                Waktu ping: ${Date.now() - startTime}ms
                Uptime: ${formatUptime(uptime)}
                OS: ${os.platform()} ${os.release()}
                CPU: ${cpuInfo.manufacturer} ${cpuInfo.brand} - ${cpuInfo.speed}GHz
            `;
            await reply(nvdia, msg, pingMessage);
            break;

        default:
    }
};


async function reply(nvdia, msg, replyText) {
    if (msg.key && msg.key.remoteJid) {
        await nvdia.sendMessage(msg.key.remoteJid, {
            text: replyText,
            quoted: msg, 
        });
    }
}

function formatUptime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${hours} jam, ${minutes} menit, ${remainingSeconds} detik`;
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})
