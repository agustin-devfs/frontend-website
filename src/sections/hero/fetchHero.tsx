import { useEffect, useState } from "react";

interface ServiceHero {
  title: string;
  text: string;
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
        const transformedHeros: ServiceHero[] = data.data.map((Hero: any) => ({
          title: Hero.title,
          texto: Hero.texto,
          buttonIzq: Hero.botonIzq,
          buttonDer: Hero.botonDer,
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
