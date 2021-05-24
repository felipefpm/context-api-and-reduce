import { useContext } from 'react';
import { CountContext } from './App';


const OtherChild = () => {

    function increment(){
        return setCount("INCREMENT");
    }

    function decrement(){
        return setCount("DECREMENT");
    }
    
    const { setCount } = useContext(CountContext);

    return (
        <div>
            <button onClick={increment}>
                Increment
            </button>
            <button onClick={decrement}>
                Decrement
            </button>
        </div>
    );
}

export default OtherChild;