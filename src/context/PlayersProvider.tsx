import { createContext, ReactElement, useReducer, useMemo } from "react";
// import { useEffect } from "react";

export type PlayerType = {
  asset: string;
  playerName: string;
  realName: string;
};

const playersList: PlayerType[] = [
  {
    asset: "Foghammer Lead",
    playerName: "Dreamlurk The Unstoppable",
    realName: "Brianna Forbes",
  },
  {
    asset: "Secret Glowquake Gold",
    playerName: "Crystaldash",
    realName: "Darcy Candice Ball",
  },
  {
    asset: "Valkyries' Opal Adamant",
    playerName: "Seekvenom The Mystic",
    realName: "Elva Becky Hammond",
  },
  {
    asset: "Jewelevil Bronze Of Goddesses",
    playerName: "Coincurse The Ghoul",
    realName: "Enid Rose",
  },
  {
    asset: "Yellow Orichalcum Of Paladins",
    playerName: "Skulldart",
    realName: "Esmeralda Carrillo",
  },
  {
    asset: "Shifting Rainshadow Iron",
    playerName: "Speedsoul",
    realName: "Hillary Gibbs",
  },
];

type InitialStateType = {
  players: PlayerType[];
  activePlayer: PlayerType | null;
};

const initContextState: InitialStateType = {
  players: playersList,
  activePlayer: null,
};

//reducer

const REDUCER_ACTION_TYPE = {
  SORT_ASC: "SORT_ASC",
  SORT_DESC: "SORT_DESC",
  SET_ACTIVE_PLAYER: "SET_ACTIVE_PLAYER",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
  type: string;
  payload?: PlayerType;
};

const reducer = (
  state: InitialStateType,
  action: ReducerAction
): InitialStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.SORT_ASC: {
      const sortedPlayers: PlayerType[] = state.players.sort((a, b) =>
        a.realName > b.realName ? 1 : -1
      );
      return { ...state, players: [...sortedPlayers] };
    }
    case REDUCER_ACTION_TYPE.SORT_DESC: {
      const sortedPlayers: PlayerType[] = state.players.sort((a, b) =>
        a.realName < b.realName ? 1 : -1
      );
      return { ...state, players: [...sortedPlayers] };
    }
    case REDUCER_ACTION_TYPE.SET_ACTIVE_PLAYER: {
      if (!action.payload) {
        throw new Error("action.payload missing in SET_ACTIVE_PLAYER action");
      }
      return { ...state, activePlayer: action.payload };
    }
    default:
      throw new Error("Unidentified reducer action type");
  }
};

const usePlayersContext = (initContextState: InitialStateType) => {
  const [state, dispatch] = useReducer(reducer, initContextState);

  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_TYPE;
  }, []);

  const players = state.players;
  const activePlayer = state.activePlayer;

  return { dispatch, REDUCER_ACTIONS, players, activePlayer };
};

export type UsePlayersContextType = ReturnType<typeof usePlayersContext>;

const initPlayersContextState: UsePlayersContextType = {
  players: [],
  activePlayer: null,
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
};

export const PlayersContext = createContext<UsePlayersContextType>(
  initPlayersContextState
);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const PlayersProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <PlayersContext.Provider value={usePlayersContext(initContextState)}>
      {children}
    </PlayersContext.Provider>
  );
};

export default PlayersContext;
