import { GitHubRepo } from "../types";

export async function fetchRepos(username: string) {
  if (username === "") return null;

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    const data = await response.json();
    const repos: GitHubRepo[] = data as GitHubRepo[];
    return repos;
  } catch (error) {
    console.error(error);
  }
}
