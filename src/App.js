import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './styles/App.css';
import Header from './components/layouts/Header';
import ContentPage from './components/pages/ContentPage';
import { devData, sitData, uatData } from './services/dataServices';

const appData = {

    dev : {
        overallData:  [
            {
                requestId: 'Request1',
                service: 'Accounts Payable',
                operation: 'GetPassThruAccounts',
                endpoint: 'https://dev-ils.wellsfargo.net/json/get/getPassThru/900890876',
                time: 4000,
                result: true,
                timeSLA: false,
                errorCode: 'WS7777',
                errorMessage: 'Invalid User Id'
            },
            {
                requestId: 'Request1',
                service: 'Accounts Payable',
                operation: 'GetPassThruAccounts',
                endpoint: 'https://dev-ils.wellsfargo.net/json/get/getPassThru/900890876',
                time: 4000,
                result: false,
                timeSLA: true,
                errorCode: 'WS7777',
                errorMessage: 'Invalid User Id'
            }
        ],
        overallChartData: [
            {
                testName: 'HTTP 200', success: 40, failure: 10
            },
            {
                testName: 'Estimated SLA', success: 35, failure: 15
            }
        ],
        serviceAverages: [
            { 
                service: 'Accounts Payable', 
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
                service: 'Accounts Payable', 
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
    },

    sit: {
        overallData:  [
            {
                requestId: 'Request1',
                service: 'Accounts Payable',
                operation: 'GetPassThruAccounts',
                endpoint: 'https://sit-ils.wellsfargo.net/json/get/getPassThru/900890876',
                time: 4000,
                result: true,
                timeSLA: false,
                errorCode: 'WS7777',
                errorMessage: 'Invalid User Id'
            },
            {
                requestId: 'Request1',
                service: 'Accounts Payable',
                operation: 'GetPassThruAccounts',
                endpoint: 'https://sit-ils.wellsfargo.net/json/get/getPassThru/900890876',
                time: 4000,
                result: false,
                timeSLA: true,
                errorCode: 'WS7777',
                errorMessage: 'Invalid User Id'
            }
        ],
        overallChartData: [
            {
                testName: 'HTTP 200', success: 40, failure: 10
            },
            {
                testName: 'Estimated SLA', success: 35, failure: 15
            }
        ],
        serviceAverages: [
            { 
                service: 'Accounts Payable', 
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
                service: 'Accounts Payable', 
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
    },

    uat: {
        overallData:  [
            {
                requestId: 'Request1',
                service: 'Accounts Payable',
                operation: 'GetPassThruAccounts',
                endpoint: 'https://uat-ils.wellsfargo.net/json/get/getPassThru/900890876',
                time: 4000,
                result: true,
                timeSLA: false,
                errorCode: 'WS7777',
                errorMessage: 'Invalid User Id'
            },
            {
                requestId: 'Request1',
                service: 'Accounts Payable',
                operation: 'GetPassThruAccounts',
                endpoint: 'https://uat-ils.wellsfargo.net/json/get/getPassThru/900890876',
                time: 4000,
                result: false,
                timeSLA: true,
                errorCode: 'WS7777',
                errorMessage: 'Invalid User Id'
            }
        ],
        overallChartData: [
            {
                testName: 'HTTP 200', success: 40, failure: 10
            },
            {
                testName: 'Estimated SLA', success: 35, failure: 15
            }
        ],
        serviceAverages: [
            { 
                service: 'Accounts Payable', 
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
                service: 'Accounts Payable', 
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
    }
};

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			data: appData
		}
    }
    
    componentDidMount() {
        devData().then(data => console.log(data));
        sitData().then(data => console.log(data));
        uatData().then(data => console.log(data));
    }

	render() {

		const { data } = this.state;

		return (
			<div className="">
		      <Router>
		      		<Header />
		      		<Switch>
					  	<Route path="/dev" exact render={( props ) => <ContentPage {...props} data={data.dev} />} />
						<Route path="/sit" exact render={( props ) => <ContentPage {...props} data={data.sit} />} />
						<Route path="/uat" exact render={( props ) => <ContentPage {...props} data={data.uat} />} />
						<Redirect to="/dev" />
		      		 </Switch>
		      </Router>
		    </div>
		);
	}

}

export default App;
