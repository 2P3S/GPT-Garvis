import type { MouseEvent, FC } from 'react'

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
import { Inter, Noto_Sans_KR } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] }) ;
const notoKr = Noto_Sans_KR({ 
    weight: ['400', '500', '700'],
    subsets: ['latin']
}) ;

interface Props {
    modalDisplay : string,
    url : string,
    onClickModalDisplay: Function
}

const Modal : FC<Props> = ( { modalDisplay, url, onClickModalDisplay } ) => {
    
    const copyClipboard = ( e :  MouseEvent<HTMLElement> ) => {
    
        navigator.clipboard.writeText(url) ;

    }
    
    return (
        <Container
            display = { modalDisplay }
        >
            <Area
                className = { inter.className }
            >
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
                        onClick = { (e : MouseEvent<HTMLElement>) => onClickModalDisplay(e) }
                        className = { notoKr.className }
                    >확인</Button>
                </ButtonArea>
            </Area>
        </Container>
    );
}

export default Modal;