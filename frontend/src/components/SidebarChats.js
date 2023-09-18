import React, { useState } from 'react';
import axios from 'axios';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import ChatList from './ChatList';
import ChatEditor from './ChatEditor';
import '../css/SidebarChats.css';
import { AiOutlinePlus } from 'react-icons/ai';

const SidebarChats = ({
  showSidebar,
  onSaveChatTitle,
  getChatMessages
}) => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [selectedChat, setSelectedChat] = useState(null);

  const chats = useSelector(state => state.chat.chats);

  const handleEditTitle = (chatId) => {
    const chat = chats.find((chat) => chat._id === chatId);
    setEditedTitle(chat.title);
    setIsEditingTitle(chatId);
  };

  const handleSaveTitle = (chatId) => {
    onSaveChatTitle(chatId, editedTitle);
    setIsEditingTitle(false);
  };

  const onSelectChat = (chatId) => navigate(`/chat/${chatId}`)

  const onCreateNewChat = async () => {
    try {
      // Hacer una solicitud POST al servidor para crear una nueva conversación
      const response = await axios.post(`http://localhost:8000/chat/${userId}`);
      getChatMessages()
    } catch (error) {
      console.error('Error al crear una nueva conversación:', error);
    }
  }

  return (
    <div className={`sidebar ${showSidebar ? '' : 'hidden'}`}>
      <button className='create-chat-button' onClick={onCreateNewChat}> <AiOutlinePlus /> New Chat</button>
      <div className="sidebar-content">
        <ChatList chats={chats} onSelectChat={onSelectChat} getChatMessages={getChatMessages} />
        <div className="chat-titles">

        </div>
        {selectedChat && (
          <ChatEditor
            selectedChat={selectedChat}
            onSaveChat={onSaveChatTitle}
          />
        )}
      </div>
    </div>
  );
};

export default SidebarChats;
