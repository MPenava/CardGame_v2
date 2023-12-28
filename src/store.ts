import { create } from "zustand";

export type PlayerType = {
  asset: string;
  playerName: string;
  realName: string;
};

type PlayerStore = {
  players: PlayerType[];
  activePlayer: PlayerType | null;
  selectActivePlayer: (player: PlayerType) => void;
  sortAscOrder: () => void;
  sortDescOrder: () => void;
  // sendData: () => void;
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

export const usePlayerStore = create<PlayerStore>()((set) => ({
  players: playersList,
  activePlayer: null,
  selectActivePlayer: (player) => set(() => ({ activePlayer: player })),
  sortAscOrder: () =>
    set((state) => ({
      players: [...state.players].sort((a, b) =>
        a.realName > b.realName ? 1 : -1
      ),
    })),
  sortDescOrder: () =>
    set((state) => ({
      players: [...state.players].sort((a, b) =>
        a.realName < b.realName ? 1 : -1
      ),
    })),
  // sendData: () => {
  //   if (state.activePlayer) {
  //     console.log("Sending data of active player...");

  //     fetch("http://localhost:3000/players", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(state.activePlayer),
  //     })
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // },
}));
