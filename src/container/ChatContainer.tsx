import { FC, MouseEvent } from 'react'

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
    Ballon,
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
    onClickModalDisplay: Function
}

// "/chat" Contents
const ChatContainer : FC<Props> = ( { onClickModalDisplay } ) => {

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
                    {/* map 써서 */}
                    <ChatArea>
                        <Ballon>안녕</Ballon>
                    </ChatArea>
                    <ChatArea>
                        <Ballon>Hi</Ballon>
                    </ChatArea>
                    {/* <ChatArea>
                        <Ballon />
                    </ChatArea>
                    <ChatArea>
                        <Ballon />
                    </ChatArea>
                    <ChatArea>
                        <Ballon />
                    </ChatArea> */}
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