import { useContext } from 'react';
import { CountContext } from './App';
import OtherChild from './OtherChild';


const Child = () => {
    const {count} = useContext(CountContext)

    return (
        <div>
            <h1>{count}</h1>
            <OtherChild />
        </div>
    );
}

export default Child;