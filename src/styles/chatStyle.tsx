import styled from 'styled-components'
import Image from 'next/image'

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

const UserImage = styled(Image).attrs(( props : any ) => ({
    src : props.src,
    alt : props.alt,
    width : props.width,
    height : props.height
}))`
    
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

    overflow : overlay ;

    &::-webkit-scrollbar {
        width : .4em ;  
        margin : 0 ;
        padding : 0 ;
    }
    &::-webkit-scrollbar,
    &::-webkit-scrollbar-thumb {
        overflow : visible ;
        border-radius : 4px ;
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0,.2) ;
    }
`;

const ChatArea = styled.div`

    display : flex ;
    justify-content: ${ 
        props => 
            props.role === "self" 
                ? "end" 
                    : props.role === "system" ? "center" : "start"
    } ;

    &:not(:first-child) {
        margin-top : 15px ; 
    }

`;

const ChatItem = styled.div`

    display : flex ;

    flex-direction : column ;

`;

const DateItem = styled.div`
    display : flex ;
    justify-content : ${ 
        props => 
            props.role === "self" 
                ? "end" 
                    : props.role === "system" ? "center" : "start"
    } ;

    margin : 10px 5px 0 5px ;

    font-size : 10px ;

`;

const DateSpan = styled.span`
    display : inline-block ;

    margin-left : 5px ;
    color : #888888 ;
`;

const UserSpan = styled.span`
    font-weight: 700 ;
    color : #555555 ;
`;

const BallonUser = styled.div`
    
    display : inline-block ;
    position : relative ;
    padding : 4px 8px ;
    background : #ffffff ;
    color : #000000 ;
    border-radius : 5px ;

    font-size : 16px ;
    text-align : left ;
    line-height : 30px ;

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

const BallonSelf = styled.div`
    
    display : inline-block ;
    position : relative ;

    box-sizing : border-box ;

    padding : 4px 8px ;
    background : #DEDFE1 ;
    color : #000000 ;
    border-radius : 5px ;

    font-size : 16px ;
    text-align : right ;
    line-height : 30px ;

    &::after {
        border-top : 7px solid transparent ;
        border-left : 0 solid transparent ;
        border-right : 5px solid #DEDFE1 ;
        border-bottom : 4px solid transparent ;
        transform: rotate(40deg) ;

        content : "";
        position : absolute ;
        top : -5px ;
        right : -2px ;
    }

`;

const BallonGPT = styled.div`
    
    display : inline-block ;
    position : relative ;
    padding : 4px 8px ;
    background : #ffffff ;
    color : #000000 ;
    border-radius : 5px ;

    //width : 450px ;

    font-size : 16px ;
    text-align : left ;
    line-height : 30px ;

`;

const GPTSpan = styled.span`
    font-size : 17px ;
    font-weight : 500 ;

    color : #888888 ;
`;

const MessageButton = styled.button`

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

    width : ${ ( props : any ) => `${props.width}px` } ;
    height : ${ ( props : any ) => `${props.height}px` } ;
    
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

} ;