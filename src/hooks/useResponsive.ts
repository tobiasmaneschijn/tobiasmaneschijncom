import { useState, useEffect } from "react";
import { mobileBreakpoint } from "./constants";


export const useResponsive = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {

        const handleResize = () => {

            if (window.innerWidth < mobileBreakpoint) {

                setIsMobile(true);

            } else {

                setIsMobile(false);

            }

        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);

    }, []);

    return isMobile;

}