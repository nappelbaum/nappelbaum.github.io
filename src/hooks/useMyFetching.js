import axios from "axios";
import { useState } from "react";

const useMyFetching = (url, callback) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetching = () => {
    axios
      .get(url)
      .then((res) => {
        callback(res);
        setIsLoading(false);
      })
      .catch((err) => setError(true));
  };

  return [fetching, isLoading, error];
};

export default useMyFetching;
