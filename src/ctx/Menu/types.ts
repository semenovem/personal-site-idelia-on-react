export interface Menu {
  isOpen: boolean;
  open(): void;
  close(): void;
}

export interface MenuProps {
  menu: Menu;
}
