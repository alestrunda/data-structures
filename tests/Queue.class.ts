import { expect } from 'chai';

import Queue from "../src/Queue/Queue.class"

describe("Queue class", () => {
  describe("when inited", () => {
    it("should be empty", () => {
      const queue = new Queue()
      expect(queue.length()).to.equal(0);
    });
  })

  describe("when enqueue", () => {
    it("length should be increased", () => {
      const queue = new Queue()
      queue.enqueue(1)
      queue.enqueue(1)
      expect(queue.length()).to.equal(2);
    });
  })

  describe("when dequeue", () => {
    it("should return the item at the start", () => {
      const queue = new Queue()
      queue.enqueue(5)
      queue.enqueue(10)
      queue.enqueue(20)
      expect(queue.dequeue()).to.equal(5);
    });
    it("should decrease the length", () => {
      const queue = new Queue()
      queue.enqueue(1)
      queue.dequeue()
      expect(queue.length()).to.equal(0);
    });
    it("and empty then no item is removed", () => {
      const queue = new Queue()
      const removed = queue.dequeue()
      expect(queue.length()).to.equal(0);
      expect(removed).to.be.undefined;
    });
  })

  describe("when peek", () => {
    it("should return the item at the start", () => {
      const queue = new Queue()
      queue.enqueue(10)
      queue.enqueue(25)
      expect(queue.peek()).to.equal(10);
    });
    it("should not change length", () => {
      const queue = new Queue()
      queue.enqueue(5)
      queue.peek()
      expect(queue.length()).to.equal(1);
    });
    it("and empty then no item is returned", () => {
      const queue = new Queue()
      const itemOnTop = queue.peek()
      expect(itemOnTop).to.be.undefined;
    });
  })
})
