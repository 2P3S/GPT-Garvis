import { useState, MouseEvent } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import ChatContainer from '@/container/ChatContainer'
import Modal from '@/components/Modal'

// "/chat" 시작점
export default function Home() {

  const router = useRouter() ;
  const [ modalDisplay, setModalDisplay ] = useState<string>('none') ;
  const [ type, setType ] = useState<string>('') ;
  const [ url, _ ] = useState<string>('') ;

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
        />
        <Modal 
          modalDisplay = { modalDisplay }
          url = { url }
          type = { type }
          onClickModalDisplay = { onClickModalDisplay }
        />
      </main>
    </>
  )
}
