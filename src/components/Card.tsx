import { PlayerType } from "../context/PlayersProvider";
import { ReducerAction } from "../context/PlayersProvider";
import { ReducerActionType } from "../context/PlayersProvider";

interface CardProps {
  player: PlayerType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  activePlayer: PlayerType | null;
}

const Card = ({
  player,
  dispatch,
  REDUCER_ACTIONS,
  activePlayer,
}: CardProps) => {
  
  const onSelectPlayer = () => {
    console.log("Selecting player...");
    dispatch({
      type: REDUCER_ACTIONS.SET_ACTIVE_PLAYER,
      payload: player,
    });
  };

  return (
    <article
      onClick={onSelectPlayer}
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
