import { GitHubRepo } from "../types";

interface RepoListProps {
  repos: GitHubRepo[] | null;
}

export function RepoList({ repos }: RepoListProps) {
  const rtf = new Intl.RelativeTimeFormat("en", {
    numeric: "auto",
  });

  function getDaysAgo(dateString: string | Date) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    return rtf.format(-diffInDays, "day");
  }
  return (
    <ul className="grid grid-cols-2 justify-center items-center gap-5 mb-10">
      {repos?.map((repo: GitHubRepo) => (
        <li
          key={repo.id}
          className="bg-gradient-to-r from-[#111729] to-[#1D1B48] rounded-2xl text-[#CDD5E0] p-5"
        >
          <a href={repo.html_url} target="_blank" rel="noreferrer">
            {repo.name}
          </a>
          <h1 className="opacity-85">
            {repo.description ? repo.description : "No description provided"}
          </h1>
          <div className="flex mt-4 gap-5">
            <span className="flex gap-1">
              <img src="/Nesting.svg" alt="" />
              {repo.forks_count}
            </span>
            <span className="flex gap-1">
              <img src="/Star.svg" alt="" />
              {repo.stargazers_count}
            </span>

            <p>Updated: {getDaysAgo(repo.updated_at)} </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
