export const API_BASE_URL = import.meta.env.PROD || import.meta.env.VITE_DEV_REMOTE == "REMOTE" 
    ? import.meta.env.VITE_BACKEND_SERVER + "api/" 
    : "http://localhost:8300";