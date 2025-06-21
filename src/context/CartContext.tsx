import { createContext } from "react";
import type { ContextType } from "./CartProvider";

export const CartContext = createContext<ContextType | null>(null);
