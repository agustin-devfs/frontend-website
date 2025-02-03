import { useEffect, useState } from "react";

interface ServiceHero {
  titleHero: string;
  textHero: string;
  buttonIzq: string;
  buttonDer: string;
}

const useHeroList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hero, setHeros] = useState<ServiceHero[]>([]);

  useEffect(() => {
    const fetchHeros = async () => {
      try {
        const response = await fetch("/api/hero");
        const data = await response.json();
        const transformedHeros: ServiceHero[] = data.data.map((Hero: ServiceHero) => ({
          title: Hero.titleHero,
          texto: Hero.textHero,
          buttonIzq: Hero.buttonIzq,
          buttonDer: Hero.buttonDer,
        }));
        setHeros(transformedHeros);
      } catch (error) {
        console.error("Error fetching hero:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeros();
  }, []);

  return { isLoading, hero };
};

export default useHeroList;
