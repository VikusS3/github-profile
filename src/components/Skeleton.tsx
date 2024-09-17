import { NotFound } from "./NotFound";

export function Skeleton({ error }: { error: string | null }) {
  return (
    <main className="w-full max-w-[1280px] mt-32 px-16">
      {error ? (
        <NotFound />
      ) : (
        <>
          {/* Skeleton Section */}
          <section className="flex justify-start items-end gap-12">
            <div className="bg-gray-600 w-fit p-2 rounded-2xl">
              <div className="w-32 h-32 rounded-2xl bg-gray-600 animate-pulse"></div>{" "}
              {/* Avatar Skeleton */}
            </div>
            <ul className="flex mb-2 gap-20">
              <li>
                <div className="bg-gray-600 w-[100px] h-[60px] rounded-2xl animate-pulse"></div>{" "}
                {/* Followers Skeleton */}
              </li>
              <li>
                <div className="bg-gray-600 w-[100px] h-[60px] rounded-2xl animate-pulse"></div>{" "}
                {/* Following Skeleton */}
              </li>
              <li>
                <div className="bg-gray-600 w-[100px] h-[60px] rounded-2xl animate-pulse"></div>{" "}
                {/* Location Skeleton */}
              </li>
            </ul>
          </section>

          <section className="mt-5">
            <div className="flex flex-col gap-2">
              <div className="w-[200px] h-[40px] bg-gray-600 animate-pulse rounded-md"></div>{" "}
              {/* Name Skeleton */}
              <div className="w-[300px] h-[30px] bg-gray-500 animate-pulse rounded-md"></div>{" "}
              {/* Bio Skeleton */}
              <div className="mt-5 w-[150px] h-[40px] bg-gray-600 animate-pulse rounded-md mb-10"></div>{" "}
              {/* Repositories Skeleton */}
            </div>

            {/* Repositories Skeleton */}
            <ul className="space-y-4 mt-5 grid grid-cols-2 justify-center items-center gap-5">
              <li className="bg-gray-600 h-[80px] rounded-md animate-pulse"></li>
              <li className="bg-gray-600 h-[80px] rounded-md animate-pulse"></li>
              <li className="bg-gray-600 h-[80px] rounded-md animate-pulse"></li>
              <li className="bg-gray-600 h-[80px] rounded-md animate-pulse"></li>
            </ul>
          </section>
        </>
      )}
    </main>
  );
}
