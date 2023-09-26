import { createContext } from "react";
import { PokemonContextType } from "./types";
import { BuddyContextType } from "./types";

export const PokemonContext = createContext<PokemonContextType | null>(null)

export const BuddyContext = createContext<BuddyContextType | null>(null)
