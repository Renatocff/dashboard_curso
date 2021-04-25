import styled from 'styled-components';

    /**
    * Layout
    * MH = MainHeader
    * AS = Aside
    * CT = Content
     */

export const Grid = styled.div`
    display: grid; //Define que tudo que estiver dentro do Container se comporte como um layout Grid
    grid-template-columns: 250px auto; //Primeira coluna ocupa 250px e a segunda o restante disponível
    grid-template-rows: 70px auto; //Primeira linha ocupa 70px e a segunda o restante disponível
    
    grid-template-areas: 
    'AS MH' //primeira linha e primeira coluna será posicionado o Aside, na segunda linha e coluna da primeira linha posiciona o MainHeader
    'AS CT'; //segunda linha e segunda coluna será posicionado o Aside, na segunda linha e segunda coluna o Content

    height: 100vh; //ordena que o Grid ocupe 100% do espaço vertical
`;