import {MutableRefObject, useEffect, useState} from "react";

const useOnScreen = <T extends Element | null>(ref: MutableRefObject<T>, rootMargin = "0px") => {
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
            }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
	        ref.current && observer.unobserve(ref.current);
        };
    }, []);
    return isIntersecting;
}

export default useOnScreen;