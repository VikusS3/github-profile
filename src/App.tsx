import { Skeleton } from "./components/Skeleton";
import { UserData } from "./components/UserData";
import { useUser } from "./hooks/userUser";

function App() {
  const {
    error,
    handleSubmit,
    setUsername,
    loading,
    userProfile,
    repos,
    showAllRepos,
    toggleShowAllRepos,
  } = useUser();

  return (
    <div className="flex flex-col w-full justify-items-center justify-center items-center ">
      <img src="/hero.png" alt="" className="absolute -z-10  inset-0 w-full" />
      <header className="relative w-full">
        <div className="flex bg-[#20293A] md:w-96 w-full items-center gap-3 mx-auto mt-8 px-5 py-3 rounded-lg text-[#364153]">
          <button
            className="bg-[#364153] p-2 rounded-lg"
            onClick={handleSubmit}
          >
            <img src="/Search.svg" alt="" />
          </button>
          <form action="" onSubmit={handleSubmit} className="w-full">
            <input
              type="text"
              name="buscador"
              id="buscador"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
              autoFocus
              className="bg-transparent w-full text-white focus:outline-none rounded-md"
            />
          </form>
        </div>
      </header>

      {loading ? (
        <Skeleton error={error} />
      ) : (
        <UserData
          userProfile={userProfile}
          repos={repos}
          error={error}
          showAllRepos={showAllRepos}
          toogleShowAllRepos={toggleShowAllRepos}
        />
      )}
    </div>
  );
}

export default App;
