import { Mockdata } from '@/app/core/utils/mockdata/Mockdata';
import { useEffect, useState } from 'react';

// Definir la interfaz de los datos que devuelve la API
interface ServiceCard {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const useCardList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cards_data, setCards] = useState<ServiceCard[]>([]); 

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('/api/cards');
        const data = await response.json();
        const transformedCards: ServiceCard[] = data.data?.length
        ? data.data.map((card: ServiceCard) => ({
          title: card.title,
          description: card.description,
          imageSrc: card.imageSrc,
          imageAlt: card.imageAlt,
        })) : Mockdata.cards;
        setCards(transformedCards);
      } catch (error) {
        console.error('Error fetching cards:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCards();
  }, []);

  return { isLoading, cards_data };
};

export default useCardList;
