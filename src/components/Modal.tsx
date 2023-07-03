import { MouseEvent, FC, useEffect } from 'react'

import {

    Container,
    Area,
    Title,
    UrlArea,
    Url,
    UrlCopyButton,
    Description,
    ButtonArea,
    Button,

} from '@/styles/modalStyle'
import { Roboto, Noto_Sans_KR } from 'next/font/google'

const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'] }) ;
const notoKr = Noto_Sans_KR({ 
    weight: ['400', '500', '700'],
    subsets: ['latin']
}) ;

interface Props {
    modalDisplay : string,
    url : string,
    onClickModalDisplay: Function,
    type : string
}

const Modal : FC<Props> = ( { modalDisplay, url, onClickModalDisplay, type } ) => {
    
    const copyClipboard = ( e :  MouseEvent<HTMLElement> ) => {
        navigator.clipboard.writeText(url) ;
    }

    useEffect(() => {
        console.log(type) ;
    }, [ type ]) ;
    
    return (
        <Container
            display = { modalDisplay }
        >
            <Area
                className = { roboto.className }
            >
                {type !== 'help' ? (
                <>
                    <Title>Let your friends know the URL!</Title>
                    <UrlArea>
                        <Url 
                            value = { url }
                            readOnly = { true }
                        />
                        <UrlCopyButton
                            onClick = { (e : MouseEvent<HTMLElement>) => copyClipboard(e) }
                        >Copy!</UrlCopyButton>
                    </UrlArea>
                    <Description>Let’s Chat with our friends! Let’s Chat 
    with our friends! Let’s Chat with our friends! Let’s Chat with our friends! Let’s Chat with our friends! Let’s Chat with our friends!</Description>
                    <ButtonArea>
                        <Button
                            onClick = { (e : MouseEvent<HTMLElement>) => onClickModalDisplay(e, '') }
                            className = { notoKr.className }
                        >확인</Button>
                    </ButtonArea>
                </>
                ) : (
                    <>
                        <Description
                            style = {{
                                marginTop : "35px"
                            }}
                            className = { notoKr.className }
                        >/a : GPT에게 질문을 합니다.</Description> 
                        <Description className = { notoKr.className }>예) /a “세상에서 가장 맛있는 음식은?”</Description>
                        <Description className = { notoKr.className }>/check : 남은 질문 횟수를 확인합니다.</Description>
                        <ButtonArea>
                            <Button
                                onClick = { (e : MouseEvent<HTMLElement>) => onClickModalDisplay(e, '') }
                                className = { notoKr.className }
                            >확인</Button>
                        </ButtonArea>
                    </>
                )}
            </Area>
        </Container>
    );
}

export default Modal;