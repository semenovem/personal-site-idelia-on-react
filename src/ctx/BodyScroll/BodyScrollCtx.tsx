import React from "react";
import {IBodyScroll} from "./types";

const bodyScroll: IBodyScroll = {
  on() {},
  off() {},
  getStatus(): boolean {
    return true
  }
};

const BodyScrollCtx = React.createContext<IBodyScroll>(bodyScroll);

export default BodyScrollCtx;
