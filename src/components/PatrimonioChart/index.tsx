import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { MdHome, MdLocalCarWash, MdDirectionsBoat, MdFlight } from 'react-icons/md';

import { Container, SideLef,LegendContainer, Legend, SideRight } from './styles';

interface IPieChartsProps {
    data: {
        name: string;
        value: number;
        percent: number;
        color: string;
    }[]
}

const PatrimonioChart: React.FC<IPieChartsProps> = ({data}) => {

    return (
        <Container>
            <SideLef>        
                <span>Patrimônio</span>      
                <LegendContainer>                
                   <MdLocalCarWash color="#FDB45C" fontSize="20px"/>
                   <MdHome color="#46BFBD" fontSize="20px" />
                   <MdDirectionsBoat color="#BFBFBF" fontSize="20px" />
                   <MdFlight color="#00688B" fontSize="20px" />
                </LegendContainer>
            </SideLef>

            <SideRight>
                <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                    data={data}
                                    startAngle={180}
                                    endAngle={0}
                                    innerRadius={40}
                                    outerRadius={50}
                                    fill="#8884d8"
                                    paddingAngle={3}
                                    dataKey="value"                              
                                    >
                                    {data.map((item) => (
                                        <Cell key={item.name} fill={item.color} />
                                    ))}
                                </Pie>
                        </PieChart>
                    </ResponsiveContainer>
            </SideRight>
        </Container>        
    );
}

export default PatrimonioChart;