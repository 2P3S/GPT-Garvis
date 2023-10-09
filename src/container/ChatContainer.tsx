import { FC, MouseEvent, useState, useEffect, KeyboardEvent, Dispatch, SetStateAction } from 'react'
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

import char1 from 'public/char1.png'
import char2 from 'public/char2.png'
import char3 from 'public/char3.png'

const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'] }) ;
const notoKr = Noto_Sans_KR({ 
    weight: ['400', '500', '700'],
    subsets: ['latin']
}) ;

interface Props {
    onClickModalDisplay : Function
    setUrl : Dispatch<SetStateAction<string>>
}

interface ChatData {
    role : string,
    message : string,
    time : Date,
    userName : string
}

// "/chat" Contents
const ChatContainer : FC<Props> = ( { onClickModalDisplay, setUrl } ) => {

    const router = useRouter() ;
    const arrayImage = [ char1, char2, char3 ] ;

    // 서버로 부터 받은 데이터
    const [ chatData, setChatData ] = useState<Array<ChatData>>([]) ;
    const [ cookies, _ ] = useCookies<any>(['member', 'me']) ;
    const [ socket, setSocket ] = useState<any>(undefined) ; 
    const [ members, setMembers ] = useState<Array<any>>([]) ;
    const [ me, setMe ] = useState<any>({}) ;
    const [ inputUser, setInputUser ] = useState<any>([]) ;
    const [ inputChat, setInputChat ] = useState<ChatData>({
        role : "",
        message : "",
        time : new Date(),
        userName : ""
    }) ;

    // 사용자가 입력창에 입력한 데이터
    const [ inputMessage, setInputMessage ] = useState<string>('') ;

    useEffect(() => {
        if( cookies.me && cookies.member ) {

            setUrl(cookies.roomId) ;

            // 소켓 서버에 연결
            const socket = io(`http://localhost:3001/gpt-garvis`); // 소켓 서버의 URL로 변경해야 합니다.

            // 연결이 성공했을 때 실행되는 이벤트 핸들러
            socket.on('connect', () => {
                // 서버로 데이터 보내기
                const requestData = { roomId : cookies.member.room, memberId : cookies.member.id } ;
                socket.emit('join-request', requestData) ;
            });

            socket.on("join-success", (response) => {
                const me = response.data.member ;
                setMe(me) ;
            }) ;

            socket.on('command-gpt', (data) => {
                setInputChat({
                    role : "gpt",
                    message : data.data.message.content,
                    time : new Date(),
                    userName : "Chat GPT"
                }) ;
            }) ;

            // 유저가 연결됬을때 실행되는 이벤트 핸들러
            socket.on('member-connected', (response : any) => {
                const membersData = response.data.members ;
                const uniqueArray = membersData.filter((obj : any, index : number, self : any) =>
                                        index === self.findIndex((o : any) => o.id === obj.id && o.name === obj.name)
                                    );

                setInputUser(uniqueArray) ;
            });

            socket.on('message', (response : any) => {

                const member = response.data.member ;
                const message = response.data.message ;

                setInputChat(cookies.member.id === member.id ? {
                    role : "self",
                    message : message,
                    time : new Date(),
                    userName : "me"
                } : {
                    role : "user",
                    message : message,
                    time : new Date(),
                    userName : member.name

                }) ;
            });

            setSocket(socket) ;

            return () => {
                const requestData = { roomId : cookies.member.room, memberId : cookies.member.id } ;
                socket.emit('disconnected-request', requestData) ;
            }
        }
        else {
            router.push('/') ; 
        }

    }, []) ;

    useEffect(() => {
        
        if( inputChat?.message ) {
            setChatData([
                ...chatData,
                inputChat
            ]) ;
        }

    }, [ inputChat ]) ;

    useEffect(() => {
        const chatMain = document.getElementsByClassName('chat-main')[0] ;

        chatMain.scrollTop = chatMain.scrollHeight ;

    }, [ chatData ]) ;

    useEffect(() => {

        let index = 0 ;
        let addMemebers : any = [] ;

        for(let i = 0 ; i < inputUser.length ; i++) {
            index = members.findIndex((member : any) => member.id === inputUser[i].id) ;
            if(index === -1) {
                addMemebers = addMemebers.concat(inputUser[i]) ;
                if(addMemebers.length !== 0)
                    setInputChat({
                        role : "system",
                        message : `${inputUser[i].name}가 입장하였습니다.`,
                        time : new Date(),
                        userName : "System"
                    }) ;
            }
        }

        if(addMemebers.length !== 0) 
            setMembers([
                ...members,
                ...addMemebers
            ]) ;


        // socket && socket.on('member-disconnected', (response : any) => {
        //     const removeMember = response.data ;
        //     const index = members.findIndex((member : any) => member.id === removeMember.id) ;

        //     console.log(removeMember) ;

        //     setInputChat({
        //         role : "system",
        //         message : `${removeMember.name}가 퇴장하였습니다.`,
        //         time : new Date(),
        //         userName : "System"
        //     }) ;

        //     setMembers([
        //         ...members.splice(0, index),
        //         ...members.splice(index + 1, members.length) 
        //     ])
        // }) ;

    }, [ inputUser ]) ;

    function keyDownEvent(e : KeyboardEvent<HTMLInputElement>) {
        e.stopPropagation() ; 
        if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
            e.preventDefault() ;
            if( inputMessage === "" ) return ;
            const requestData = { roomId : cookies.member.room, memberId : cookies.member.id, message : inputMessage } ;
            socket.emit('message', requestData) ;
            setInputMessage("") ;
        }
    }

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
                        {
                            members.map((member : any) => {
                                return (
                                    <MenuItem>
                                        <MenuUserItem>
                                            <UserImage 
                                                src = { arrayImage[member.imageIndex] } 
                                                alt = "User image" 
                                                width = "25"
                                                height = "25" 
                                            />
                                            <UserText>{ member.name === me.name ? "me" : member.name }</UserText>
                                        </MenuUserItem>
                                    </MenuItem>
                                ) ;
                            })
                        }
                    </MenuArea>
                </MenuFooter>
            </Aside>
            <Chat>
                <ChatHeader>
                    <MenuUserItem>
                        <UserImage
                            src = { arrayImage[me.imageIndex] } 
                            alt = "User image" 
                            width = "30"
                            height = "30" 
                        />
                        <UserText
                            style = {{
                                marginLeft : "10px",
                                fontWeight : "700"
                            }}
                        >{ me.name }</UserText>
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
                        {/* <FooterIcon 
                            src = { Image } 
                            alt = "Image icon" 
                            width = "20"
                            height = "20" 
                        /> */}
                        <MessageBox>
                            {/* input 데이터 받아서 채팅 작성 */}
                            <MessageInput 
                                placeholder = "Message"
                                value = {inputMessage}
                                onChange={ (e) => {
                                    setInputMessage(e.target.value)
                                } }
                                onKeyDown={ keyDownEvent }
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
                            />
                        </MessageBox>
                    </FooterArea>
                </ChatFooter>
            </Chat>
        </Container>
    );
}

export default ChatContainer ;