/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');
const exec = require('child_process').exec;
const Language = require('../language');
const Lang = Language.getString('conventer');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'xmedia', fromMe: true, desc: Lang.XMEDİA_DESC}, (async (message, match) => {  
        await message.sendMessage('💻Usage: *.mp4enhance*\nℹ️Desc: Meningkatkan Kualitas Video.\n\n💻Usage: *.interp*\nℹ️Desc: Meningkatkan FPS Video.\n\n💻Usage: *.mp4slowmo*\nℹ️Desc: Menerapkan Video Jadi slowmo.\n\n💻Usage: *.x4mp4*\nℹ️Desc: Mengurangi Kulitas Video Sebesar 75%.\n\n💻Usage: *.x2mp4*\nℹ️Desc: Mengurangi Kulitas video sebesar 50%.\n\n💻Usage: *.gif*\nℹ️Desc: konverts video jadi gif.\n\n💻Usage: *.agif*\nℹ️Desc: Mengubah video untuk menyuarakan gif.\n\n💻Usage: *.mp4blur*\nℹ️Desc: Blur di dilatar belakang video.\n\n💻Usage: *.mp4stab*\nℹ️Desc: Mengurangi Getaran Video Tau stabilizer.\n\n💻Usage: *.mp4rainbow*\nℹ️Desc: Menerapkan efek pelangi ke video.\n\n💻Usage: *.mp4color*\nℹ️Desc: Membuat warna video jadi jelas dan indah.\n\n💻Usage: *.mp4art*\nℹ️Desc: Menerapkan seni ke video.\n\n💻Usage: *.mp4negative*\nℹ️Desc: Menerapkan filter negatif ke video.\n\n💻Usage: *.mp4vintage*\nℹ️Desc: Menerapkan nostalgia ke video.\n\n💻Usage: *.mp4bw*\nℹ️Desc: Menerapkan efek monokrom ke video.\n\n💻Usage: *.mp4reverse*\nℹ️Desc: Memutar video secara balik.\n\n💻Usage: *.mp4edge*\nℹ️Desc: Menerapkan efek tepi ke video.\n\n💻Usage: *.mp4image*\nℹ️Desc: Conversi Foto ke video 5 detik .\n\n💻Usage: *.spectrum*\nℹ️Desc: Conversi .spektrum suara ke video.\n\n💻Usage: *.waves*\nℹ️Desc: Conversi rentang glombang suara ke video.\n\n💻Usage: *.frequency*\nℹ️Desc: Mengubah rentang ferkuensi Suara ke video.\n\n💻Usage: *.avec*\nℹ️Desc: Mengubah historgram Suara ke video.\n\n💻Usage: *.volumeaudio*\nℹ️Desc: Mengubah nilai desibel suara ke video.\n\n💻Usage: *.cqtaudio*\nℹ️Desc: conversi nilai CQT audio ke vodeo.\n\n💻Usage: *.mp3eq*\nℹ️Desc: Menyesuaikan Suara ke tingkat yg jelas .\n\n💻Usage: *.mp3crusher*\nℹ️Desc: Mendistori suara menjadi suara konyol.\n\n💻Usage: *.mp3reverse*\nℹ️Desc: Memainkan suara secara terbalik.\n\n💻Usage: *.mp3pitch*\nℹ️Desc: Membuat suara lebih tipis dan cepat.\n\n💻Usage *.mp3low*\nℹ️Desc: Membuat suara dalam dan lambat.\n\n💻Usage: *.x2mp3*\nℹ️Desc: Membuat suara dua kali lebih cepat.\n\n💻Usage: *.mp3volume*\nℹ️Desc: Menyadikan suara banyak.\n\n💻Usage: *.bwimage*\nℹ️Desc: Menerapkan efek monkrom terhadap gambar.\n\n💻Usage: *.vintageimage*\nℹ️Desc: Menerapkan efek vintage ke video.\n\n💻Usage: *.edgeimage*\nℹ️Desc: Menerapkan efek tepi ke foto.\n\n💻Usage: *.enhanceimage*\nℹ️Desc: Membuat foto lebih jelas.\n\n💻Usage: *.blurimage*\nℹ️Desc: Blur latar belakang.\n\n💻Usage: *.grenimage*\nℹ️Desc: Menerapkan efek biji bijian ke foto.\n\n💻Usage: *.negativeimage*\nℹ️Desc: Menrapkan filter negatif ke foto.\n\n💻Usage: *.rainbowimage*\nℹ️Desc: Meberapkan efek pelangi ke foto.\n\n💻Usage: *.colorimage*\nℹ️Desc: Membuat foto lebih jelas dan menarik.\n\n💻Usage: *.artimage*\nℹ️Desc: Menerapkan efek gambar ke poto.\n\n\nFOLLOW IG :@4anto0\nSUB YT SAYA : https://youtube.com/c/AlmostFamous1');
    }));

    Asena.addCommand({pattern: 'x4mp4', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message.video) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .withSize('25%')
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'x2mp4', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message.video) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
           },
            message: message.reply_message.data.quotedMessage
        });

       ffmpeg(location)
            .withSize('50%')
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp4image', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message.image) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .loop(6)
            .fps(19)
            .videoBitrate(400)
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'spectrum', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showspectrum=s=720x1280,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'waves', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showwaves=s=720x1280:mode=cline:rate=25,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'frequency', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .outputOptions(["-y", "-filter_complex", "[0:a]showfreqs=s=720x1280:mode=cline:fscale=log,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
                .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'avec', fromMe: true, dontAddCommandList: true}, (async (message, match) => {   
 
        if (!message.reply_message) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]avectorscope=s=720x1280:rf=5:gf=25:bf=5:draw=line,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'volumeaudio', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showvolume=f=1:b=4:w=720:h=68,format=yuv420p[vid]", "-map", "[vid]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'cqtaudio', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showcqt=s=1280x720,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp3eq', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "superequalizer=1b=10:2b=10:3b=1:4b=5:5b=7:6b=5:7b=2:8b=3:9b=4:10b=5:11b=6:12b=7:13b=8:14b=8:15b=9:16b=9:17b=10:18b=10[a];[a]loudnorm=I=-16:TP=-1.5:LRA=14", "-ar 48k"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp3crusher', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp3reverse', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "areverse"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp4vintage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=vintage,format=yuv420p"])
            .fps(22)
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp4reverse', fromMe: true, dontAddCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "reverse", "-af", "areverse"])
            .format('mp4')
            .fps(22)
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp4bw', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "hue=s=0"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'bwimage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "hue=s=0"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'});
        });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'vintageimage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=vintage"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp4enhance', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "unsharp=3:3:1.5"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'blurimage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp4blur', fromMe: true, dontAddCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-vf", "split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp3pitch', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "asetrate=44100*1.3"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp4edge', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Edging Video..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-codec:v", "mpeg4", "-filter:v", "edgedetect=low=0.9:high=0.3"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp3low', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "asetrate=44100*0.9"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'x2mp3', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:a", "atempo=2.0", "-vn"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'edgeimage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo*');
        var downloading = await message.client.sendMessage(message.jid,'```Edging Image..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:v", "edgedetect=low=0.9:high=0.2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'enhanceimage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "unsharp=3:3:1.5"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp3volume', fromMe: true, dontAddCommandList: true}, (async (message, match) => { 
   
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:a", "volume=5.3"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    })); 

    Asena.addCommand({pattern: 'gif', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('Need Video!');
        var downloading = await message.client.sendMessage(message.jid,'```Converting to Gif..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .noAudio()
            .fps(13)
            .videoBitrate(500)
            .save('output_gif.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output_gif.mp4'), MessageType.video, {mimetype: Mimetype.gif, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'agif', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('Need Video!');
        var downloading = await message.client.sendMessage(message.jid,'```Converting to Gif..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .fps(13)
                .videoBitrate(500)
                .save('output_gif.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output_gif.mp4'), MessageType.video, {mimetype: Mimetype.gif, caption: 'Made by WhatsAsena'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'grenimage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {   

        if (message.reply_message === false) return await message.sendMessage('Need Photo!');
        var downloading = await message.client.sendMessage(message.jid,'```Adding Gren..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .videoFilters('noise=alls=100:allf=t+u')
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'interp ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message.video) return await message.sendMessage('*Need Video and FPS Value!*\nEx: ```.interp 100```');
        if (message.reply_message.video && match[1] <= 10) return await message.sendMessage('*Low FPS Value ⚠️*\n*Please, type over 10*');
        if (message.reply_message.video && match[1] >= 500) return await message.sendMessage('*High FPS Value ⚠️*\n*Please, type under 500*')
   
        var downloading = await message.client.sendMessage(message.jid,'```Interpolating..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        await message.sendMessage('_This process may take a while.._');

        ffmpeg(location)
            .videoFilters(`minterpolate=fps=${match[1]}:mi_mode=mci:me_mode=bidir`)
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: `Made by WhatsAsena\n_Interpolated to ${match[1]} FPS_`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'rainbowimage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)"])
            .videoFilters('eq=brightness=0.5')
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp4rainbow', fromMe: true, dontAddCommandList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)", "-pix_fmt yuv420p"])
            .videoFilters('eq=brightness=0.5')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'negativeimage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=color_negative"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp4negative', fromMe: true, dontAddCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=color_negative,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp4art', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
    ffmpeg(location)
            .outputOptions(["-y", "-vf", "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'artimage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp4stab', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "deshake,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp4color', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "eq=contrast=1.3:saturation=1.5:brightness=-0.1,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'colorimage', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "eq=contrast=1.3:saturation=1.5:brightness=-0.1"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp4slowmo', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message.video) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Motion Render Interpolating..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        await message.client.sendMessage(message.jid, '_This process may take a while.._', MessageType.text);

        ffmpeg(location)
            .videoFilters('minterpolate=fps=120')
            .videoFilters('setpts=4*PTS')
            .noAudio()
            .format('mp4')
            .save('slowmo.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('slowmo.mp4'), MessageType.video, {caption: 'True Slow-Motion by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'xmedia', fromMe: false, desc: Lang.XMEDİA_DESC}, (async (message, match) => {    

        await message.sendMessage('💻Usage: *.mp4enhance*\nℹ️Desc: Meningkatkan Kualitas Video.\n\n💻Usage: *.interp*\nℹ️Desc: Meningkatkan FPS Video.\n\n💻Usage: *.mp4slowmo*\nℹ️Desc: Menerapkan Video Jadi slowmo.\n\n💻Usage: *.x4mp4*\nℹ️Desc: Mengurangi Kulitas Video Sebesar 75%.\n\n💻Usage: *.x2mp4*\nℹ️Desc: Mengurangi Kulitas video sebesar 50%.\n\n💻Usage: *.gif*\nℹ️Desc: konverts video jadi gif.\n\n💻Usage: *.agif*\nℹ️Desc: Mengubah video untuk menyuarakan gif.\n\n💻Usage: *.mp4blur*\nℹ️Desc: Blur di dilatar belakang video.\n\n💻Usage: *.mp4stab*\nℹ️Desc: Mengurangi Getaran Video Tau stabilizer.\n\n💻Usage: *.mp4rainbow*\nℹ️Desc: Menerapkan efek pelangi ke video.\n\n💻Usage: *.mp4color*\nℹ️Desc: Membuat warna video jadi jelas dan indah.\n\n💻Usage: *.mp4art*\nℹ️Desc: Menerapkan seni ke video.\n\n💻Usage: *.mp4negative*\nℹ️Desc: Menerapkan filter negatif ke video.\n\n💻Usage: *.mp4vintage*\nℹ️Desc: Menerapkan nostalgia ke video.\n\n💻Usage: *.mp4bw*\nℹ️Desc: Menerapkan efek monokrom ke video.\n\n💻Usage: *.mp4reverse*\nℹ️Desc: Memutar video secara balik.\n\n💻Usage: *.mp4edge*\nℹ️Desc: Menerapkan efek tepi ke video.\n\n💻Usage: *.mp4image*\nℹ️Desc: Conversi Foto ke video 5 detik .\n\n💻Usage: *.spectrum*\nℹ️Desc: Conversi .spektrum suara ke video.\n\n💻Usage: *.waves*\nℹ️Desc: Conversi rentang glombang suara ke video.\n\n💻Usage: *.frequency*\nℹ️Desc: Mengubah rentang ferkuensi Suara ke video.\n\n💻Usage: *.avec*\nℹ️Desc: Mengubah historgram Suara ke video.\n\n💻Usage: *.volumeaudio*\nℹ️Desc: Mengubah nilai desibel suara ke video.\n\n💻Usage: *.cqtaudio*\nℹ️Desc: conversi nilai CQT audio ke vodeo.\n\n💻Usage: *.mp3eq*\nℹ️Desc: Menyesuaikan Suara ke tingkat yg jelas .\n\n💻Usage: *.mp3crusher*\nℹ️Desc: Mendistori suara menjadi suara konyol.\n\n💻Usage: *.mp3reverse*\nℹ️Desc: Memainkan suara secara terbalik.\n\n💻Usage: *.mp3pitch*\nℹ️Desc: Membuat suara lebih tipis dan cepat.\n\n💻Usage *.mp3low*\nℹ️Desc: Membuat suara dalam dan lambat.\n\n💻Usage: *.x2mp3*\nℹ️Desc: Membuat suara dua kali lebih cepat.\n\n💻Usage: *.mp3volume*\nℹ️Desc: Menyadikan suara banyak.\n\n💻Usage: *.bwimage*\nℹ️Desc: Menerapkan efek monkrom terhadap gambar.\n\n💻Usage: *.vintageimage*\nℹ️Desc: Menerapkan efek vintage ke video.\n\n💻Usage: *.edgeimage*\nℹ️Desc: Menerapkan efek tepi ke foto.\n\n💻Usage: *.enhanceimage*\nℹ️Desc: Membuat foto lebih jelas.\n\n💻Usage: *.blurimage*\nℹ️Desc: Blur latar belakang.\n\n💻Usage: *.grenimage*\nℹ️Desc: Menerapkan efek biji bijian ke foto.\n\n💻Usage: *.negativeimage*\nℹ️Desc: Menrapkan filter negatif ke foto.\n\n💻Usage: *.rainbowimage*\nℹ️Desc: Meberapkan efek pelangi ke foto.\n\n💻Usage: *.colorimage*\nℹ️Desc: Membuat foto lebih jelas dan menarik.\n\n💻Usage: *.artimage*\nℹ️Desc: Menerapkan efek gambar ke poto.\n\n\nFOLLOW IG :@4anto0\nSUB YT SAYA : https://youtube.com/c/AlmostFamous1');

    }));

    Asena.addCommand({pattern: 'x4mp4', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .withSize('25%')
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'x2mp4', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
           },
            message: message.reply_message.data.quotedMessage
        });

       ffmpeg(location)
            .withSize('50%')
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp4image', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .loop(6)
            .fps(19)
            .videoBitrate(400)
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'spectrum', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showspectrum=s=720x1280,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'waves', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showwaves=s=720x1280:mode=cline:rate=25,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'frequency', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .outputOptions(["-y", "-filter_complex", "[0:a]showfreqs=s=720x1280:mode=cline:fscale=log,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
                .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'avec', fromMe: false, dontAddCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]avectorscope=s=720x1280:rf=5:gf=25:bf=5:draw=line,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'volumeaudio', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showvolume=f=1:b=4:w=720:h=68,format=yuv420p[vid]", "-map", "[vid]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'cqtaudio', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "[0:a]showcqt=s=1280x720,format=yuv420p[v]", "-map", "[v]", "-map 0:a"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp3eq', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "superequalizer=1b=10:2b=10:3b=1:4b=5:5b=7:6b=5:7b=2:8b=3:9b=4:10b=5:11b=6:12b=7:13b=8:14b=8:15b=9:16b=9:17b=10:18b=10[a];[a]loudnorm=I=-16:TP=-1.5:LRA=14", "-ar 48k"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp3crusher', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp3reverse', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter_complex", "areverse"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp4vintage', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=vintage,format=yuv420p"])
            .fps(22)
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp4reverse', fromMe: false, dontAddCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "reverse", "-af", "areverse"])
            .format('mp4')
            .fps(22)
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp4bw', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "hue=s=0"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'bwimage', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "hue=s=0"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'});
        });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'vintageimage', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=vintage"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp4enhance', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "unsharp=3:3:1.5"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'blurimage', fromMe: false, dontAddCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp4blur', fromMe: false, dontAddCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
        ffmpeg(location)
            .outputOptions(["-y", "-vf", "split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2"])
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp3pitch', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "asetrate=44100*1.3"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp4edge', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Edging Video..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-codec:v", "mpeg4", "-filter:v", "edgedetect=low=0.9:high=0.3"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp3low', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-af", "asetrate=44100*0.9"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'x2mp3', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:a", "atempo=2.0", "-vn"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'edgeimage', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo*');
        var downloading = await message.client.sendMessage(message.jid,'```Edging Image..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:v", "edgedetect=low=0.9:high=0.2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'enhanceimage', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Converting..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "unsharp=3:3:1.5"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp3volume', fromMe: false, dontAddCommandList: true}, (async (message, match) => { 
   
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-filter:a", "volume=5.3"])
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    })); 

    Asena.addCommand({pattern: 'gif', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('Need Video!');
        var downloading = await message.client.sendMessage(message.jid,'```Converting to Gif..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .noAudio()
            .fps(13)
            .videoBitrate(500)
            .save('output_gif.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output_gif.mp4'), MessageType.video, {mimetype: Mimetype.gif, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'agif', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('Need Video!');
        var downloading = await message.client.sendMessage(message.jid,'```Converting to Gif..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .fps(13)
                .videoBitrate(500)
                .save('output_gif.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output_gif.mp4'), MessageType.video, {mimetype: Mimetype.gif, caption: 'Made by WhatsAsena'});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'grenimage', fromMe: false, dontAddCommandList: true}, (async (message, match) => {   

        if (message.reply_message === false) return await message.sendMessage('Need Photo!');
        var downloading = await message.client.sendMessage(message.jid,'```Adding Gren..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .videoFilters('noise=alls=100:allf=t+u')
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'interp ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (!message.reply_message.video) return await message.sendMessage('*Need Video and FPS Value!*\nEx: ```.interp 100```');
        if (message.reply_message.video && match[1] <= 10) return await message.sendMessage('*Low FPS Value ⚠️*\n*Please, type over 10*');
        if (message.reply_message.video && match[1] >= 500) return await message.sendMessage('*High FPS Value ⚠️*\n*Please, type under 500*')
   
        var downloading = await message.client.sendMessage(message.jid,'```Interpolating..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        await message.sendMessage('_This process may take a while.._');

        ffmpeg(location)
            .videoFilters(`minterpolate=fps=${match[1]}:mi_mode=mci:me_mode=bidir`)
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {caption: `Made by WhatsAsena\n_Interpolated to ${match[1]} FPS_`});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'rainbowimage', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)"])
            .videoFilters('eq=brightness=0.5')
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp4rainbow', fromMe: false, dontAddCommandList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)", "-pix_fmt yuv420p"])
            .videoFilters('eq=brightness=0.5')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'negativeimage', fromMe: false, dontAddCommandList: true}, (async (message, match) => {  
  
        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=color_negative"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp4negative', fromMe: false, dontAddCommandList: true}, (async (message, match) => {   
 
        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "curves=color_negative,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp4art', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
    
    ffmpeg(location)
            .outputOptions(["-y", "-vf", "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'artimage', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp4stab', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "deshake,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp4color', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "eq=contrast=1.3:saturation=1.5:brightness=-0.1,format=yuv420p"])
            .format('mp4')
            .save('output.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'colorimage', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('*Need Photo!*');
        var downloading = await message.client.sendMessage(message.jid,'```Editing..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .outputOptions(["-y", "-vf", "eq=contrast=1.3:saturation=1.5:brightness=-0.1"])
            .save('output.jpg')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));

    Asena.addCommand({pattern: 'mp4slowmo', fromMe: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message.video === false) return await message.sendMessage('*Need Video!*');
        var downloading = await message.client.sendMessage(message.jid,'```Motion Render Interpolating..```',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        await message.client.sendMessage(message.jid, '_This process may take a while.._', MessageType.text);

        ffmpeg(location)
            .videoFilters('minterpolate=fps=120')
            .videoFilters('setpts=4*PTS')
            .noAudio()
            .format('mp4')
            .save('slowmo.mp4')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('slowmo.mp4'), MessageType.video, {caption: 'True Slow-Motion by WhatsAsena'});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
}
