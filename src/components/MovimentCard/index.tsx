import React from 'react';

import { Container, Tag } from './styles';

interface IMovimentCardProps {
    tagColor: string;
    title: string;
    data: string;
    valor: string;
}

const MovimentCard: React.FC<IMovimentCardProps> = ({
    tagColor,
    title,
    data,
    valor,
}) => {
    return (
        <Container>
            <Tag color={tagColor}/>
            <div>
                <span>{title}</span>
                <small>{data}</small>
            </div>
            <h4>{valor}</h4>
        </Container>        
    );
}

export default MovimentCard;