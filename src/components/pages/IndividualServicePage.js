import React from 'react';
import Table from '../display/Table';
import StackedHorizontalBarChart from '../display/StackedHorizontalBarChart';
import { OperationsAveragesTableConfig } from '../../constants/tableConfig';
import { ChartConfig } from '../../constants/chartConfig';
import '../../styles/IndividualServicePage.css';

const IndividualServicePage = ( ) => {

    const name = "Accounts Payable";
    const chartData = [
        {
            testName: 'HTTP 200', success: 40, failure: 10
        },
        {
            testName: 'Estimated SLA', success: 35, failure: 15
        }
    ];
    const operationAverages = [
        { 
            operation: 'GetPassThruAccountDetails', 
            countOperation: 4,
            countRequests: 100,
            countSuccess: 45,
            countFailure: 55,
            countSLAFailure: 10,
            avgTime: 4000,
            highTime: 6000,
            lowTime: 2300
        },
        { 
            operation: 'GetPassThruAccountDetails',  
            countOperation: 4,
            countRequests: 100,
            countSuccess: 45,
            countFailure: 55,
            countSLAFailure: 10,
            avgTime: 4000,
            highTime: 6000,
            lowTime: 2300
        }
    ]

    return (
        <div className="container">
            <div className="service-name-label">{name}</div>
            <div className="content">
                <div className="stats-container">
                    <div className="flex-container">
                        <div>
                            <span className="label">Total Requests</span>
                            <span className="label emphasis">10000</span>
                        </div>
                        <div>
                            <span className="label">Operations #</span>
                            <span className="label emphasis">10</span>
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
                            <span className="label">Highest Time (ms)</span>
                            <span className="label emphasis">400ms</span>
                        </div>
                        <div>
                            <span className="label">Lowest Time (ms)</span>
                            <span className="label emphasis">400ms</span>
                        </div>
                        <div>
                            <span className="label">Average Time</span>
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
                    <StackedHorizontalBarChart data={chartData} config={ChartConfig}/>
                </div>
                <div className="container-fluid mt-4">
                    <div className="section-header">Operation Averages</div>
                    <Table data={operationAverages} config={OperationsAveragesTableConfig}/>
                </div>
            </div>
        </div>
    );
}

export default IndividualServicePage;