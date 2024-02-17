import {
    MultiChatSocket,
    MultiChatWindow,
    useMultiChatLogic,
  } from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '0dcffb5f-b207-4a99-90a3-01fca775144f',
        props.user.username,
        props.user.secret
      );
  return (
    <div className="background" style={{height:'100vh'}}>
       <MultiChatWindow {...chatProps} />
      <MultiChatSocket {...chatProps} style={{ height: '100%'}} />
      
    </div>
  );
};

export default ChatsPage;