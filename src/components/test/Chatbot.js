import CabeceraChatbot from "./CabeceraChatbot";
import SidebarChatbot from "./SidebarChatbot";

const Chatbot = () => {
    return (
      <div className='flex px-20 py-14 h-screen'>
	<SidebarChatbot />
        <div className="block w-full h-full bg-red-400">
          <CabeceraChatbot />
          <div className='bg-red-300 m-auto'></div>
        </div>
      </div>
    ); 
}
export default Chatbot;
