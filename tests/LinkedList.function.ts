import { expect } from "chai";

import LinkedList from "../src/LinkedList/LinkedList.function";

describe("LinkedList function", () => {
  describe("when inited", () => {
    it("should be empty", () => {
      const list = LinkedList();
      expect(list.length()).to.equal(0);
    });
  });

  describe("when item inserted", () => {
    it("should increase length", () => {
      const list = LinkedList();
      list.insert(5);
      list.insert(10);
      expect(list.length()).to.equal(2);
    });
    it("item should be in the list", () => {
      const list = LinkedList();
      list.insert(5);
      list.insert(10);
      expect(list.search(5).value).to.equal(5);
    });
  });

  describe("when item inserted after specific node", () => {
    it("item should be in the list", () => {
      const list = LinkedList();
      list.insert(5);
      list.insert(10);
      list.insert(20);
      list.insertAfter(10, 15);
      expect(list.length()).to.equal(4);
    });
    it("and that node does not exist then should raise expection", () => {
      const list = LinkedList();
      list.insert(5);
      list.insert(10);
      expect(() => {
        list.insertAfter(15, 20);
      }).to.throw("No node with such value exists");
    });
  });

  describe("when search", () => {
    it("and list is empty then should return undefined", () => {
      const list = LinkedList();
      expect(list.search(1)).to.be.undefined;
    });
    it("and item is not in the list then should return undefined", () => {
      const list = LinkedList();
      list.insert(5);
      list.insert(10);
      expect(list.search(1)).to.be.undefined;
    });
    it("and item is in the list then should return that item", () => {
      const list = LinkedList();
      list.insert(5);
      list.insert(10);
      expect(list.search(10).value).to.equal(10);
    });
  });

  describe("when delete item", () => {
    it("item should be removed", () => {
      const list = LinkedList();
      list.insert(5);
      list.insert(10);
      list.insert(20);
      list.delete(10);
      expect(list.search(10)).to.be.undefined;
    });
    it("length should be decreased", () => {
      const list = LinkedList();
      list.insert(5);
      list.insert(10);
      list.delete(10);
      expect(list.length()).to.equal(1);
    });
    it("and list has only one item then length should be 0", () => {
      const list = LinkedList();
      list.insert(5);
      list.delete(5);
      expect(list.length()).to.equal(0);
    });
    it("and list is empty then should not do anything", () => {
      const list = LinkedList();
      list.delete(1);
      expect(list.length()).to.equal(0);
    });
    it("and item is not in the list then should not do anything", () => {
      const list = LinkedList();
      list.insert(5);
      list.delete(10);
      expect(list.length()).to.equal(1);
    });
  });

  describe("when traverse", () => {
    it("should return all nodes as array", () => {
      const list = LinkedList();
      list.insert(5);
      list.insert(10);
      const nodeValues = list.traverse().map(node => node.value);
      expect(nodeValues).to.deep.equal([5, 10]);
    });
    it("and list is empty then should return empty array", () => {
      const list = LinkedList();
      expect(list.traverse().length).to.equal(0);
    });
  });
});
