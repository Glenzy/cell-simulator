import {
  useRef,
  useEffect
} from 'react';

const useInterval = (callback: any, delay: number) => {
  const savedCallback = useRef();

  //persists the callback function
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  //sets up interval
  useEffect(() => {
    function tick() {
      savedCallback.current && savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}