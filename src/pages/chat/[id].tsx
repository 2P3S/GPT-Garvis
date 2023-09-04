import { useState, MouseEvent } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import ChatContainer from '@/container/ChatContainer'
import Modal from '@/components/Modal'
import { roomCreate, FRONT_BASE_URL } from '../../util/api'
import { Room } from '@/util/interface'

// "/chat" 시작점
export default function Home() {

  const router = useRouter() ;
  const [ modalDisplay, setModalDisplay ] = useState<string>('none') ;
  const [ type, setType ] = useState<string>('') ;
  const [ url, setUrl ] = useState<string>('') ;

  const onClickModalDisplay = ( e : MouseEvent<HTMLElement>, mode : string ) => {
    if(mode === 'help') setType('help') ;
    else setType('') ;
    
    setModalDisplay(modalDisplay !== 'none' ? 'none' : 'flex') ;
  }

  return (
    <>
      <Head>
      </Head>
      <main id = "wrap">
        <ChatContainer 
          onClickModalDisplay = { onClickModalDisplay }
          setUrl = { setUrl }
        />
        <Modal 
          modalDisplay = { modalDisplay }
          url = { `${FRONT_BASE_URL}/${url}` }
          type = { type }
          onClickModalDisplay = { onClickModalDisplay }
        />
      </main>
    </>
  )
}
