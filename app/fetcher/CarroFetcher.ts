import { Carro } from "../model/Carro";

export async function getAllCarros(): Promise<Carro[]> {
  const res = await fetch("https://minhaapi.com/carro");
  return res.json();
}
