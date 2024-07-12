import { useRef } from "react";
import { useEffect } from "react";
export default function useOutsideClick(handler,listenCaptureing=true){
    const ref = useRef();
    
    useEffect(() => {
      function handleClick(e) {
       if(ref.current && !ref.current.contains(e.target)){
        handler();
       }
      }
      document.addEventListener("click", handleClick,listenCaptureing);
      return ()=>document.removeEventListener("click",handleClick,listenCaptureing)
    }, [handler,listenCaptureing]);

    return {ref};
}