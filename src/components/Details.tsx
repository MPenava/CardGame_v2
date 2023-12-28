import { usePlayerStore } from "../store";
  
const Details = () =>{
  const activePlayer = usePlayerStore((state) => state.activePlayer) 
  return (
    <section className="border-2 border-solid border-white basis-3/5 mt-5 pb-2">
      <h1 className="text-4xl text-white ml-3 mt-2">Details</h1>
      {activePlayer && (
        <div className="mt-8">
          <p className="text-lg ml-3 text-white">
            <span className="mr-3">-</span>
            {activePlayer.realName}
          </p>
          <p className="text-lg ml-3 text-white">
            <span className="mr-3">-</span>
            {activePlayer.playerName}
          </p>
          <p className="text-lg ml-3 text-white">
            <span className="mr-3">-</span>
            {activePlayer.asset}
          </p>
        </div>
      )}
    </section>
  );
}

export default Details;
