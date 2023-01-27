import axios from 'axios';

const key = 'AIzaSyCKQ_v99K1CIvsKRPgGgjoPqV8-9Bx__YQ'

const API = {


    readAll: async (query, videoCaption, videoDefinition, nextPage) => {
        try {
            const authAxios = axios.create({
                baseURL: 'https://www.googleapis.com/youtube/v3/search',
                    params:{
                        key: key,
                        type: 'video',
                        q: query,
                        videoCaption: videoCaption,
                        videoDefinition: videoDefinition,
                        pageToken:nextPage,
                    }
                

            })
            const response = await authAxios.get()
            return response.data;
        } catch (err) {
            return err.response.data;
        }
    },

    read: async (path, id) => {
        const authAxios = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3',

            params: {
                key: key
            }
        })

        try {
            const response = await authAxios.get(`https://www.googleapis.com/youtube/v3${path}/${id}`)
            return response.data;
        } catch (err) {
            return err.response.data;
        }
    },
    create: async (path, data) => {
        const authAxios = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3',

            params: {
                key: key
            }
        })

        try {
            const response = await authAxios.post(`https://www.googleapis.com/youtube/v3${path}&key=AIzaSyD9Yx5RipcaCg8ytHreZm5NIxXhf-QF1VQ`, data)
            return response.data;
        } catch (err) {
            return err.response.data;
        }
    },
    update: async (path, data, id) => {
        const authAxios = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3',

            params: {
                key: key
            }
        })

        try {
            const response = await authAxios.post(`https://www.googleapis.com/youtube/v3${path}/${id}`, data)
            return response.data;
        } catch (err) {
            return err.response.data;
        }
    },
    delete: async (path, data) => {
        const authAxios = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3',

            params: {
                key: key,
            }
        })

        try {
            const response = await authAxios.delete(`https://www.googleapis.com/youtube/v3${path}`, data)
            return response.data;
        } catch (err) {
            return err.response.data;
        }
    },

}



export default API;