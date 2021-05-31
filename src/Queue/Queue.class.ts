class Queue {
  private items: number[] = [];

  public dequeue(): number | undefined {
    const [firstItem, ...rest] = this.items;
    this.items = rest;
    return firstItem;
  }

  public enqueue(item: number) {
    this.items.push(item);
  }

  public length(): number {
    return this.items.length;
  }

  public peek(): number | undefined {
    return this.items[0];
  }
}

export default Queue;
