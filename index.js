const express = require("express");
const app = express();

app.listen(() => console.log("start btrolie"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');

//لا تلعب اي شي في الكود



const prefix = ""
const developers = ""

////////


client.on("message" , message => {
    var args = message.content.split(" ");
    var command = args[0];
    var anum = args[1];
    var tax = 5; // قيمة الضريبة , بالمئة
    if(command == prefix+"tax"){
        if(!anum){
            return message.reply("`"+command+" <number>`");
        }
        var fnum = Math.floor(anum);
        if(fnum < 0 || fnum == NaN || !fnum){
            return message.reply("**يجب ان تكون القيمة صحيحة.**");
        }
        var taxval = Math.floor(fnum*(tax/100));
        var total = Math.floor(fnum-taxval);
        message.channel.send(`
**
المبلغ الأساسي : ${fnum}
الضريبة : ${tax}%
قيمة الضريبة : ${taxval}
المبلغ مع الضريبة : ${total}
**    
        `);
    }
});

client.login("");
