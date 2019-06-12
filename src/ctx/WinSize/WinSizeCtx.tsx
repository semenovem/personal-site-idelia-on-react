import React from "react";
import { WinSize } from "./types";

const WinSizeCtx = React.createContext<WinSize>(WinSize.XS);

export default WinSizeCtx;
