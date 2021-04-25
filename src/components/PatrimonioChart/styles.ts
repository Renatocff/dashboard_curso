import styled from 'styled-components';

interface ILegendProps {
    color: string;
}

export const Container = styled.div`
    width: 48%;
    height: 200px;

    margin: 10px 0;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 7px;

    display: flex;
    flex-direction: column;
`;

export const SideLef = styled.aside`
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    width: 100%;
    height: 25px;

    align-items: center;
`;

export const LegendContainer = styled.ul`
    display: flex;
    height: 25px;
    
    margin: 10px 0;
`;

export const Legend = styled.li<ILegendProps>`
    
`;

export const SideRight = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;

    height: 100vh;
    
    margin-top: 60px;
`;