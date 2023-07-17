import styled from 'styled-components'

const Container = styled.div`

    position : absolute ;

    display : ${ (props : any) => { return `${props.display}` } } ;

    width : 100% ;
    height : 100% ;
    background-color : rgba(0, 0, 0, 0.5) ;

`;

const Area = styled.div`

    box-sizing : border-box ;

    display : flex ;
    flex-direction : column ;

    width : 530px ;

    margin : auto ;

    border-radius : 10px ;

    padding : 0 25px 30px 25px ;

    background-color : #ffffff ;
`;

const Title = styled.h3`

    margin-top : 35px ;

    font-size : 22px ;
    font-weight : 600 ;

`;

const UrlArea = styled.div`

    display : flex ;

    margin-top : 15px ;
    
`;

const Url = styled.input`

    width : 382px ;

    margin-right : 15px ;

    padding : 0 10px ;

    border : 1px solid #EFDA2D ;
    border-radius : 10px ;

`;

const UrlCopyButton = styled.button`

    width : 115px ;
    height : 30px ;

    font-size : 14px ;
    font-weight : 600 ;

    border : none ;
    border-radius : 10px ;

    background-color : #EFDA2D ;

    cursor : pointer ;

`;

const Description = styled.p`
    
    display : block ;
    
    margin-top : 20px ;

    font-size : 18px ;
    line-height : 130% ;
    color : #888888 ;

`;

const ButtonArea = styled.div`

    display : flex ;
    justify-content : center ;

    width : 100% ;
    margin-top : 25px ;
`;

const Button = styled.button`
    
    width : 220px ;
    height : 35px ;

    border : 1px solid #EFDA2D ;
    border-radius : 10px ;

    font-size : 16px ;

    background-color : #ffffff ;

    cursor : pointer ;
`;

export {

    Container,
    Area,
    Title,
    UrlArea,
    Url,
    UrlCopyButton,
    Description,
    ButtonArea,
    Button,

} ;