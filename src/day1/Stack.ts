export class Node<T> {
    constructor(public readonly item: T, public prev?: Node<T>) { }
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>

    constructor() {
        this.length = 0
    }

    push(item: T): void {
        const node = new Node(item)
        this.length++
        
        if (!this.head) {
            this.head = node
            return
        }
 
        node.prev = this.head
        this.head = node
    }

    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1)

        if (!this.head) {
            return undefined
        }

        const head = this.head
        this.head = this.head.prev

        head.prev = undefined

        return head.item
    }

    peek(): T | undefined {
        return this.head?.item
    }
}