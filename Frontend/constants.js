export const axiosInstance = axios.create({
    baseURL: 'https://localhost:7233/api',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3000',
    },
  });