import Counter from './components/Counter'
import User from './components/User'
import TimerFather from './components/TimerFather'
import CounterReducer from './components/CounterReducer'
import Form from './components/Form'
import Form2 from './components/Form2'

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
      <h2>useReducer</h2>
      <hr />
      <CounterReducer />
      <h2>customHooks</h2>
      <hr />
      <Form />
      <hr />
      <Form2 />
    </>
  )
}

export default App
