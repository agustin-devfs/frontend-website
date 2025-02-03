import { ReactNode, useEffect, useState } from "react";

interface ServiceHero {
  buttonDer: ReactNode;
  buttonIzq: ReactNode;
  texto: ReactNode;
  title: ReactNode;
  titleHero: string;
  textHero: string;
  buttonL: string;
  buttonR: string;
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
          buttonIzq: Hero.buttonL,
          buttonDer: Hero.buttonL,
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
