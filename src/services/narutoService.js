import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://dattebayo-api.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    }
});

apiClient.interceptors.response.use(
    response => response,
    error => {
        // Tratamento de erros
        console.error('API Error:', error.response);
        return Promise.reject(error);
    }
);

const narutoService = {
    getAllCharacters() {
        return apiClient.get(`/characters?limit=2000`)
    },
    getCharacterById(id) {
        return apiClient.get(`/characters/${id}`)
    },
};

export default narutoService;