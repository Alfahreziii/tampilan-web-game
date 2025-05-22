import { useEffect, useState } from "react";
import Button from "../components/Button";

const GamePage = () => {
    const [selectedGame, setSelectedGame] = useState(null);

    useEffect(() => {
        document.body.classList.add('bg-home');
        return () => {
            document.body.classList.remove('bg-home');
        };
    }, []);

    const games = [
        {
            name: 'Dino Offline',
            image: '/images/dinooffline.png',
            url: 'https://www.crazygames.co.id/game/chrome-dino',
        },
        {
            name: 'Flappy Bird',
            image: '/images/flappybird.png',
            url: 'https://flappybird.io/', // ganti sesuai link game
        },
        {
            name: 'Geometry Dash',
            image: '/images/geometry.png',
            url: 'https://geometrydash.io/', // ganti sesuai link game
        },
    ];

    const handlePlay = () => {
        if (selectedGame) {
            window.open(selectedGame.url, '_blank');
        }
    };

    return (
        <div className="w-full -mb-56">
            <div className="flex justify-center flex-col items-center mt-16">
                {/* Title */}
                <div className="flex justify-center gap-3">
                    <h1 className="text-[#344054] text-6xl font-bold">Choose The Game</h1>
                    <img src="/images/gamepad.png" alt="Gamepad Icon" />
                </div>

                {/* Game Cards */}
                <div className="grid mx-auto grid-cols-3 gap-20 mt-5 z-30">
                    {games.map((game, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedGame(game)}
                            className={`cursor-pointer w-[150px] h-[150px] rounded-xl border 
                                ${selectedGame?.name === game.name ? 'border-blue-500 ring-4 ring-blue-400' : 'border-white'} 
                                border-opacity-35 bg-white bg-opacity-10 overflow-hidden group 
                                drop-shadow-xl relative hover:scale-95 transition-all duration-500`}
                        >
                            <div
                                style={{ backgroundImage: `url('${game.image}')` }}
                                className={`w-full h-full bg-cover bg-center absolute 
                                    ${selectedGame?.name === game.name ? 'scale-125' : 'group-hover:scale-125'} 
                                    transition-all duration-500`}
                            ></div>
                        </div>
                    ))}
                </div>

                {/* Play Button */}
                <div className="mt-10 z-30">
                    <Button onClick={handlePlay} disabled={!selectedGame}>
                        {selectedGame ? `Play ${selectedGame.name}` : "Play"}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default GamePage;
