interface Node {
  value: number;
  next: Node | undefined;
}

const createNode = (value: number): Node => ({ next: undefined, value });

const linkedList = () => {
  let head: Node | undefined;

  const getLastNode = (): Node | undefined => {
    if (!head) return;
    let currentNode = head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  };

  const deleteNode = (value: number) => {
    if (!head) return;
    let currentNode = head;
    if (currentNode.value === value) {
      head = undefined;
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
  };

  const insert = (value: number) => {
    const newNode: Node = createNode(value);
    const lastNode = getLastNode();
    if (!lastNode) head = newNode;
    else lastNode.next = newNode;
  };

  const insertAfter = (nodeValue: number, insertedValue: number) => {
    const node = search(nodeValue);
    if (!node) throw "No node with such value exists";
    const newNode = createNode(insertedValue);
    newNode.next = node.next;
    node.next = newNode;
  };

  const length = () => {
    if (!head) return 0;
    let length = 1;
    let currentNode = head;
    while (currentNode.next) {
      currentNode = currentNode.next;
      length += 1;
    }
    return length;
  };

  const search = (value: number): Node | undefined => {
    if (!head) return undefined;
    let currentNode = head;
    if (currentNode.value === value) return currentNode;
    while (currentNode.next) {
      currentNode = currentNode.next;
      if (currentNode.value === value) return currentNode;
    }
  };

  const traverse = (): Node[] => {
    if (!head) return [];
    let currentNode = head;
    const nodes = [currentNode];
    while (currentNode.next) {
      currentNode = currentNode.next;
      nodes.push(currentNode);
    }
    return nodes;
  };

  return {
    delete: deleteNode,
    insert,
    insertAfter,
    length,
    search,
    traverse,
  };
};

export default linkedList;
