import { useEffect, useState } from "react";

export const useFetch = <T>(endpoint: string) => {
  const [data, setData] = useState<T>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.API_URL}/${endpoint}`);
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, [endpoint]);

  return { data };
};
