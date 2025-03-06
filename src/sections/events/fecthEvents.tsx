import { useEffect, useState } from 'react';
// Definir la interfaz de los datos que devuelve la API
interface ServiceEvent {
  title: string;
  description: string;
  date: string;
  imageSrc: string;
  imageAlt: string;
}

const useEventList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [events_data, setEvents] = useState<ServiceEvent[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events');
        const data = await response.json();
        
        const transformedEvents: ServiceEvent[] = 
          data.data.map((event: ServiceEvent) => ({
              title: event.title,
              description: event.description,
              date: event.date,
              imageSrc: event.imageSrc,
              imageAlt: event.imageAlt,
            }))
        setEvents(transformedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return { isLoading, events_data };
};

export default useEventList;
