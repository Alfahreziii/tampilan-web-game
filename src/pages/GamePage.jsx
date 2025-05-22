import { useEffect } from "react";

const GamePage = () => {
    useEffect(() => {
      document.body.classList.add('bg-home');
      return () => {
        document.body.classList.remove('bg-home');
      };
    }, []);
    return (
        <h1>haha</h1>
    )
};

export default GamePage;