import { useEffect, useState } from "react";

export interface ServiceTestimonial {
  author: string;
  position: string;
  quote: string;
}

const useTestimonialList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [testimonials_data, setTestimonials] = useState<ServiceTestimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("/api/testimonials");
        const data = await response.json();
        const transformedTestimonials: ServiceTestimonial[] = data.data.map((testimonial: ServiceTestimonial) => ({
          author: testimonial.author,
          position: testimonial.position,
          quote: testimonial.quote,
        }));
        setTestimonials(transformedTestimonials);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
  
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return { isLoading, testimonials_data };
};

export default useTestimonialList;
