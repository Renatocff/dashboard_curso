import styled from 'styled-components';

interface IContainerProps{
    color: string;
}

export const Container = styled.div<IContainerProps>`
    width: 32%;
    height: 130px;

    margin: 10px 0;

    background-color: ${props => props.color};
    color: ${props => props.theme.colors.white};

    border-radius: 7px;
    padding: 10px 20px;

    position: relative; //permite a manipulacao dos elementos dentro do container
    overflow: hidden; //oculta o que passar do elemento Container

    > img {
        height: 110%; //pega a altura do lugar que ela está '150px' e diz que o tamanho deve ser 110%, passando 10% do seu tamanho.
        
        position: absolute; //permite a manipulação de posicionamento dentro container por conta do 'position: relative'
        top: -10px; //posiciona ela no topo com menos 10px
        right: -30px;

        opacity: .3;
    }

    > span {
        font-size: 18px;
        font-weight: 500;
    }

    > small {
        font-size: 12px;
        position: absolute;
        bottom: 10px;
    }
`;