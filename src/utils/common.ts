import axios from 'axios';

function makeid(length: any) {
  let result = Math.floor(100000 + Math.random() * 900000);
  return result;
}

export { makeid };

export async function CallPythonAPI(params: any) {
  const url: any = process.env.URL2;
  const response = await axios.post(url, params);
  return response.data;
}
