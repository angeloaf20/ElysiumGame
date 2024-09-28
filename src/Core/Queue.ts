export class Queue<T> {
    private data: T[] = [];

    public Enqueue(item: T) {
        this.data.push(item);
    }

    public Dequeue() {
        this.data.shift();
    }

    public Peek() {
        return this.data[0];
    }

    public Find(item: T) {
        return this.data.indexOf(item);
    }

    public displayData() {
        if (this.data === undefined) return;
        for (let i = 0; i < this.data.length; i++) {
            console.log(this.data[i]);
        }
    }

    get Data() {
        return this.data;
    }
}