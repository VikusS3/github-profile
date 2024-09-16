import { Badget } from "./components/Badget";
import { RepoList } from "./components/RepoList";
// import data from "./mocks/data.json";
import { useUser } from "./hooks/userUser";

function App() {
  const { error, handleSubmit, setUsername, loading, userProfile, repos } =
    useUser();

  return (
    <div className="flex flex-col justify-center items-center">
      <header className="relative w-full">
        <img
          src="/hero.png"
          alt=""
          className="absolute -z-10 object-contain inset-0 w-full"
        />
        <div className="flex bg-[#20293a] w-96 items-center gap-3 mx-auto mt-8 px-5 py-3 rounded-lg text-[#364153]">
          <button
            className="bg-[#364153] p-2 rounded-lg"
            onClick={handleSubmit}
          >
            <img src="/Search.svg" alt="" />
          </button>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              name="buscador"
              id="buscador"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
              className="bg-transparent w-full text-white focus:outline-none"
            />
          </form>
        </div>
      </header>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <main className="w-full max-w-[1280px] mt-32 px-16">
        <section className="flex justify-start items-end gap-12">
          <div className="bg-[#20293a] w-fit p-2 rounded-2xl">
            <img
              src={userProfile?.avatar_url}
              alt={`${userProfile?.name} avatar`}
              className="w-32 h-auto rounded-2xl"
            />
          </div>
          <ul className="flex mb-2 gap-20">
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
        <section className="mt-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl text-[#CDD5E0]">{userProfile?.name}</h1>
            <h2 className="text-xl text-[#98A3B7]">{userProfile?.bio}</h2>
            <span className="mt-5 text-2xl text-zinc-400 mb-10">
              Repositories:{" "}
              <span className="text-[#CDD5E0]">
                {userProfile?.public_repos}
              </span>
            </span>
          </div>

          {repos && <RepoList repos={repos} />}
        </section>
      </main>
    </div>
  );
}

export default App;
