import { GitHubRepo, GitHubUserProfile } from "../types";
import { Badget } from "./Badget";
import { NotFound } from "./NotFound";
import { RepoList } from "./RepoList";

export function UserData({
  userProfile,
  repos,
  error,
}: {
  userProfile: GitHubUserProfile | null;
  repos: GitHubRepo[] | null;
  error: string | null;
}) {
  return (
    <main className="mx-auto max-w-[1280px] mt-32 ">
      {error ? (
        <NotFound />
      ) : (
        <>
          <section className="flex sm:justify-start items-center  lg:items-end gap-12 md:flex-row flex-col">
            <div className="bg-[#20293a] w-fit p-2 rounded-2xl">
              <img
                src={userProfile?.avatar_url || "/vite.svg"}
                alt={`${userProfile?.name} avatar`}
                className="w-32 h-auto rounded-2xl"
              />
            </div>
            <ul className="flex mb-2 gap-20 flex-wrap justify-center items-center">
              <li>
                {" "}
                <Badget text="Followers" info={userProfile?.followers} />
              </li>
              <li>
                <Badget text="Following" info={userProfile?.following} />
              </li>
              <li>
                {" "}
                <Badget text="location" info={userProfile?.location} />
              </li>
            </ul>
          </section>
          <section className="mt-5 sm:p-0 p-2">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl text-[#CDD5E0]">{userProfile?.name}</h1>
              <h2 className="text-xl text-[#98A3B7] max-w-4xl">
                {userProfile?.bio}
              </h2>
              <span className="mt-5 text-2xl text-zinc-400 mb-10">
                Repositories:{" "}
                {userProfile?.public_repos ? userProfile?.public_repos : 0}
              </span>
            </div>

            {repos && <RepoList repos={repos} />}
          </section>
        </>
      )}
    </main>
  );
}
