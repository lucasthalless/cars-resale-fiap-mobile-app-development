import { getAllCarros } from "../fetcher/CarroFetcher";
import { Carro } from "../model/Carro";

export async function listarCarrosOrdenados(): Promise<Carro[]> {
  const carros = await getAllCarros();
  return carros.sort((a, b) => b.ano - a.ano);
}
