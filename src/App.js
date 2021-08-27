
import './App.css'; 
import { ChatEngine } from 'react-chat-engine';  
import ChatFeed from './components/ChatFeed.jsx'; 
import LoginForm from './components/LoginForm.jsx'; 

const App = () => { 
  if(!localStorage.getItem('username')) return <LoginForm />

  return ( 
    <ChatEngine  
      height="100vh" 
      projectID="6915e93f-c4c7-4f17-8086-b69d87ae8017" 
      userName= "Ryan" 
      userSecret= "123123" 
      renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps }/>} />
  );
}

export default App;
