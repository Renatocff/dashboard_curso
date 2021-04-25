import React, {useMemo, useState, useEffect} from 'react';
import { Container, Filters } from './styles';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import MovimentCard from '../../components/MovimentCard';

import movimentos from '../../repositorios/movimentos';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import listaMeses from '../../utils/meses';

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}

interface iData {
    id: string;
    tipomovimento: string;
    descricao: string;
    valorFormatado: string;
    ativoId: number;
    compraId: number;
    contaId: number;
    userResponsavelId: number;
    estorno: boolean;
    createdAtFormatado: string;
    updatedAtFormatado: string;
    tagColor: string;
}

const Contas: React.FC<IRouteParams> = ({ match }) => {

    const [data, setData] = useState<iData[]>([]);
    const [mesSelecionado, setMesSelecionado] = useState<number>(new Date().getMonth()+1);
    const [anoSelecionado, setAnoSelecionado] = useState<number>(new Date().getFullYear());
    const [filtroSelecionado, setFiltroSelecionado] = useState<any[]>(['ATIVA', 'INATIVA']);

    const meses = useMemo(() => {
        return listaMeses.map((mes, index) => {
            return {
                value: index + 1,
                label: mes
            }
        });           
 
    },[]);

    const anos = useMemo(() => {
        let anosUnicos: number[] = [];

        movimentos.forEach(item => {
            const date = new Date(item.createdAt);
            const year = date.getFullYear();

            if(!anosUnicos.includes(year)){
                anosUnicos.push(year);
            }
        });

        return anosUnicos.map(year => {
            return {
                value: year,
                label: year
            }
        });
    },[]);

    const handleFiltroClick = (filtro: string) => {
        const filtroExists = filtroSelecionado.findIndex(item => item === filtro);

        if(filtroExists >= 0){
            const filtrado = filtroSelecionado.filter(item => item !== filtro);
            setFiltroSelecionado(filtrado);
        }else{            
            setFiltroSelecionado((prev) => [...prev, filtro]); //prev pega o estado anterior a modificacao
        }
    }

    const handleMesSelecionado = (mes: string) => {
        try{
            const parseMes = Number(mes);
            setMesSelecionado(parseMes);
        }catch(error){
            throw new Error ('invalid month value. Is accept 0 - 24.');
        }
    }

    const handleAnoSelecionado = (ano: string) => {
        try{
            const parseAno = Number(ano);
            setMesSelecionado(parseAno);
        }catch(error){
            throw new Error ('invalid parseAno value. Is accept 0 - 24.');
        }
    }

    useEffect(() => {

        const dadosFiltrada = movimentos.filter(item => {
            const date = new Date(item.createdAt);
            const mes = date.getMonth() + 1;
            const ano = date.getFullYear();

            if(item.tipomovimento === 'ENTRADA' && item.estorno === false){
                return mes === mesSelecionado && ano === anoSelecionado && filtroSelecionado.includes(item.tipomovimento);
            }else if(item.tipomovimento === 'SAIDA' && item.estorno === false){               
                return mes === mesSelecionado && ano === anoSelecionado && filtroSelecionado.includes(item.tipomovimento);
            }else if(item.estorno){               
                return mes === mesSelecionado && ano === anoSelecionado && filtroSelecionado.includes('ESTORNADO');
            }
            
        });

        const dadosFormatados = dadosFiltrada.map(item => {

            return {
                id: item.id,
                tipomovimento: item.tipomovimento,
                descricao: item.descricao,
                valorFormatado: formatCurrency(Number(item.valor)),
                ativoId: item.ativoId,
                compraId: item.compraId,
                contaId: item.contaId,
                userResponsavelId: item.userResponsavelId,
                estorno: item.estorno,
                createdAtFormatado: formatDate(item.createdAt),
                updatedAtFormatado: item.updatedAt,
                tagColor: item.tipomovimento === 'ENTRADA' && !item.estorno ? '#4E41F0' : (item.estorno ? '#BFBFBF' : (item.ativoId === 0 && item.compraId === 0 ? '#F7931B' : '#E44C4E'))
            }
        })

        setData(dadosFormatados);
    },[mesSelecionado, anoSelecionado, filtroSelecionado]);

    return (
        <Container>
            <ContentHeader title='Contas' lineColor=''>
                <SelectInput options={meses} onChange={(e) => handleMesSelecionado(e.target.value)} defaultValue={mesSelecionado} />
                <SelectInput options={anos} onChange={(e) => handleAnoSelecionado(e.target.value)} defaultValue={anoSelecionado} />
            </ContentHeader>

            <Filters>
                <button type="button" 
                    className={`tag-filter tag-filter-Ativas
                    ${filtroSelecionado.includes('ATIVA') && 'tag-actived'}`} 
                    onClick={() => handleFiltroClick('ATIVA')}>
                        Ativas
                </button>

                <button type="button" 
                    className={`tag-filter tag-filter-Inativas
                    ${filtroSelecionado.includes('INATIVA') && 'tag-actived'}`} 
                    onClick={() => handleFiltroClick('INATIVA')}>
                        Inativas
                </button>
            </Filters>


        </Container>
    );
}

export default Contas;