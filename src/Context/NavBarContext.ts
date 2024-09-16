import { createContext } from "react";

interface INavBarContextData {
  name: string;
}

export const NavBarContext = createContext<INavBarContextData>(null);