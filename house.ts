class House {
    private rooms: string[];
    private size: number;
    private color: string;
    
    constructor(rooms: string[], size: number, color: string) {
      this.rooms = rooms;
      this.size = size;
      this.color = color;
    }
    
    getRooms(): string[] {
      return this.rooms;
    }
    
    addRoom(room: string): void {
      this.rooms.push(room);
    }
    
    getSize(): number {
      return this.size;
    }
    
    setColor(color: string): void {
      this.color = color;
    }
    
    getColor(): string {
      return this.color;
    }
  }

  export { House };