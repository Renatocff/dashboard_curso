import React, {useState, useMemo} from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import PieCharts from '../../components/PieCharts';
import PatrimonioChart from '../../components/PatrimonioChart';

import ativos from '../../repositorios/ativos';
import movimentos from '../../repositorios/movimentos';
import listaMeses from '../../utils/meses';
import haddyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';

import { Container, Content } from './style';


const Dashboard: React.FC= () => {

    const [mesSelecionado, setMesSelecionado] = useState<number>(new Date().getMonth()+1);
    const [anoSelecionado, setAnoSelecionado] = useState<number>(new Date().getFullYear());

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

    const totalSaidas = useMemo(() => {
        let total: number = 0;

        movimentos.forEach(item => {
            const date = new Date(item.createdAt);
            const ano = date.getFullYear();
            const mes = date.getMonth() +1;

            if(mes === mesSelecionado && ano === anoSelecionado && item.tipomovimento === 'SAIDA' && item.estorno === false){
                try{
                    total += Number(item.valor);
                }catch{
                    throw new Error('Valor inváido.');
                }
            }            
        });

        return total;

    },[movimentos, mesSelecionado, anoSelecionado]);

    const totalEntradas = useMemo(() => {
        let total: number = 0;

        movimentos.forEach(item => {
            const date = new Date(item.createdAt);
            const ano = date.getFullYear();
            const mes = date.getMonth() +1;

            if(mes === mesSelecionado && ano === anoSelecionado && item.tipomovimento === 'ENTRADA' && item.estorno === false){
                try{
                    total += Number(item.valor);
                }catch{
                    throw new Error('Valor inváido.');
                }
            }            
        });

        return total;

    },[movimentos, mesSelecionado, anoSelecionado]);

    const saldo = useMemo(() => {
        return totalEntradas - totalSaidas;
    },[totalEntradas, totalSaidas]);

    const totalVeiculos = useMemo(() => {
        let total: number = 0;

        ativos.forEach(item => {
            if(item.tipoAtivo === 'VEICULO' && item.vendido === false){
                total ++;
            }            
        });

        return total;

    },[ativos]);

    const totalImovel = useMemo(() => {
        let total: number = 0;

        ativos.forEach(item => {
            if(item.tipoAtivo === 'IMOVEL' && item.vendido === false){
                total ++;
            }            
        });

        return total;

    },[ativos]);

    const totalEmbarcacao = useMemo(() => {
        let total: number = 0;

        ativos.forEach(item => {
            if(item.tipoAtivo === 'EMBARCACAO' && item.vendido === false){
                total ++;
            }            
        });

        return total;

    },[ativos]);

    const message = useMemo(() => {
        if(saldo < 0){
            return {
                title: "Quanto descontrole!!!",
                description: "Neste mês você gastou mais do que deveria.",
                icon: sadImg,
                footerText: "Verifique seus gastos e tente cortar custos.",
            }
        } else if(saldo === 0){
            return {
                title: "Ok, sem movimentação",
                description: "Neste mês você não movimentou.",
                icon: haddyImg,
                footerText: "Vida em equilíbrio?",
            }
        } else {
            return {
                title: "Muito bem!!!",
                description: "Positividade até no saldo.",
                icon: haddyImg,
                footerText: "Considere investir seu saldo.",
            }
        }

    },[saldo]);

    const percentSaidaVersusEntradas = useMemo(() => {
        const total = totalEntradas + totalSaidas;

        const entradasPercentual = (totalEntradas / total) * 100;
        const saidasPercentual = (totalSaidas / total) * 100;

        const data = [
            {
                name: "Entradas",
                value: totalEntradas,
                percent: Number(entradasPercentual.toFixed(1)),
                color: '#F7931B',
            },
            {
                name: "Saidas",
                value: totalSaidas,
                percent: Number(saidasPercentual.toFixed(1)),
                color: '#E44C4E',
            },
        ];

        return data;

    },[totalEntradas,totalSaidas]);

    const contaAtivos = useMemo(() => {
        const total = totalVeiculos + totalImovel + totalEmbarcacao;

        const veiculoPercentual = (totalVeiculos / total) * 100;
        const imovelPercentual = (totalImovel / total) * 100;
        const embarcacaoPercentual = (totalEmbarcacao / total) * 100;

        const data = [
            {
                name: "Veículos",
                value: totalVeiculos,
                percent: Number(veiculoPercentual.toFixed(1)),
                color: '#FDB45C',
            },
            {
                name: "Imóveis",
                value: totalImovel,
                percent: Number(imovelPercentual.toFixed(1)),
                color: '#46BFBD',
            },
            {
                name: "Embarcações",
                value: totalEmbarcacao,
                percent: Number(embarcacaoPercentual.toFixed(1)),
                color: '#BFBFBF',
            },
        ];

        return data;

    },[totalVeiculos,totalImovel,totalEmbarcacao]);

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

    return (
        <Container>
            <ContentHeader title='Dashboard' lineColor="">
                <SelectInput options={meses} onChange={(e) => handleMesSelecionado(e.target.value)} defaultValue={mesSelecionado} />
                <SelectInput options={anos} onChange={(e) => handleAnoSelecionado(e.target.value)} defaultValue={anoSelecionado} />
            </ContentHeader>

            <Content>
                <WalletBox 
                    title="Saldo"
                    valor={saldo}
                    footerlabel={`Valor atualizado com base no mês ${("0" + mesSelecionado).slice(-2)} de ${anoSelecionado}.`}
                    icon="dolar"
                    color="#4E41F0"
                />

                <WalletBox 
                    title="Entradas"
                    valor={totalEntradas}
                    footerlabel={`Valor atualizado com base no mês ${("0" + mesSelecionado).slice(-2)} de ${anoSelecionado}.`}
                    icon="arrowUp"
                    color="#F7931B"
                />

                <WalletBox 
                    title="Saídas"
                    valor={totalSaidas}
                    footerlabel={`Valor atualizado com base no mês ${("0" + mesSelecionado).slice(-2)} de ${anoSelecionado}.`}
                    icon="arrowDown"
                    color="#E44C4E"
                />

                {/* <MessageBox 
                    title={message.title}
                    description={message.description}
                    icon={message.icon}
                    footerText={message.footerText}
                /> */}

                <PatrimonioChart data={contaAtivos}/>

                <PieCharts data={percentSaidaVersusEntradas} />
            </Content>
        </Container>
    );
}

export default Dashboard;