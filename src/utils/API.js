import axios from "axios";

const API = axios.create({
  baseURL: 'http://localhost:5500', 
  withCredentials: true
});

API.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    
    // Skip if it's the refresh endpoint itself
    if (originalRequest.url === '/api/auth/refresh') {
      return Promise.reject(error);
    }
    
    // Handle 401 errors
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        // Try to refresh token
        await axios.get(`${API.defaults.baseURL}/api/auth/refresh`, {
          withCredentials: true
        });
        
        // Retry the original request
        return API(originalRequest);
      } catch (refreshError) {
        // Refresh failed - but DON'T redirect automatically!
        // Just let the request fail
        
        console.log('Token refresh failed, but not redirecting');
        return Promise.reject(refreshError);
      }
    }
    
    return Promise.reject(error);
  }
);

export default API;