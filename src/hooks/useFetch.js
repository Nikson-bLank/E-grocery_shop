import axios from "axios";
import { useCallback, useEffect, useState } from "react";




const useFetch = (api) => {
  const [isLoading, setIsloading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    setIsloading(true);
    let response = await axios.get(process.env.REACT_APP_DEV_BASE_URL+api);
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
