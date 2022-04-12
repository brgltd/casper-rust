import { createContext } from "react";
import type TopbarModalState from "./topbar-modal-context.types";

export const TopbarModalContext = createContext<TopbarModalState>(null!);
