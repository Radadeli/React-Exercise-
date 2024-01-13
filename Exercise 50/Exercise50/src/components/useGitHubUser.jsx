import { useState, useEffect } from "react";

const useGithubUser = (username) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchGitHubUser = async (username) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();

      setData(json);
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (username) {
      fetchGitHubUser(username);
    }
  }, [username]);

  return { data, loading, error, fetchGitHubUser };
};

export default useGithubUser;
