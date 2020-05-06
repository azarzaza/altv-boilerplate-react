export default class Player {
  name: string;
  model: string;
  constructor(name: string) {
    this.name = name;
  }

  public spawn = (x: number, y: number, z: number, delay: number): object => {
    return { x, y, z };
  };
}

export const testPlayer = new Player("testuser");
