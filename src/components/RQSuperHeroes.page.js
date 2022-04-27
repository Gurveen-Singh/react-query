import { Link } from "react-router-dom";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("success", data);
  };

  const onError = (error) => {
    console.log(error);
  };

  const { isLoading, data, error, isError, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

  console.log(isLoading, isFetching);

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <button onClick={refetch}>Fetch Heroes</button>
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
      {/* {data.map((hero) => {
        return <div key={hero}>{hero}</div>;
      })} */}
    </>
  );
};
