import styled from 'styled-components'
import Image from 'next/image'

interface ImageProps {
    width : string,
    height : string,
    src : string,
    alt : string
}

const Aside = styled.aside`
    
    display : flex ;
    box-sizing : border-box ;
    flex-direction : column ;
    
    width : 220px ;
    height : 810px ;

    padding : 50px 30px ;
    background-color : #EFDA2D ;

`;

const MenuHeader = styled.div`
    
`;

const MenuMain = styled.div`

    width : 100% ;
    box-sizing : border-box ;

    flex : 1 ;

`;

const MenuTitle = styled.h3`

    width : 100% ;
    
    font-size : 22px ;
    font-weight : 600 ;

    margin-bottom : 20px ;

`;

const MenuArea = styled.ul`

    border-top : 1px solid #888888 ;
    padding-top : 10px ;

`;

const MenuItem = styled.li`

    font-size : 18px ;
    box-sizing : border-box ;

    padding : 10px 0 ;
    cursor : pointer ;

`;

const MenuUserItem = styled.div`

    display : flex ;
    height : 25px ;

`;

const UserImage = styled.div.attrs(( props : ImageProps ) => ({
    src : props.src,
    alt : props.alt,
}))`
    width : ${ ( props : ImageProps ) => props.width } ;
    height : ${ ( props : ImageProps ) => props.height } ;
    
    background-color : #eeeeee ;
    border-radius : 10px ;
    margin-right : 10px ;
`;

const UserText = styled.p`

    display : flex ;
    
    justify-content: center ;
    align-items: center ;

    font-size : 16px ;

`;

const MenuFooter = styled.div`

`;

const Chat = styled.div`

    display : flex ;
    flex-direction : column ;
    width : 1000px ;
    
`;

const ChatHeader = styled.div`

    display : flex ;
    box-sizing : border-box ;

    width : 100% ;
    height : 54px ;
    align-items : center ;

    background-color : #ffffff ;

    padding : 0 25px ;

`;

const ChatMain = styled.div`

    box-sizing : border-box ;

    width : 100% ;
    height : 702px ;

    background-color : #F2F3F5 ;

    padding : 40px 100px ;

`;

const ChatArea = styled.div`

    //border : 1px solid #000000 ;

    &:not(:first-child) {
        margin-top : 15px ; 
    }

`;

const Ballon = styled.div`
    
    display : inline-block ;
    position : relative ;
    padding : 2px 15px ;
    background : #ffffff ;
    color : #000000 ;
    border-radius : 5px ;

    font-size : 18px ;
    text-align : center ;
    line-height : 28px ;

    &::after {
        border-top : 4px solid transparent ;
        border-left : 0 solid transparent ;
        border-right : 7px solid #ffffff ;
        border-bottom : 4px solid transparent ;
        transform: rotate(40deg) ;

        content : "";
        position : absolute ;
        top : -3px ;
        left : -3px ;
    }

`;

const ChatFooter = styled.div`

    display : flex ;

    justify-content: center ;
    align-items: center ;

    width : 100% ;
    height : 54px ;

    background-color : #ffffff ;

`;

const FooterArea = styled.div`

    display : flex ;

    justify-content: center ;
    align-items: center ;

`;

const FooterIcon = styled(Image)`

    width : ${ ( props : ImageProps ) => props.width } ;
    height : ${ ( props : ImageProps ) => props.height } ;
    
`;

const MessageBox = styled.div`

    display : flex ;
    width : 605px ;

    background-color : #F2F3F5 ;
    border-radius : 10px ;

    padding : 8px 10px ;
    margin-left : 10px ;

`;

const MessageInput = styled.input`

    flex : 1 ;
    border : none ;
    background-color : #F2F3F5 ;

    font-size : 16px ;

`;

export {

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

} ;