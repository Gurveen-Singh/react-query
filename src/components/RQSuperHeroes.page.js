import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const RQSuperHeroesPage = () => {
  const {
    isLoading,
    data: heroData,
    error,
    isError,
    isFetching,
  } = useQuery("super-heroes", fetchSuperHeroes, {
    // cacheTime: 1000,
    // staleTime: 5000,
    // refetchOnMount: true,
    // refetchOnWindowFocus: true,
    // refetchInterval: 1000,
    // refetchIntervalInBackground: 100,
  });

  console.log(isLoading, isFetching);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {heroData?.data.map((hero) => {
        return <div>{hero.name}</div>;
      })}
    </>
  );
};
