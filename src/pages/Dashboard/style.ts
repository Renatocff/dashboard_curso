import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
    display: flex; //para os cartoes se comportarem como caixas

    justify-content: space-between;
    flex-wrap: wrap; //força a mudança de linha quando os elementos estourarem o espaço pre definido
`;