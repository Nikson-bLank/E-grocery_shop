import axios from "axios";
import { useCallback, useEffect, useState } from "react";




const useFetch = (api) => {
  const [isLoading, setIsloading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    setIsloading(true);
    let response = await axios.get("http://192.168.29.146:3333"+api);
    let result = await response.data;
    setIsloading(false);
    setData(result);
  }, [api]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { isLoading, data };
};

export default useFetch;
