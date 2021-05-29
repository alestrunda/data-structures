class Stack {
  private items: number[] = [];

  public length(): number {
    return this.items.length;
  }

  public peek(): number | undefined {
    return this.items[this.items.length - 1];
  }

  public pop(): number | undefined {
    return this.items.pop();
  }

  public push(item: number) {
    this.items.push(item);
  }
}

export default Stack;
