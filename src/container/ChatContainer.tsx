import { FC, MouseEvent, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'

import io from 'socket.io-client'

import Image from 'public/Image.svg'
import Emotiocon from 'public/emoticon.svg'
import ChatInput from 'public/chatInput.svg'

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
    BallonGPT,
    GPTSpan,
    MessageButton,
    ChatFooter,
    FooterArea,
    FooterIcon,
    MessageBox,
    MessageInput

} from '@/styles/chatStyle'
import { Roboto, Noto_Sans_KR } from 'next/font/google'

const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'] }) ;
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

    const router = useRouter() ;
    // 서버로 부터 받은 데이터
    const [ chatData, setChatData ] = useState<Array<ChatData>>([]) ;
    const [ cookies, _ ] = useCookies<any>(['member', 'me']) ;
    const [ socket, setSocket ] = useState<any>(undefined) ; 
    const [ members, setMembers ] = useState<Array<any>>([]) ;

    // 사용자가 입력창에 입력한 데이터
    const [ inputMessage, setInputMessage ] = useState<string>('') ;

    useEffect(() => {
        
        if( cookies.me && cookies.member ) {

            // 소켓 서버에 연결
            const socket = io(`http://localhost:3001/gpt-garvis`); // 소켓 서버의 URL로 변경해야 합니다.

            // 연결이 성공했을 때 실행되는 이벤트 핸들러
            socket.on('connect', () => {
                console.log('Socket Connection Success') ;
                // 서버로 데이터 보내기
                const requestData = { roomId : cookies.member.room, memberId : cookies.member.id } ;
                socket.emit('join-request', requestData) ;
            });

            // 유저가 연결됬을때 실행되는 이벤트 핸들러
            socket.on('member-connected', (message) => {
                console.log('Room Join Success Event Data : ', message) ;
                // const requestData = { roomId : cookies.member.room, memberId : cookies.member.id, message : inputMessage } ;
                // socket.emit('message', requestData) ;
            });

            socket.on('message', (data) => {
                console.log("message : ", data) ;
                // setChatData([
                //     ...chatData,
                //     { 
                //         role : "user",
                //         message : data.message,
                //         time : new Date(),
                //         userName : "System"
                //      }
                // ]) ;
            });

            socket.on('command-gpt', (data) => {
                console.log(data) ;
            })

            setSocket(socket) ;

        }
        else {
            router.push('/') ; 
        }

        // 컴포넌트가 언마운트될 때 소켓 연결 종료
        // return () => {
        //     socket.disconnect();
        // };

    }, []) ;

    useEffect(() => {

        const chatMain = document.getElementsByClassName('chat-main')[0] ;

        chatMain.scrollTop = chatMain.scrollHeight ;

    }, [ chatData ]) ;

    return (
        <Container>
            <Aside
                className = { roboto.className }
            >
                <MenuHeader></MenuHeader>
                <MenuMain>
                    <MenuTitle>
                        Menu
                    </MenuTitle>
                    <MenuArea>
                        <MenuItem
                            onClick = { (e : MouseEvent<HTMLElement>) => onClickModalDisplay(e, '') }
                        >Invitation</MenuItem>
                        <MenuItem
                            onClick = { (e : MouseEvent<HTMLElement>) => onClickModalDisplay(e, 'help') }
                        >Help</MenuItem>
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
                                <UserText>{ cookies?.me ? cookies.me : "Not Found" }</UserText>
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
                <ChatMain className = { `${notoKr.className} chat-main` } >
                    {
                        chatData.map((item, i)=>{
                            const { role, message, time, userName } = item ;
                            if( role === 'self' ) {
                                return(
                                    <ChatArea role={role} key={i}>
                                        <ChatItem>
                                            <BallonSelf>{message}</BallonSelf>
                                            <DateItem role={role}>
                                                <UserSpan>{ userName }</UserSpan>
                                                <DateSpan>{ `${time.getHours()} : ${time.getMinutes()}` }</DateSpan>
                                            </DateItem>
                                        </ChatItem>
                                    </ChatArea>
                                ) ;
                            }else if( role === 'user') {
                                return(
                                    <ChatArea role={role} key={i}>
                                        <ChatItem>
                                            <BallonUser>{message}</BallonUser>
                                            <DateItem role={role}>
                                                <UserSpan>{ userName }</UserSpan>
                                                <DateSpan>{ `${time.getHours()} : ${time.getMinutes()}` }</DateSpan>
                                            </DateItem>
                                        </ChatItem>
                                    </ChatArea>
                                ) ;
                            }else if( role === 'gpt' ){
                                return(
                                    <ChatArea role={role} key={i}>
                                        <ChatItem>
                                            <BallonGPT><GPTSpan>{message}</GPTSpan></BallonGPT>
                                            <DateItem role={role}>
                                                <UserSpan>{ userName }</UserSpan>
                                                <DateSpan>{ `${time.getHours()} : ${time.getMinutes()}` }</DateSpan>
                                            </DateItem>
                                        </ChatItem>
                                    </ChatArea>
                                ) ;
                            }else if( role == 'system' ) {
                                return (
                                    <ChatArea role={role} key={i}>
                                        <ChatItem>
                                            <BallonGPT><GPTSpan>{message}</GPTSpan></BallonGPT>
                                            <DateItem role={role}>
                                                <UserSpan>{ userName }</UserSpan>
                                                <DateSpan>{ `${time.getHours()} : ${time.getMinutes()}` }</DateSpan>
                                            </DateItem>
                                        </ChatItem>
                                    </ChatArea>
                                )
                            }
                        })
                    }
                </ChatMain>
                <ChatFooter>
                    <FooterArea>
                        <FooterIcon 
                            src = { Image } 
                            alt = "Image icon" 
                            width = "20"
                            height = "20" 
                        />
                        <MessageBox>
                            {/* input 데이터 받아서 채팅 작성 */}
                            <MessageInput 
                                placeholder = "Message"
                                value = {inputMessage}
                                onChange={ (e) => setInputMessage(e.target.value) }
                                onKeyDown={ (e) => {
                                    e.stopPropagation() ;
                                    if (e.key === 'Enter') {
                                        if( inputMessage == "" ) return ;
                                        const tempChatData = [...chatData]
                                        tempChatData.push({role:'self', message:inputMessage, time: new Date(), userName : "Kim"})
                                        const requestData = { roomId : cookies.member.room, memberId : cookies.member.id, message : inputMessage } ;
                                        socket.emit("message", requestData)
                                        setChatData(tempChatData)
                                        setInputMessage('')
                                    }
                                }}
                            />
                            <FooterIcon 
                                src = { Emotiocon } 
                                alt = "Emotiocon icon" 
                                width = "20"
                                height = "20" 
                            />
                            <FooterIcon 
                                src = { ChatInput } 
                                alt = "Chat input icon" 
                                width = "20"
                                height = "20" 
                                style = {{ marginLeft : "10px", cursor : "pointer" }}
                                // onClick = { (e) =>  {
                                //     if( inputMessage == "" ) return ;
                                //     const tempChatData = [...chatData]
                                //     tempChatData.push({role:'self', message:inputMessage, time: new Date(), userName : "Kim"})
                                //     setChatData(tempChatData)
                                //     setInputMessage('')
                                // }}
                            />
                        </MessageBox>
                    </FooterArea>
                </ChatFooter>
            </Chat>
        </Container>
    );
}

export default ChatContainer ;