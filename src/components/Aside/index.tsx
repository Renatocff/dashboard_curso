import React from 'react';
import { MdDashboard, MdAccountBalance, MdSwapVert } from 'react-icons/md';

import logoImg from '../../assets/logo.svg';

import { Container, Header, LogoImg, Title,MenuContainer, MenuItemLink } from './styles';

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogoImg src={logoImg} alt="Logo Minha Carteira" />
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/dashboard"><MdDashboard />Dashboard</MenuItemLink>
                <MenuItemLink href="/contas"><MdAccountBalance />Contas</MenuItemLink>
                <MenuItemLink href="/movimentos/todos"><MdSwapVert />Movimentações</MenuItemLink>
            </MenuContainer>
        </Container>        
    );
}

export default Aside;