interface EventInterface {
  stopPropagation(): void;
  isStoppedPropagation: boolean;
  code: string;
}

class Event implements EventInterface {
  public isStoppedPropagation: boolean;
  public readonly code: string;

  public constructor(event: KeyboardEvent) {
    this.code = event.code;
    this.isStoppedPropagation = false;
  }

  public stopPropagation() {
    this.isStoppedPropagation = true;
  }
}

export default Event;
