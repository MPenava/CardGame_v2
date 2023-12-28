import { PlayerType } from "../store";
import { usePlayerStore } from "../store";

interface CardProps {
  player: PlayerType;
  activePlayer: PlayerType | null;
}

const Card = ({
  player,
  activePlayer,
}: CardProps) => {
  const selectActivePlayer = usePlayerStore((state) => state.selectActivePlayer)

  return (
    <article
      onClick={() => {selectActivePlayer(player)}}
      className="p-6 m-2 hover:bg-gray-500 border-2 border-solid border-white dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer"
      style={{
        backgroundColor:
          activePlayer && activePlayer.realName === player.realName
            ? "#6b7280"
            : "",
      }}
    >
      <p className="text-md text-white truncate">
        <span className="mr-1">-</span>
        {player.realName}
      </p>
      <p className="text-md text-white truncate">
        <span className="mr-1">-</span>
        {player.playerName}
      </p>
      <p className="text-md text-white truncate">
        <span className="mr-1">-</span>
        {player.asset}
      </p>
    </article>
  );
};

export default Card;
