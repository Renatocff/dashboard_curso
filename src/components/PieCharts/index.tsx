import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

import { Container, SideLef,LegendContainer, Legend, SideRight } from './styles';

interface IPieChartsProps {
    data: {
        name: string;
        value: number;
        percent: number;
        color: string;
    }[]
}

const PieCharts: React.FC<IPieChartsProps> = ({data}) => (
    <Container>
        <SideLef>
            <h2>Movimentações</h2>
            <LegendContainer>                
                {
                    data.map((item) => (
                        <Legend key={item.name} color={item.color}>
                            <div>{item.percent ? item.percent : 0}%</div>
                            <span>{item.name}</span>
                        </Legend>
                    ))
                }
            </LegendContainer>
        </SideLef>

        <SideRight>
            <ResponsiveContainer>
                    <PieChart>
                        <Pie data={data} dataKey="percent">  
                            {
                                data.map((item) => (
                                    <Cell key={item.name} fill={item.color} />
                                ))
                            }                        
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
        </SideRight>
    </Container>        
);

export default PieCharts;