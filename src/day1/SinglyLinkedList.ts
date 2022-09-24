// Insertion or deletion in the middle O (N)
// Insertion or deletion in the front or back O (1)
// Searching O (N)

export class Node<T> {
    constructor(
        public readonly value: T,
        public next?: Node<T>
    ) {}
}

export default class SinglyLinkedList<T> {
    public length: number;
    private head: Node<T>;

    constructor() {
        this.length = 0
    }

    prepend(item: T): void {
        const node = new Node(item)
        node.next = this.head
        this.head = node
        this.length++
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx >= this.length) {
            return
        } else if (idx === 0) {
            return this.prepend(item)
        } else if (idx === this.length - 1) {
            return this.append(item)
        }

        const newNode = new Node(item)

        let node: Node<T> = this.head
        let prev: Node<T> = this.head

        let i = 0
        while (i < idx) {
            prev = node
            node = node.next!
            i++
        }

        prev.next = newNode
        newNode.next = node

        this.length++
    }

    append(item: T): void {
        if (!this.head) {
            this.head = new Node(item)
            this.length++
            return
        }
        let node = this.head
        while (node.next !== undefined) {
            node = node.next
        }
        node.next = new Node(item)
        this.length++
    }
    
    remove(item: T): T | undefined {
        if (this.head === undefined)
            return

        let node: Node<T> = this.head
        let prev: Node<T> | undefined = undefined

        while (node !== undefined && node.value !== item) {
            prev = node
            node = node.next!
        }

        if (!node) {
            return undefined
        } else if (!prev) {
            this.head = node.next!
        } else {
            prev!.next = node.next
        }

        this.length--
        return node.value
    }

    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return
        } else if (idx === 0) {
            return this.head.value
        }

        let i = 0
        let node: Node<T> = this.head
        while (i < idx) {
            node = node.next!
            i++
        }
        return node.value
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return
        } else if (idx === 0) {
            return this.remove(this.head.value)
        }

        let node: Node<T> = this.head
        let prev: Node<T> = this.head

        let i = 0
        while (i < idx) {
            prev = node
            node = node.next!
            i++
        }

        if (!node) {
            return undefined
        }

        prev.next = node.next
        this.length--

        return node.value
    }
}