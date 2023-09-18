const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.post('/:userId', chatController.saveChat);

router.get('/:userId', chatController.getUserChats);

router.get('/:userId/:chatId', chatController.getConversationByChatId);

router.delete('/:userId/:chatId', chatController.deleteChat);

router.put('/conversation/:userId/:chatId', chatController.cleanConversation);

router.put('/:userId/:chatId', chatController.updateChat)


module.exports = router;
