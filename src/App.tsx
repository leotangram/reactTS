import Counter from "./components/Counter";
import User from "./components/User";
import TimerFather from "./components/TimerFather";

function App() {
  return (
    <>
      <h1>Hola mundo - TS</h1>
      <h2>useState:</h2>
      <hr />
      <Counter />
      <User />
      <h2>useEffect - useRef:</h2>
      <hr />
      <TimerFather />
    </>
  );
}

export default App;
