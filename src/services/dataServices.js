import api from "../api";

export const devData = () => api.dev.testResults();

export const sitData = () => api.sit.testResults();

export const uatData = () => api.uat.testResults();