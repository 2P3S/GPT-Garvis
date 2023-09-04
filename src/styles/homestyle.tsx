import styled from 'styled-components'
import Image from 'next/image'

interface ImageProps {
    width : string,
    height : string,
    src : string,
    alt : string
}

const Container = styled.div`

    display : flex ;

    width : 1150px ;
    margin : auto ;

`;

const UserArea = styled.div`

    display : flex ;

    flex-direction : column ;
    align-items : center ;

    width : 575px ;

    background-color : #ffffff ;

`;

const UserImage = styled(Image).attrs(( props : any ) => ({
    src : props.src,
    alt : props.alt,
    width : props.width,
    height : props.height
}))`
    
    background-color : #eeeeee ;
    border-radius : 10px ;

    margin-top : 110px ;
    margin-bottom : 60px ;
`;

const UserName = styled.input`

    box-sizing : border-box ;

    width : 246px ;
    height : 43px ;
    
    border : none ;
    border-radius : 10px ;
    background-color : #EFDA2D ;

    padding : 0 10px ;

    font-size : 22px ;
    color : #888888 ;

    margin-bottom : 55px ;
`;

const UserImageChangeButton = styled.button`

    box-sizing : border-box ;

    width : 246px ;
    height : 43px ;

    border : none ;
    border-radius : 10px ;
    background-color : #EFDA2D ;

    text-align : center ;

    font-size : 20px ;
    font-weight : 600 ;
    color : #000000 ;

    margin-bottom : 20px ;

    cursor : pointer ;

`;

const DescriptionArea = styled.div`

    box-sizing : border-box ;

    display : flex ;

    flex-direction : column ;
    align-items : center ;

    width : 575px ;

    background-color : #EFDA2D ;

    padding : 0 70px ;

`;

const DescriptionTitle = styled.h2`
    
    width : 100% ;

    margin-top : 130px ;

    text-align : left ;

    font-size : 36px ;
    font-weight : 700 ;
    
`;

const Description = styled.p`

    margin-top : 30px ;

    font-size : 18px ;

`;

const Status = styled.p`

    display : block ;

    margin-top : 87px ;
    margin-bottom : 30px ;
    
    font-size : 20px ;
    font-weight : 700 ;
    text-align : center ;

`;

const StartButton = styled.button`

    box-sizing : border-box ;

    width : 246px ;
    height : 43px ;

    border : none ;
    border-radius : 10px ;
    background-color : #ffffff ;

    text-align : center ;

    font-size : 20px ;
    font-weight : 600 ;
    color : #000000 ;

    margin-bottom : 55px ;

    cursor : pointer ;

`;

export {

    Container,
    UserArea,
    UserImage,
    UserName,
    UserImageChangeButton,
    DescriptionArea,
    DescriptionTitle,
    Description,
    Status,
    StartButton,

} ;
