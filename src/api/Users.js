import apiCall from './apiCall';

export const fetchUsers = async (results) => {
  const response = await apiCall.get(`/api?results=${results}`);
  return response.data;
};
