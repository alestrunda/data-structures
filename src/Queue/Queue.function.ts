const queue = () => {
  let items: number[] = [];

  return {
    dequeue: (): number | undefined => {
      const [firstItem, ...rest] = items;
      items = rest;
      return firstItem;
    },
    enqueue: (item: number) => {
      items.push(item);
    },
    length: (): number => items.length,
    peek: (): number | undefined => items[0],
  };
};

export default queue;
