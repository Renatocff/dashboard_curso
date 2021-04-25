import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CT;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};

    padding: 25px;

    height: calc(100vh - 70px); // informa ao Container que o tamanho deve ter 100% do tamanho vertical da tela - o tamanho do de altura do header
    overflow-y: scroll; //todo conteudo que não couber na pagina, cria uma rolagem em y (vertical) dentro do proprio container

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track{
        background-color: ${props => props.theme.colors.tertiary};
    }
`;