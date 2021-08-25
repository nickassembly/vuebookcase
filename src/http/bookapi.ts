import axios from 'axios';
import { Response } from "../models/books";

export default async function (category: string) {

const result = await axios.get<Response>(category);

if(result.status === 200){
    return result.data.works;
}

return undefined;

}