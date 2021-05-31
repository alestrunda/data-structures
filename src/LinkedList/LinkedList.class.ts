class Node {
  public value: number;
  public next: Node | undefined;

  constructor(value: number) {
    this.value = value;
  }
}

class LinkedList {
  private head: Node | undefined;

  private getLastNode(): Node | undefined {
    if (!this.head) return;
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  public delete(value: number) {
    if (!this.head) return;
    let currentNode = this.head;
    if (currentNode.value === value) {
      this.head = undefined;
      return;
    }
    while (currentNode.next) {
      const nextNode = currentNode.next;
      if (nextNode.value === value) {
        currentNode.next = nextNode.next;
        return;
      }
      currentNode = nextNode;
    }
  }

  public insert(value: number) {
    const newNode = new Node(value);
    const lastNode = this.getLastNode();
    if (!lastNode) this.head = newNode;
    else lastNode.next = newNode;
  }

  public insertAfter(nodeValue: number, insertedValue: number) {
    const node = this.search(nodeValue);
    if (!node) throw "No node with such value exists";
    const newNode = new Node(insertedValue);
    newNode.next = node.next;
    node.next = newNode;
  }

  public length() {
    if (!this.head) return 0;
    let length = 1;
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
      length += 1;
    }
    return length;
  }

  public search(value: number): Node | undefined {
    if (!this.head) return undefined;
    let currentNode = this.head;
    if (currentNode.value === value) return currentNode;
    while (currentNode.next) {
      currentNode = currentNode.next;
      if (currentNode.value === value) return currentNode;
    }
  }

  public traverse(): Node[] {
    if (!this.head) return [];
    let currentNode = this.head;
    const nodes = [currentNode];
    while (currentNode.next) {
      currentNode = currentNode.next;
      nodes.push(currentNode);
    }
    return nodes;
  }
}

export default LinkedList;
