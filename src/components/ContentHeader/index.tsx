import React from 'react';
import { Container, TitleContainer, Controllers } from './styles';

interface ContenHeaderProps {
    title: string;
    lineColor: string;
    children: React.ReactNode
}

const ContenHeader: React.FC<ContenHeaderProps> = ({
    title, lineColor, children
}) => {
    return (
        <Container>
            <TitleContainer lineColor={lineColor}>
                <h1>{title}</h1>
            </TitleContainer>

            <Controllers>
                {children}
            </Controllers>
        </Container>        
    );
}

export default ContenHeader;