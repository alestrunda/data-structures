import { expect } from 'chai';

import Stack from "../src/Stack/Stack.class"

describe("Stack class", () => {
  describe("when inited", () => {
    it("should be empty", () => {
      const stack = new Stack()
      expect(stack.length()).to.equal(0);
    });
  })

  describe("when push", () => {
    it("length should be increased", () => {
      const stack = new Stack()
      stack.push(1)
      stack.push(1)
      expect(stack.length()).to.equal(2);
    });
  })

  describe("when pop", () => {
    it("should return the item at the top", () => {
      const stack = new Stack()
      stack.push(5)
      stack.push(15)
      stack.push(20)
      expect(stack.pop()).to.equal(20);
    });
    it("should decrease the length", () => {
      const stack = new Stack()
      stack.push(1)
      stack.pop()
      expect(stack.length()).to.equal(0);
    });
    it("and empty then no item is removed", () => {
      const stack = new Stack()
      const removed = stack.pop()
      expect(stack.length()).to.equal(0);
      expect(removed).to.be.undefined;
    });
  })

  describe("when peek", () => {
    it("should return the item at the top", () => {
      const stack = new Stack()
      stack.push(10)
      stack.push(25)
      expect(stack.peek()).to.equal(25);
    });
    it("should not change length", () => {
      const stack = new Stack()
      stack.push(5)
      stack.peek()
      expect(stack.length()).to.equal(1);
    });
    it("and empty then no item is returned", () => {
      const stack = new Stack()
      const itemOnTop = stack.peek()
      expect(itemOnTop).to.be.undefined;
    });
  })
});