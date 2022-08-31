import { useCallback, useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://192.168.1.14:3333";
const useAxiosFetch = (url) => {
    const [status, setStatus] = useState("idle");
    const [response, setResponse] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        try {
            const result = await axios.get(url);
            setResponse(result?.data);
            setStatus("resolved");
        } catch (error) {
            setStatus("rejected");
            setError(error.response);
        }
    }, [url]);
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { status, response, error };
};

export default useAxiosFetch;
