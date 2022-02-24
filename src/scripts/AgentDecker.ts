import type { Game, Move } from "boardgame.io";
import { InitDeck, InitObstacleDeck } from "./Card";

export interface AgentDeckerState {
  obstacleDeck: string[];
  deck: string[];
  alarm: number;
}

const move: Move<AgentDeckerState> = (G, ctx) => {};

export const AgentDecker: Game<AgentDeckerState> = {
  setup(ctx, setupData) {
    return {
      obstacleDeck: ctx.random?.Shuffle(InitObstacleDeck.slice()) ?? [],
      deck: ctx.random?.Shuffle(InitDeck.slice()) ?? [],
      alarm: 0,
    };
  },
};
