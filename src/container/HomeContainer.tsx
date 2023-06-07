import { FC, MouseEvent } from 'react'

import {
    
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

} from '@/styles/homestyle'
import { Inter, Noto_Sans_KR } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] }) ;
const notoKr = Noto_Sans_KR({ 
    weight: ['400', '500', '700'],
    subsets: ['latin']
}) ;

interface Props {
    onClickModalDisplay: Function
}

// "/" Contents
const HomeContainer : FC<Props> = ( { onClickModalDisplay } ) => {

    return (
        <Container>
            <UserArea>
                <UserImage 
                    src = "" 
                    alt = "User image" 
                    width = "240px"
                    height = "240px" 
                />
                <UserName 
                    className = { inter.className }
                    placeholder = "Name"
                />
                <UserImageChangeButton>Change</UserImageChangeButton>
            </UserArea>
            <DescriptionArea
                className = { inter.className }
            >
                <DescriptionTitle>Let's Chat!</DescriptionTitle>
                <Description>Let’s Chat with our friends! Let’s Chat 
with our friends! Let’s Chat with our friends! Let’s Chat with our friends!</Description>
                <Description>Let’s Chat with our friends! Let’s Chat 
with our friends! Let’s Chat with our friends! Let’s Chat with our friends!</Description>
                <Status
                    className = { notoKr.className }
                >친구들을 초대해 보세요!</Status>
                <StartButton
                    onClick = { (e : MouseEvent<HTMLElement>) => onClickModalDisplay(e) }
                >Invite</StartButton>
            </DescriptionArea>
        </Container>
    );
}

export default HomeContainer ;