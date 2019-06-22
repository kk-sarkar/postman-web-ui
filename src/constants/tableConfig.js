export const OverallTableConfig = {
	
	columns : 	[
				  { title: "ID", field: "requestId", width: 180 },
				  { title: "Service", field: "service", width: 250},
				  { title: "Operation", field: "operation", width: 250},
				  { title: "Result", field: "result", width: 180, formatter: "tickCross"},
                  { title: "Time SLA", field: "timeSLA", width: 180,  formatter: "tickCross"},
                  { title: "Time (ms)", field: "time", width: 180},
				  { title: "Error Code", field: "errorCode", width: 180},
                  { title: "Error Message", field: "errorMessage", width: 350},
                  { title: "Endpoint", field: "endpoint", width: 1250}
				],
	options : {
				movableRows: true,
		  		pagination:"local",
		  		paginationSize: 20
	}

};

export const ServiceAveragesTableConfig = {
	
	columns : 	[
				  { title: "Service", field: "service", width: 250},
				  { title: "Operation #", field: "countOperation", width: 160},
				  { title: "Request #", field: "countRequests", width: 160},
                  { title: "Success #", field: "countSuccess", width: 160},
				  { title: "Failure #", field: "countFailure", width: 160},
				  { title: "SLA Failure #", field: "countSLAFailure", width: 160},
                  { title: "Avg. Time (ms)", field: "avgTime", width: 180},
				  { title: "Highest Time (ms)", field: "highTime", width: 180},
				  { title: "Lowest Time (ms)", field: "lowTime", width: 180}
				]

};

export const OperationsAveragesTableConfig = {
	
	columns : 	[
				  { title: "Operation", field: "operation", width: 290},
				  { title: "Request #", field: "countRequests", width: 160},
                  { title: "Success #", field: "countSuccess", width: 160},
				  { title: "Failure #", field: "countFailure", width: 160},
				  { title: "SLA Failure #", field: "countSLAFailure", width: 160},
                  { title: "Avg. Time (ms)", field: "avgTime", width: 180},
				  { title: "Highest Time (ms)", field: "highTime", width: 180},
				  { title: "Lowest Time (ms)", field: "lowTime", width: 180}
				]

};



