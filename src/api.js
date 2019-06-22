import axios from "axios";

export default {
  dev : {
    testResults: () => 
        axios.get("/results/dev.json").then(res => res.data)
  },
  sit : {
    testResults: () => 
        axios.get("/results/sit.json").then(res => res.data)
  },
  uat : {
    testResults: () => 
        axios.get("/results/uat.json").then(res => res.data)
  }

}