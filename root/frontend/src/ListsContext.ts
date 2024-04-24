import { createContext } from "react";
import { ListsContextType } from "./vite-env";

const ListsContext = createContext<ListsContextType | null>(null);

export default ListsContext;
