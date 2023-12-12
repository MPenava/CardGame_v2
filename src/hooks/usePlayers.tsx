import { useContext } from "react";
import PlayersContext from "../context/PlayersProvider"
import { UsePlayersContextType } from "../context/PlayersProvider";

const usePlayers = (): UsePlayersContextType => {
    return useContext(PlayersContext)
}

export default usePlayers