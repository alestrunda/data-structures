const Stack = () => {
  const items: number[] = [];

  return {
    length: (): number => items.length,
    peek: (): number | undefined => items[items.length - 1],
    pop: (): number | undefined => items.pop(),
    push: (item: number) => {
      items.push(item);
    },
  };
};

export default Stack;
