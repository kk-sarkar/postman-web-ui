
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
}

export default appData;