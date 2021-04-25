import styled from 'styled-components';

export const Container = styled.div``;

export const Filters = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;

    margin-bottom: 30px;
    
    .tag-filter {
        font-size: 18px;
        font-weight: 500;

        background: none;
        color: ${props => props.theme.colors.white};

        margin: 0 10px;

        opacity: .4;
        transition: opacity .3s;
        
        &:hover {
            opacity: .7;
        }

        &::after {
            content: '';
            display: block;
            width: 40px;
            margin: 0 auto;
            border-bottom: 3px solid ${props => props.theme.colors.warning};
        }
    }

    .tag-filter-Ativas {
        &::after {
            content: '';
            display: block;
            width: 40px;
            margin: 0 auto;
            border-bottom: 3px solid ${props => props.theme.colors.success};
        }
    }

    .tag-filter-Inativas {
        &::after {
            content: '';
            display: block;
            width: 40px;
            margin: 0 auto;
            border-bottom: 3px solid ${props => props.theme.colors.warning};
        }
    }

    .tag-actived {
        opacity: 1;
    }

    > button {
        cursor: pointer;
    }
`;