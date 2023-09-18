import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RiRobot2Fill } from 'react-icons/ri';
import { BiUser } from 'react-icons/bi';
import '../css/ChatLayout.css';

const ConversationPage = () => {
    const conversation = useSelector(state => state.chat.conversation)

    return (
        <section className="chat-wrapper">
            <div className="chat-messages">
                <div className="chat-message">
                    {conversation && conversation.map(({ question, answer }, i) => (
                        <div key={i} className="message-bubble">
                            <div className="question message-wrapper">
                                <p><BiUser /></p>
                                <p>{question}</p>
                            </div>
                            {answer && (
                                <div className="answer message-wrapper">
                                    <p> <RiRobot2Fill /> :</p>
                                    <p>{answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ConversationPage;