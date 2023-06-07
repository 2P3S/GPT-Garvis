import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    /* style reset */
    ${reset}

    #wrap {

        display : flex ;

        width : 100% ;
        height : 100vh ;
    }

    /* Basic Style */
    body { 
        background-color : #FAFAFA ; 
    }

    a {
        color : black ;
        text-decoration : none ;
    }

    input, textarea {
        -webkit-appearance : none ;
        -moz-appearance : none ;
        appearance : none ;
        outline : none ;
    }
    
` ;

export default GlobalStyle ;