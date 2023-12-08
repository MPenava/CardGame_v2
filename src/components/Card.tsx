interface Player {
    asset: string;
    playerName: string;
    realName: string;
}

interface CardProps{
    activePlayer: Player | null,
    onSelectPlayer: (i: Player) => void,
    player: Player,
    realName: string,
    playerName: string,
    asset: string
}

const Card = ({
  activePlayer,
  onSelectPlayer,
  player,
  realName,
  playerName,
  asset,
}: CardProps) => {
  return (
    <article
      onClick={() => {
        onSelectPlayer({...player});
      }}
      className="p-6 m-2 hover:bg-gray-500 border-2 border-solid border-white dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer"
      style={{
        backgroundColor:
          activePlayer && activePlayer.realName === realName ? "#6b7280" : "",
      }}
    >
      <p className="text-md text-white truncate">
        <span className="mr-1">-</span>
        {realName}
      </p>
      <p className="text-md text-white truncate">
        <span className="mr-1">-</span>
        {playerName}
      </p>
      <p className="text-md text-white truncate">
        <span className="mr-1">-</span>
        {asset}
      </p>
    </article>
  );
};

export default Card;
