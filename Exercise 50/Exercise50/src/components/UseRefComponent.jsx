import  { useEffect, useRef } from "react";

export function UseEffectComponent() {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      console.log('Component mounted for the first time!');
      isMounted.current = true;
    }
  }, []);

  return (
    <div>
      <h1>Component with Effect</h1>
    </div>
  );
}
