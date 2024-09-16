import { GitHubUserProfile } from "../types";

export async function searchUser(username: string) {
  if (username === "") return null;

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    const user: GitHubUserProfile = data as GitHubUserProfile;

    return user;
  } catch (error) {
    console.error(error);
  }
}
