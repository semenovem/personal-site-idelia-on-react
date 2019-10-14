import React from 'react';
import { Menu } from './types';

const menu: Menu = {
  isOpen: false,
  open() {},
  close() {},
};

const Ctx = React.createContext<Menu>(menu);

export default Ctx;
