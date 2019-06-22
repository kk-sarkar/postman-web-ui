import React from 'react';
import PropTypes  from 'prop-types';
import MenuHeader from '../layouts/MenuHeader';
import Table from '../display/Table';
import StackedHorizontalBarChart from '../display/StackedHorizontalBarChart';
import { OverallTableConfig, ServiceAveragesTableConfig } from '../../constants/tableConfig';
import { ChartConfig } from '../../constants/chartConfig';
import '../../styles/OverallPage.css';

const OverallPage = (props) => {

    const { overallData, overallChartData, serviceAverages } = props.data;

    return (
        <div className="container">
            <MenuHeader name="Overall" icon="columns" />
            <div className="content">
                <div className="stats-container">
                    <div className="flex-container">
                        <div>
                            <span className="label overall-metric">Expected Response</span>
                            <span className="label emphasis overall-metric">HTTP 200</span>
                        </div>
                        <div>
                            <span className="label overall-metric">Estimated SLA</span>
                            <span className="label emphasis overall-metric">4000 ms</span>
                        </div>
                    </div>
                    <div className="flex-container">
                        <div>
                            <span className="label">Total Requests</span>
                            <span className="label emphasis">10000</span>
                        </div>
                        <div>
                            <span className="label">Runtime errors</span>
                            <span className="label emphasis">2</span>
                        </div>
                        <div>
                            <span className="label">Fatal errors</span>
                            <span className="label emphasis">0</span>
                        </div>
                        <div>
                            <span className="label">Success #</span>
                            <span className="label emphasis">5000</span>
                        </div>
                        <div>
                            <span className="label">Failure #</span>
                            <span className="label emphasis">5000</span>
                        </div>
                        <div>
                            <span className="label">Success %</span>
                            <span className="label emphasis">50%</span>
                        </div>
                        <div>
                            <span className="label">Failure %</span>
                            <span className="label emphasis">50%</span>
                        </div>
                        <div>
                            <span className="label">Average Time (ms)</span>
                            <span className="label emphasis">400ms</span>
                        </div>
                        <div>
                            <span className="label">Delayed Responses #</span>
                            <span className="label emphasis">40</span>
                        </div>
                        <div>
                            <span className="label">Timely Responses #</span>
                            <span className="label emphasis">80</span>
                        </div>
                        <div>
                            <span className="label">Response % exceeding SLA</span>
                            <span className="label emphasis">20%</span>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mt-4">
                    <div className="section-header">Smoke Tests</div>
                    <Table data={overallData} config={OverallTableConfig}/>
                </div>
                <div className="container-fluid mt-4">
                    <StackedHorizontalBarChart data={overallChartData} config={ChartConfig}/>
                </div>
                <div className="container-fluid mt-4">
                    <div className="section-header">Service Averages</div>
                    <Table data={serviceAverages} config={ServiceAveragesTableConfig}/>
                </div>
            </div>
        </div>
    );
}

OverallPage.propTypes = {
    data: PropTypes.shape({ subProp: PropTypes.array }).isRequired
}

export default OverallPage;