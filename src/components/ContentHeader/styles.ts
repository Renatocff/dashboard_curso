import styled from 'styled-components';

interface ITitleContainerProps {
    lineColor: string;
}

export const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;

    margin-bottom: 25px;
`;

export const TitleContainer = styled.div<ITitleContainerProps>`
        > h1 {

        color: ${props => props.theme.colors.white};
        font-size: 25px;

        &::after {
            content: '';
            display: block; //permite trabalhar com altura e largura
            width: 55px;
            border-bottom: 3px solid ${props => props.lineColor};
        }
    }
`;

export const Controllers = styled.div`
    display: flex;
`;