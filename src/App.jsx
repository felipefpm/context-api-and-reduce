import {useReducer, createContext} from 'react';
import Child from './Child';

export const CountContext = createContext;


function App() {
  const countReducer = (state, action) => {
    switch (action) {
      case "INCREMENT":
        return state++;
      case "DECREMENT":
        return state--;    
      default:
        return state;
    }
  };

  const countInitialValue = 0;

  const [count, setCount] = useReducer(countReducer, countInitialValue);

  return (
    <div>
      <h1>Oi</h1>

      <CountContext.Provider value={{count, setCount}}>
        <Child />
      </CountContext.Provider>

    </div>
  );
}

export default App;
