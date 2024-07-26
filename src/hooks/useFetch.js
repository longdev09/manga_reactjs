import { useEffect, useState } from "react";
import instance from "../utils/instance";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, serError] = useState(null);

  const fetchApi = async () => {
    try {
      setLoading(true);
      const res = await instance.get(url);
      setData(res.data);
      setLoading(false);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      serError(error);
    }
  };
  // cho sua
  useEffect(() => {
    fetchApi();
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
