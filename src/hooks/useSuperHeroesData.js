import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    // cacheTime: 1000,
    // staleTime: 5000,
    // refetchOnMount: true,
    // refetchOnWindowFocus: true,
    // refetchInterval: 1000,
    // refetchIntervalInBackground: 100,
    // enabled: false,
    onSuccess,
    onError,
    // select: (data) => {
    //   const superHeroesName = data.data.map((hero) => hero.name);
    //   return superHeroesName;
    // },
  });
};
