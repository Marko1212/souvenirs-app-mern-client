import axios from 'axios';

const API = axios.create({baseURL: "http://localhost:5000"});

// const API = axios.create({baseURL: "https://souvenirs-app-mern.herokuapp.com"});


export const fetchPosts = () => API.get('/posts');

export const getNumberOfPosts = () => API.get(`/posts/countPosts`);

export const createPost = (newPost) => API.post('/posts', newPost);

export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);

export const deletePost = (id) => API.delete(`/posts/${id}`);

export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post('/user/signin', formData);

export const signUp = (formData) => API.post('/user/signup', formData);







