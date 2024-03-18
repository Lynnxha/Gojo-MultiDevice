let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender];
  conn.reply(m.chat, `*Done Mengirim EXP 9999999 Ke Akunmu<*`, m);
  global.db.data.users[m.sender].exp = 9999999;
};
handler.command = /^(unlic)$/i;
handler.owner = true;

module.exports = handler;
