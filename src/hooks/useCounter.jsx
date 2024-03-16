import { useState } from "react";

export const useCounter = (initialValue = 0, minValue = 1, maxValue = 100) => {
    const [count, setCount] = useState(initialValue);

    const increment = () => {
        if (count < maxValue) {
            setCount(prevCount => prevCount + 1);
        }
    };

    const decrement = () => {
        if (count > minValue) {
            setCount(prevCount => prevCount - 1);
        }
    };

    return { count, setCount, increment, decrement };
};
