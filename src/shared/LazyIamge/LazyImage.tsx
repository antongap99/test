import {useEffect, useRef, useState} from "react";
import style from './LazyIamge.module.css'
import useOnScreen from "./hooks/useOnScreen.ts";
import cn from "classnames";

interface  LazyImageProps {
    className?: string;
	src: string,
	alt?: string,
	width: string
	height: string
}


export const LazyImage = ({className, src, alt, width, height}: LazyImageProps) =>{
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const isIntersecting = useOnScreen<HTMLDivElement | null>(containerRef);

    const loadHandler = () => {
        setIsLoaded(true)
    }


    useEffect(() => {
        if(!isIntersecting || isLoaded ) return;
        if(imageRef.current){
            imageRef.current?.addEventListener('load', loadHandler)
        }

        return () => {
            imageRef.current?.removeEventListener('load', loadHandler)

        }
    }, [isIntersecting, isLoaded]);

    return  (
        <div
	        ref={containerRef}
	        className={cn(style.container, {[style.containerLoaded]: isLoaded}, [className])}
        >
	        {
			     isIntersecting  &&
						<img
						    ref={imageRef}
						    className={cn(style.image, {[style.imageLoaded]: isLoaded}) }
						    src={src}
						    alt={alt ? alt: ''}
						    style={{width: width, height: height}}
						/>
            }
        </div>
    )
}

