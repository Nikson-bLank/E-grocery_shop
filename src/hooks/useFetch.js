import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useFetch = (api) => {
    const [isLoading, setIsloading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const fetchData = useCallback(async () => {
        try {
            setIsloading(true);
            let response = await axios.get("http://192.168.29.146:3333" + api);
            let result = await response.data;
            setIsloading(false);
            if (response.data.status !== "success") return setData([]);
            setData(result);
            setMessage(response.data.message);
        } catch (error) {
            console.log(error.response);
            setError(error.response);
        }
    }, [api]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { isLoading, data, error, message };
};

export default useFetch;
