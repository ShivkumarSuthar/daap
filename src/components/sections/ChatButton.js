import { FaWhatsapp } from "react-icons/fa";

const ChatButton = () => {
  return (
    <a
      href="https://wa.me/6377290604" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="chat-button"
    >
      <FaWhatsapp size={34} />
    </a>
  );
};

export default ChatButton;
