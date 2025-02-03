import { useEffect, useState } from "react";

interface ServiceTestimonial {
  author: string;
  position: string;
  quote: string;
}

const useTestimonialList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [testimonials, setTestimonials] = useState<ServiceTestimonial[]>([]);

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

  return { isLoading, testimonials };
};

export default useTestimonialList;
