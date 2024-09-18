import { useState } from "react";
import { GitHubRepo, GitHubUserProfile } from "../types";
import { searchUser } from "../api/fetchUser";
import { fetchRepos } from "../api/fetchRepos";

export function useUser() {
  const [username, setUsername] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [userProfile, setUserProfile] = useState<GitHubUserProfile | null>(
    null
  );
  const [repos, setRepos] = useState<GitHubRepo[] | null>(null);
  const [showAllRepos, setShowAllRepos] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "") return;
    setLoading(true);
    setError(null);
    setUserProfile(null);
    setRepos([]);

    try {
      const user = await searchUser(username);

      if (user) {
        setUserProfile(user);
        const repos = await fetchRepos(username);
        setRepos(showAllRepos ? repos : repos?.slice(0, 4) ?? []);
      } else {
        setError("User not found");
      }
    } catch (error) {
      console.error(error);
      setError("User not found");
    } finally {
      setLoading(false);
    }
  };

  const toggleShowAllRepos = () => {
    setShowAllRepos((prev) => {
      const newShowAllRepos = !prev;

      if (repos) {
        setRepos(newShowAllRepos ? repos : repos.slice(0, 4));
      }
      console.log(newShowAllRepos);
      return newShowAllRepos;
    });
  };

  return {
    username,
    setUsername,
    loading,
    error,
    userProfile,
    handleSubmit,
    repos,
    showAllRepos,
    toggleShowAllRepos,
  };
}
