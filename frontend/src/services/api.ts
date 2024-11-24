import axios from 'axios';

// Create an Axios instance with the backend base URL
const api = axios.create({
  baseURL: 'http://localhost:5000', // Backend server address
});

// Fetch orders
export const fetchOrders = async () => {
  const response = await api.get('/api/orders');
  return response.data;
};

// Fetch partners
export const fetchPartners = async () => {
  const response = await api.get('/api/partners');
  return response.data;
};

// Fetch assignment metrics
export const fetchAssignmentsMetrics = async () => {
  const response = await api.get('/api/assignments/metrics');
  return response.data;
};

export default api;
