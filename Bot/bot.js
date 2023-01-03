const { Telegraf } = require("telegraf");
const TOKEN = "5803840458:AAFWg02EyFtzzbGHtuPWnDSMwoM3bxsJN_8";
const bot = new Telegraf(TOKEN);

const web_link = "https://de-meta.netlify.app/";

bot.start((ctx) =>
    ctx.reply("Welcome to online shop Device Meta you can buy same device in web app and pay with card have a good day", {
        reply_markup: {
            inline_keyboard : [[{ text: "Demeta Site", web_app: { url: web_link } }]],
        },
    })
);


bot.launch();
