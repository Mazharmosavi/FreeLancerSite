import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getCategoriesApi } from "../services/categoryServices";

export default function useCategories() {
  const { data, isLoading, error, isPending, isFetched, isSuccess } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoriesApi,
  });
  //const {data} = axios.get("http://localhost:5000/api/category/list").then((data)=>data.data)

  /* console.log(isFetched);
  console.log(isPending);
  console.log(isSuccess)*/

  if (isSuccess) {
    console.log("done");
    //console.log(data.data.data.categories);
    const { categories: rawCategories } = data.data.data || [];
    // console.log(rawCategories);

    const categories = rawCategories.map((item) => ({
      label: item.title,
      value: item._id,
    }));
    // console.log(categories);

    const transformedCategories = rawCategories.map((item) => ({
      label:item.title ,
      value:item.englishTitle
    }));
    // console.log(categories);
    console.log(transformedCategories);

    return {
      isLoading,
      error,
      categories,
      transformedCategories,
      isFetched,
      isSuccess,
    };
  }
}
