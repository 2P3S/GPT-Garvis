import { useState, MouseEvent } from 'react'
import Head from 'next/head'

import ChatContainer from '@/container/ChatContainer'
import Modal from '@/components/Modal'

// "/chat" 시작점
export default function Home() {

  const [ modalDisplay, setModalDisplay ] = useState<string>('none') ;
  const [ url, _ ] = useState<string>('https://www.figma.com/file/lvUDqIdcbotFW89qopLd8K/G') ;

  const onClickModalDisplay = ( e : MouseEvent<HTMLElement> ) => {
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
          onClickModalDisplay = { onClickModalDisplay }
        />
      </main>
    </>
  )
}
