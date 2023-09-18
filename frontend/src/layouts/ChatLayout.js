import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import '../css/ChatLayout.css';
import { IoIosSend } from 'react-icons/io';
import { BsLayoutSidebarReverse } from 'react-icons/bs'
import SidebarChats from '../components/SidebarChats';
import { useNavigate, Outlet, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentChat, setConversation, setChats } from '../features/chatSlice';

const ChatLayout = () => {
  const navigate = useNavigate();
  const { chatId } = useParams();
  const dispatch = useDispatch();

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [showSidebar, setShowSidebar] = useState(true);
  const userId = localStorage.getItem('userId');
  const currentChat = useSelector(state => state.chat.currentChat)
  const chats = useSelector(state => state.chat.chats)
  const openAiApi = process.env.REACT_APP_OPEN_AI_KEY;
  const openAiOrgApi = process.env.REACT_APP_OPENAI_ORGANIZATION;

  const lastChat = useMemo(() => chats.length && !chatId ? chats.reduce((prev, current) => (prev && prev.updateAt > current.updateAt) ? prev : current) : null, [chats])

  useEffect(() => {
    dispatch(setCurrentChat(chatId))
    return () => { }
  }, [chatId])

  useEffect(() => {
    if (lastChat) navigate(`/chat/${lastChat._id}`);
  }, [lastChat])

  useEffect(() => {
    // Verifica si chatId existe antes de realizar las solicitudes
    if (chatId) {
      dispatch(setCurrentChat(chatId));
      getChatConversation();
    }
  }, [chatId]);

  useEffect(() => {
    getChatMessages();
  }, []);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const sendQuestion = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/v1/gpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openAiApi} `,
          'OpenAI-Organization': openAiOrgApi
        },
        body: JSON.stringify({ query: question })
      });

      if (response.ok) {
        const answer = await response.text();

        setAnswer(answer);
        saveChat(question, answer);
        setQuestion('');
      } else {
        console.error('Error en la solicitud:', response.status);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };
  const saveChat = async (question, answer) => {
    try {
      const chatData = {
        conversation: [{ question, answer }]
      };

      let response;

      response = await axios.put(`http://localhost:8000/chat/${userId}/${chatId}`, chatData);

      if (response.status === 200 || response.status === 201) {

        getChatMessages();
        getChatConversation();
        setQuestion('');

      } else if (response.status === 404) {
        console.error('Chat no encontrado.');
      } else {
        console.error('Error al guardar el chat:', response.statusText);
      }
    } catch (error) {
      console.error('Error al guardar el chat:', error);
    }
  };

  const getChatMessages = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8000/chat/${userId}`, {
        token: localStorage.getItem
      });
      dispatch(setChats(data));
    } catch (error) {
      console.error('Error al obtener la lista de chats:', error);
    }
  };

  const getChatConversation = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8000/chat/${userId}/${chatId}`);

      dispatch(setConversation(data))
    } catch (error) {
      console.error('Error al obtener la conversación:', error);
    }
  }
  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <div className="toggle-sidebar-container">
        <button
          className={`toggle-sidebar-button ${showSidebar ? 'move-right' : ''}`}
          onClick={handleToggleSidebar}
        >
          <BsLayoutSidebarReverse />
        </button>
        <div className="chat-layout">
          <SidebarChats showSidebar={showSidebar} getChatMessages={getChatMessages} />
          <div className="container">
            <h1>Chat GPT</h1>
            <Outlet />
            <footer className="chat-footer">
              <div className="textarea-container">
                <div className="textarea-button-container">
                  <div className="textarea-wrapper">
                    <input
                      type="text"
                      placeholder="Send question"
                      value={question}
                      onChange={handleQuestionChange}
                    />
                    <button className="send-button" onClick={sendQuestion}>
                      <IoIosSend />
                    </button>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatLayout;