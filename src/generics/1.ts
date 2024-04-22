import axios from 'axios';


async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

interface ResponseObject {
  name: string;
  age: number;
}

async function getObject() {
  try {
    const data = await fetchData<ResponseObject>("");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getObject();
