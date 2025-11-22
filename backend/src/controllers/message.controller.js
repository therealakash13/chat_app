export const sendMessage = (req, res) => {
  res.send("Send Message.");
};

export const getMessages = (req, res) => {
  const chatId = req.params.chatId;
  res.send(`Get Message of ${chatId}`);
};
