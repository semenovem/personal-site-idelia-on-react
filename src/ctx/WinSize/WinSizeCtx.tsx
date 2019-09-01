import React from 'react';
import { WinSize } from './types';

const WinSizeCtx = React.createContext<WinSize>(WinSize.XS);

WinSizeCtx.displayName = 'WinSizeCtx';

export default WinSizeCtx;
