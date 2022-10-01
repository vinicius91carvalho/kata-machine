// enqueue O (1)
// dequeue O (1)

export class Node<T> {
    constructor(public readonly value: T, public next?: Node<T>) {}
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>
    private tail?: Node<T>

    constructor() {
        this.head = this.tail = undefined
        this.length = 0
    }

    enqueue(item: T): void {
        const node = new Node(item)
        this.length++
        
        if (!this.tail) {
            this.head = this.tail = node
            return
        }

        this.tail.next = node
        this.tail = node
    }

    deque(): T | undefined {
        if (!this.head) {
            return
        }

        const head = this.head
        this.head = this.head.next

        head.next = undefined

        this.length--

        if (this.length === 0) {
            this.tail = undefined
        }

        return head.value
    }

    peek(): T | undefined {
        return this.head?.value
    }
}