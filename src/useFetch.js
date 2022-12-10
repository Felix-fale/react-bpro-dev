import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const abortCont= new AbortController();

    setTimeout(() => {
      fetch(url)
        .then((response) => {
          // console.log(response);
          if (!response.ok) {
            throw Error("Desolé une erreur est survenu ...");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          console.log(err.message);
          setError(err.message);
          setIsLoading(false);
        });
    }, 2000);
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;
