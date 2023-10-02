import { FC, MouseEvent, ChangeEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
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
import { roomAccess } from '../util/api';

import char1 from 'public/char1.png'
import char2 from 'public/char2.png'
import char3 from 'public/char3.png'

const inter = Inter({ subsets: ['latin'] }) ;
const notoKr = Noto_Sans_KR({ 
    weight: ['400', '500', '700'],
    subsets: ['latin']
}) ;

interface Props {
    onClickModalDisplay: Function
    url : string
}

// "/" Contents
const HomeContainer : FC<Props> = ( { onClickModalDisplay, url } ) => {

    const router = useRouter() ;

    const arrayImage = [ char1, char2, char3 ] ;

    const [ _, setCookies ] = useCookies<any>() ;
    const [ name, setName ] = useState<string>('') ;
    const [ roomId, setRoomId ] = useState<string|undefined>(undefined) ;
    const [ imageIndex, setImageIndex ] = useState<number>(1) ;

    const expires = new Date() ;
    expires.setHours(expires.getHours() + 2) ;

    useEffect(() => {

        if(typeof(router.query.id) == 'string') {
            setRoomId(router.query.id === '' ? undefined : router.query.id) ;
        }

    }, [ router ]) ;

    useEffect(() => {

        setRoomId(url === '' ? undefined : url) ;
    
    }, [ url ]) ;

    useEffect(() => {

        roomId && setCookies('roomId', roomId, { expires }) ;
        name !== '' && setCookies('me', name, { expires }) ;

    }, [ roomId, name ]) ;

    function onClickImageChange() {

        let randomImageIndex ;
            
        while(true) {
            randomImageIndex = Math.floor(Math.random() * 3) ;

            if( randomImageIndex !== imageIndex ) break ;
        }
        
        setImageIndex( randomImageIndex ) ;
    }

    function onClickGoChat( e : MouseEvent<HTMLElement> ) {

        if( !roomId || name === '' || imageIndex === undefined ) return ;

        roomAccess(JSON.stringify({ memberName : name, imageIndex : `${imageIndex}` }), roomId).then((response) => {
            if( response?.data?.id ){ 
                setCookies('member', response.data, { expires }) ;
                router.push(`/chat/${roomId}`) ;
            }
        }).then((error) => {
            console.log(error) ;
        }) ;
    }

    function onChangeName( e : ChangeEvent<HTMLInputElement> ) {
        setName(e.target.value) ;
    }

    return (
        <Container>
            <UserArea>
                <UserImage 
                    src = { arrayImage[imageIndex] } 
                    alt = "User image" 
                    width = "240"
                    height = "240" 
                />
                <UserImageChangeButton onClick={(e) => onClickImageChange()}>Image change</UserImageChangeButton>
                <UserName 
                    className = { inter.className }
                    onChange = { onChangeName }
                    value = { name }
                    placeholder = "Your Name"
                />
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
                    onClick = { (e : MouseEvent<HTMLElement>) => roomId === undefined ? onClickModalDisplay(e) : onClickGoChat(e) }
                >{ roomId === undefined ? 'Invite' : 'Start'}</StartButton>
            </DescriptionArea>
        </Container>
    );
}

export default HomeContainer ;