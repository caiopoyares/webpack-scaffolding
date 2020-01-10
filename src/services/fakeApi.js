import axios from "axios";

export default async payload => {
  const cep = await axios("https://viacep.com.br/ws/04722010/json/").then(
    d => d.data
  );

  return cep;
};
