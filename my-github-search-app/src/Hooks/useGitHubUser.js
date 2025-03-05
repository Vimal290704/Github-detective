import { useEffect, useState } from "react";

const useGitHubData = (username, detailType) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(username, detailType);
    if (!username) {
      setData(null);
      setError(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    setData(null);

    let endpoint = `https://api.github.com/users/${username}`;
    if (detailType !== "overview") {
      endpoint += `/${detailType}`;
    }
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          setError(`Error: ${response.status} - ${response.statusText}`);
          setLoading(false);
          return;
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username, detailType]);

  return { data, error, loading };
};

export default useGitHubData;
