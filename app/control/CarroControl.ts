import { listarCarrosOrdenados } from "../service/CarroService";

export async function obterListaCarros() {
  return listarCarrosOrdenados();
}
