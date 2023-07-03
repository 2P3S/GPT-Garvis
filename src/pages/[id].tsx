import { useState, MouseEvent, useEffect } from 'react'
import Head from 'next/head'

import HomeContainer from '@/container/HomeContainer'
import Modal from '@/components/Modal'
import { roomCreate, FRONT_BASE_URL } from '../util/api'
import { Room } from '@/util/interface'

// "/" 시작점
export default function Home() {

  const [ modalDisplay, setModalDisplay ] = useState<string>('none') ;
  const [ room, setRoom ] = useState<Room>({
    name : "",
    members : [],
    created_at : new Date(),
    updated_at : new Date(),
    id : ""
  }) ;

  const onClickModalDisplay = ( e : MouseEvent<HTMLElement> ) => {
    setModalDisplay(modalDisplay !== 'none' ? 'none' : 'flex') ;

    if( modalDisplay === 'none' ) {
      roomCreate(JSON.stringify({ roomName : 'Garvis' })).then((response) => {
        setRoom(response.data) ;
      }) ;
    }

  }

  return (
    <>
      <Head>
      </Head>
      <main id = "wrap">
        <HomeContainer 
          onClickModalDisplay = { onClickModalDisplay }
          url = {''}
        />
        <Modal 
          modalDisplay = { modalDisplay }
          url = { `${FRONT_BASE_URL}/${room.id}` }
          type = {''}
          onClickModalDisplay = { onClickModalDisplay }
        />
      </main>
    </>
  )
}
