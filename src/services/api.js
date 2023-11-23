import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  //withCredentials:true
  //opiconal colocar aqui, melhor colocar nas rotas onde tera troca de informações
});