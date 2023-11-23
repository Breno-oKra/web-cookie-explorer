import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";
export function SalesReport() {
  useEffect(() => {
    //withCredentials:true para permitir a troca de informação com o backend
    //da api
    api.get("/sales",{withCredentials:true})
    .then((res) => console.log(res.data))
  },[])
  return (
    <Container>
      <h1>Relatório de Vendas</h1>
    </Container>

  )
}