import { MouseEvent} from "react";

interface Player {
  asset: string;
  playerName: string;
  realName: string;
}

type ControlsProps = {
    onSortAsc: (event: React.MouseEvent<HTMLButtonElement>) => void,
    onSortDesc: (event: React.MouseEvent<HTMLButtonElement>) => void,
    onSendData: (event: React.MouseEvent<HTMLButtonElement>) => void,
    selectedPlayer: Player | null
}

const Controls = ({ onSortAsc, onSortDesc, onSendData, selectedPlayer }: ControlsProps) => {
  return (
    <section className="border-2 border-solid border-white basis-2/5 mt-5">
      <h1 className="text-4xl text-white ml-3 mt-2">Controls</h1>
      <article className="mt-8 ml-5 mr-5 space-x-5 flex flex-row">
        <button
          onClick={onSortAsc}
          className="text-lg uppercase hover:bg-gray-500 text-white text-center py-1 border-2 border-thin border-white basis-2/4"
        >
          Sort ASC
        </button>
        <button
          onClick={onSortDesc}
          className="text-lg uppercase hover:bg-gray-500 text-white text-center py-1 border-2 border-thin border-white basis-2/4"
        >
          Sort DESC
        </button>
      </article>
      <article className="my-8 ml-5 mr-5">
        <button
          onClick={onSendData}
          disabled={selectedPlayer === null}
          className={`w-full text-lg uppercase text-white text-center py-1 border-2 border-thin border-white ${selectedPlayer !== null?'hover:bg-gray-500':''}`}
        >
          Submit
        </button>
      </article>
    </section>
  );
}

export default Controls;
