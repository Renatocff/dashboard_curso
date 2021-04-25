import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0; //Zera todas as margens
        padding: 0; //zera todos os espaçamentos internos
        box-sizing: border-box; //faz com que o espaçamento nao conte como pixels nos objetos  
    }

    html, body, #root {
        height: 100%;
    }

    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }

    button: {
        cursor: pointer;
    }
`;