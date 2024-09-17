import { Skeleton } from "./components/Skeleton";
import { UserData } from "./components/UserData";
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
        <div className="flex bg-[#20293A] w-96 items-center gap-3 mx-auto mt-8 px-5 py-3 rounded-lg text-[#364153]">
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

      {loading ? (
        <Skeleton error={error} />
      ) : (
        <UserData userProfile={userProfile} repos={repos} error={error} />
      )}
    </div>
  );
}

export default App;
