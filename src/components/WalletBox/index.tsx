import React, {useMemo} from 'react';
import CountUp from 'react-countup';

import dolarImg from '../../assets/dollar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';

import { Container } from './styles';

interface IWalletBoxProps {
    title: string;
    valor: number;
    footerlabel: string;
    icon: 'dolar' | 'arrowUp' | 'arrowDown';
    color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({
    title,
    valor,
    footerlabel,
    icon,
    color
}) => {

    const iconSelecionado = useMemo(() => {          
        switch (icon) {
            case 'dolar':
                return dolarImg
            case 'arrowUp':
                return arrowUpImg
            case 'arrowDown':
                return arrowDownImg     
            default:
                return undefined;
        }
    }, [icon]);

    return (
        <Container color={color}>
            <span>{title}</span>
            <h1>
                <CountUp 
                    end={valor}
                    prefix={"R$ "}
                    separator="."
                    decimal=","
                    decimals={2}
                />
            </h1>
            <small>{footerlabel}</small>
            <img src={iconSelecionado} alt={title} />
        </Container>        
    );
}

export default WalletBox;