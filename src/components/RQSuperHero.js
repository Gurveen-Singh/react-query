import React from "react";
import { useParams } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

const RQSuperHero = () => {
  const { heroId } = useParams();
  const { isLoading, data, error, isError, isFetching } =
    useSuperHeroData(heroId);

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <>
      <h2>React Query Super Hero Page</h2>
      <div>{data?.data.name}</div>
      <div>{data?.data.alterEgo}</div>
    </>
  );
};

export default RQSuperHero;
