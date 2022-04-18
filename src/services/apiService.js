import axios from "axios";

const postsApi = 'http://localhost:8080/api/v1/posts';

const getPosts = () => axios.get(`${postsApi}`);

const getPostById = (postId) => axios.get(`${postsApi}/${postId}`);

const savePost = (postData) => axios.post(`${postsApi}`, postData);

const deletePostById = (postId) => axios.delete(`${postsApi}/${postId}`);

const apiService = {
    getPosts, 
    getPostById, 
    deletePostById, 
    savePost
};
export default apiService;