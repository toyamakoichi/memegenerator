import React, { createContext} from "react";
import { ThemeContextInterface} from "./theme";
export const ThemeContext = createContext<ThemeContextInterface>({} as ThemeContextInterface);

