import db from "../lib/database.js";

let handler = async (m, { conn, usedPrefix, command }) => {
		let url = `http://storage.itsrose.my.id/lewd/${gr() + ".png"}`
		conn.sendMessage(m.chat, { image: { url: url }, caption: 'Nih Kak'}, m)
};
handler.help = ["lewd"];
handler.tags = ["nsfw"];
handler.command = ["lewd"];

handler.premium = true

export default handler;
function gr() {
	return Math.floor(Math.random() * 400) + 10;
}
