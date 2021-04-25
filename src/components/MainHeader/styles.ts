import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MH;
    
    background-color: ${props => props.theme.colors.secondary};

    display: flex; //para se comportar como caixas
    justify-content: space-between; //para dividir os elementos em duas partes
    align-items: center; //Para alinhar os elementos ao centro

    padding: 0 10px; //cria um espaçamento de 0 em cima e em baixo e 10px dos lados

    border-bottom: 1px solid ${props => props.theme.colors.gray}; //cria uma borda de 1px abaixo do container
`;

export const Profile = styled.div`
    color: ${props => props.theme.colors.white};
`;

export const Welcome = styled.h3``;

export const Username = styled.span``;