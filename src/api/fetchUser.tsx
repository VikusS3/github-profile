import { GitHubUserProfile } from "../types";

export async function searchUser(username: string) {
  if (username === "") return null;

  try {
    // await new Promise((resolve) => setTimeout(resolve, 5000)); // Simular una carga lenta
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    const user: GitHubUserProfile = data as GitHubUserProfile;

    return user;
  } catch (error) {
    throw new Error("User not found" + error);
  }
}
