import React from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import '../../styles/StackedHorizontalBarChart.css';

const width = 800;
const height = 200;

const StackedHorizontalBarChart = (props) => {

		const { data, config } = props;

		return (
			<div className="chart-container">
				<BarChart width={width} height={height} 
							data={data}
							layout="vertical"
							stackOffset={config.stackOffset}
		            		margin={{top: 20, right: 10, left: 50, bottom: 10}}>
		       <CartesianGrid strokeDasharray="3 3"/>
		       <XAxis type="number" dataKey={config.dataKey.xaxis}/>
		       <YAxis type="category" dataKey={config.dataKey.yaxis}/>
		       <Tooltip/>
		       <Legend />
		       <Bar dataKey={config.dataKey.lowerbar} stackId="a" fill="#16174f" />
		       <Bar dataKey={config.dataKey.upperbar} stackId="a" fill="#c43235" />
		      </BarChart>
			</div>
		);
}

StackedHorizontalBarChart.propTypes = {
	data: PropTypes.instanceOf(Array).isRequired,
	config: PropTypes.shape({ subProp: PropTypes.object }).isRequired
}


export default StackedHorizontalBarChart;