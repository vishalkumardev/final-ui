import { useState } from "react";

const useApi = () => {
  const [loading, setloading] = useState(false);
  const [loadingPercentage, setloadingPercentage] = useState(0);

  const getApi = async (params: string) => {
    setloadingPercentage(0);
    setloading(true);
    setloadingPercentage(30);
    const response = await fetch(params, {});
    setloadingPercentage(50);
    const data = await response.json();
    setloadingPercentage(80);
    setloading(false);
    setloadingPercentage(100);
    return data;
  };

  return { getApi, loading, loadingPercentage };
};

export { useApi };
