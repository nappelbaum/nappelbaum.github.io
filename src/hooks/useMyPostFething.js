import axios from "axios";
import { useState } from "react";

const useMyPostFething = (url, callback) => {
  const [isLoading, setIsLoading] = useState(false);

  const fetching = (data) => {
    setIsLoading(true);
    axios.post(url, data).then((res) => {
      callback(res);
      setIsLoading(false);
    });
  };

  return [fetching, isLoading];
};

export default useMyPostFething;
