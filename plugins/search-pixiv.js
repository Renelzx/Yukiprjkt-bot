import fetch from "node-fetch";
import db from "../lib/database.js";

let handler = async (m, { conn, args, usedPrefix, command }) => {
	conn.pixiv = conn.pixiv ? conn.pixiv : {};
	if (m.sender in conn.pixiv)
		return m.reply("Tunggu Sebentar Sebelum Menggunakannya Kembali...");
	if (!args[0]) return m.reply(`Mau Cari Apa?`);
	try {
		const result = await fetch(
			API("rose", "/searching/pixiv", {
				query: args[0],
				mode: "search",
				r18: 1,
				random: 1,
			}, "apikey")
		);
		const json = await result.json();
		if (json.status == false) return m.reply(`${json.message} `);
		await conn.sendMessage(m.chat, { image: { url: json.url }, caption: `Title: _${json.title}_\nAuthor : ${json.author}` }, m)
	} catch {
		m.reply("Waduh server nya error :(");
	} finally {
		delete conn.pixiv[m.sender];
	}
};
handler.command = ["pixiv"];
handler.help = ["pixiv"];
handler.tags = ["search"];

handler.premium = false

export default handler;