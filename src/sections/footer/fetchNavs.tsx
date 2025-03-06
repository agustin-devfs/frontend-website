
import {  useEffect, useState } from "react";

 export interface ServiceNav {
  linkNav: string ;
  iconNav:string ;
  nav: string ;

}

const useNavList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [nav_data, setNavs] = useState<ServiceNav[]>([]);

  useEffect(() => {
    const fetchNavs = async () => {
      try {
        const response = await fetch("/api/nav");
        const data = await response.json();
        const transformedNavs: ServiceNav[] = data.data.map(
          (Nav: ServiceNav) => ({
            linkNav: Nav.linkNav,
            nav: Nav.nav,
            iconNav: Nav.iconNav
          })
        );
        setNavs(transformedNavs);
      } catch (error) {
        console.error("Error fetching nav:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNavs();
  }, []);

  return { isLoading, nav_data };
};

export default useNavList;
