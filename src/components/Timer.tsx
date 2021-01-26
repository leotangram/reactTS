import { useEffect, useRef, useState } from "react";

interface TimeProps {
  miliseconds: number;
  seconds?: number;
}

const Timer = ({ miliseconds }: TimeProps) => {
  const [seconds, setSeconds] = useState(0);
  const ref = useRef<NodeJS.Timeout>();

  useEffect(() => {
    ref.current && clearInterval(ref.current);
    ref.current = setInterval(
      () => setSeconds((second) => second + 1),
      miliseconds
    );
  }, [miliseconds]);

  return (
    <>
      <h4>
        Timer: <small>{seconds}</small>
      </h4>
    </>
  );
};

export default Timer;
