import { FC, MouseEvent, useState } from 'react'

import Image from 'public/Image.svg'
import Emotiocon from 'public/emoticon.svg'

import { Container } from '@/styles/homestyle'
import { 

    Aside,
    MenuHeader,
    MenuMain,
    MenuTitle,
    MenuArea,
    MenuItem,
    MenuFooter,
    MenuUserItem,
    UserImage,
    UserText,

    Chat,
    ChatHeader,
    ChatMain,
    ChatArea,
    ChatItem,
    DateItem,
    DateSpan,
    UserSpan,
    BallonUser,
    BallonSelf,
    ChatFooter,
    FooterArea,
    FooterIcon,
    MessageBox,
    MessageInput

} from '@/styles/chatStyle'
import { Inter, Noto_Sans_KR } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] }) ;
const notoKr = Noto_Sans_KR({ 
    weight: ['400', '500', '700'],
    subsets: ['latin']
}) ;

interface Props {
    onClickModalDisplay : Function
}

interface ChatData {
    role : string,
    message : string,
    time : Date,
    userName : string
}

// "/chat" Contents
const ChatContainer : FC<Props> = ( { onClickModalDisplay } ) => {

    // 서버로 부터 받은 데이터
    const [chatData, setChatData] = useState<Array<ChatData>>([
        { role :'user', message :'안녕 난 김희수야', time : new Date(), userName : "Lee" },
        { role :'self', message :'안녕 이건 내가 보낸 챗이야', time : new Date(), userName : "Kim" },
        { role :'gpt', message :'안녕하세요 저는 gpt입니다', time : new Date(), userName : "GPT" },
    ])

    // 사용자가 입력창에 입력한 데이터
    const [ inputMessage, setInputMessage ] = useState<string>('') ;

    return (
        <Container>
            <Aside
                className = { inter.className }
            >
                <MenuHeader></MenuHeader>
                <MenuMain>
                    <MenuTitle>
                        Menu
                    </MenuTitle>
                    <MenuArea>
                        <MenuItem
                            onClick = { onClickModalDisplay }
                        >Invitation</MenuItem>
                        <MenuItem>Help</MenuItem>
                    </MenuArea>
                </MenuMain>
                <MenuFooter>
                    <MenuTitle>
                        Participant
                    </MenuTitle>
                    <MenuArea>
                        <MenuItem>
                            <MenuUserItem>
                                <UserImage 
                                    src = "" 
                                    alt = "User image" 
                                    width = "25px"
                                    height = "25px" 
                                />
                                <UserText>Me</UserText>
                            </MenuUserItem>
                        </MenuItem>
                        <MenuItem>
                            <MenuUserItem>
                                <UserImage 
                                    src = "" 
                                    alt = "User image" 
                                    width = "25px"
                                    height = "25px" 
                                />
                                <UserText>Lee</UserText>
                            </MenuUserItem>
                        </MenuItem>
                    </MenuArea>
                </MenuFooter>
            </Aside>
            <Chat>
                <ChatHeader>
                    <MenuUserItem>
                        <UserImage 
                            src = "" 
                            alt = "User image" 
                            width = "30px"
                            height = "30px" 
                        />
                        <UserText
                            style = {{
                                marginLeft : "10px",
                                fontWeight : "700"
                            }}
                        >Kim</UserText>
                    </MenuUserItem>
                </ChatHeader>
                <ChatMain>
                    {
                        chatData.map((item, i)=>{
                            const { role, message, time, userName } = item ;
                            // TODO role에 따른 if문 추가하기. role 인자로 주는건 빼도될듯
                            if( role === 'self' ) {
                                return(
                                    <ChatArea role={role}>
                                        <ChatItem>
                                            <BallonSelf>{message}</BallonSelf>
                                            <DateItem role={role}>
                                                <UserSpan>{ userName }</UserSpan>
                                                <DateSpan>{ `${time.getMonth() + 1}.${time.getDate()} at ${time.getHours()} : ${time.getMinutes()}` }</DateSpan>
                                            </DateItem>
                                        </ChatItem>
                                    </ChatArea>
                                ) ;
                            }else {
                                return(
                                    <ChatArea role={role}>
                                        <ChatItem>
                                            <BallonUser>{message}</BallonUser>
                                            <DateItem role={role}>
                                                <UserSpan>{ userName }</UserSpan>
                                                <DateSpan>{ `${time.getMonth() + 1}.${time.getDate()} at ${time.getHours()} : ${time.getMinutes()}` }</DateSpan>
                                            </DateItem>
                                        </ChatItem>
                                    </ChatArea>
                                ) ;
                            }
                        })
                    }
                </ChatMain>
                <ChatFooter>
                    <FooterArea>
                        <FooterIcon 
                            src = { Image } 
                            alt = "Image icon" 
                            width = "20px"
                            height = "20px" 
                        />
                        <MessageBox>
                            {/* input 데이터 받아서 채팅 작성 */}
                            <MessageInput 
                                placeholder = "Message"
                                value = {inputMessage}
                                onChange={ (e) => setInputMessage(e.target.value) }
                                onKeyDown={ (e) => {
                                    if (e.key === 'Enter') {
                                        const tempChatData = [...chatData]
                                        tempChatData.push({role:'self', message:inputMessage, time: new Date(), userName : "Kim"})
                                        setChatData(tempChatData)
                                        setInputMessage('')
                                      }
                                }}
                            />
                            <FooterIcon 
                                src = { Emotiocon } 
                                alt = "Emotiocon icon" 
                                width = "20px"
                                height = "20px" 
                            />
                        </MessageBox>
                    </FooterArea>
                </ChatFooter>
            </Chat>
        </Container>
    );
}

export default ChatContainer ;