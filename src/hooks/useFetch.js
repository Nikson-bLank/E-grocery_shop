import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setIsloading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    setIsloading(true);
    let response = await axios.get(url);
    let result = await response.data;
    setIsloading(false);
    setData(result);
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { isLoading, data };
};

export default useFetch;
