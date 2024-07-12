import axios from "axios"
import { http } from "./httpService"

export async function getCategoriesApi(){
    return await http.get("/category/list");
}
