import Card from "./Card";
import { usePlayerStore } from "../store";

const Overview = () => {
  const players = usePlayerStore((state) => state.players)
  const activePlayer = usePlayerStore((state) => state.activePlayer)
  
  return (
    <section className="ml-5">
      <h1 className="text-4xl mb-8 text-white ml-3 mt-5">Overview</h1>
      <div className="w-auto lg-w-5/12 md:w-4/12 grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-3 mt-5 ml-5">
        {players.length > 0 &&
          players.map((player, i) => (
            <Card
              activePlayer={activePlayer}
              player={player}
              key={i}
            />
          ))}
        {players.length === 0 && (
          <p className="border-2 border-solid border-white text-md text-white p-2 rounded">
            Cards are currently unavailable!
          </p>
        )}
      </div>
    </section>
  );
}

export default Overview;
