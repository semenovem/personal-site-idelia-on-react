export interface IBodyScrollProps {
  bodyScroll: IBodyScroll
}

export interface IBodyScroll {
  on(): void;
  off(): void;
  getStatus(): boolean;
}
