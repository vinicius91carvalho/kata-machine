// enqueue O (1)
// dequeue O (1)

export class Node<T> {
    constructor(public readonly value: T, public next?: Node<T>, public prev?: Node<T>) {}
}

export default class Queue<T> {
    public length: number;
    private head: Node<T> | undefined
    private tail: Node<T> | undefined

    constructor() {
        this.length = 0
    }

    enqueue(item: T): void {
        this.length++
        if (!this.head) {
            this.head = new Node(item)
            this.tail = this.head
            return
        }
        const oldHead = this.head
        this.head = new Node(item, oldHead)
        oldHead.prev = this.head
    }

    deque(): T | undefined {
        if (this.tail) {
            this.length--
            if (this.tail.prev) {
                const oldTail = this.tail
                this.tail = this.tail.prev!
                this.tail.next = undefined
                return oldTail.value
            } else {
                const node = this.tail
                this.tail = undefined
                this.head = undefined
                return node.value
            }
        }
        return undefined
    }

    peek(): T | undefined {
        return this.tail?.value
    }
}