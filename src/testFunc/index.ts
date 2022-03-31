export class TestFunc {
    constructor(color?: string, number?: number) {
        this.color = color || "blue";
        this.number = number || 42;
    }

    private color;
    private number;

    public getColor(): string { return this.color; }
    public setColor(newColor: string) { this.color = newColor; }

    public getNumber() { return this.number; }
    public setNumber(newNumber: number) { this.number = newNumber; }

    public sumNumber(adder: number) { return this.number + adder; }
    public subtractNumber(subber: number) { return this.number - subber; }
    public multiplyNumber(multer: number) { return this.number * multer; }
    public divideNumber(divver: number) { return this.number /  divver; }
}

const asdf = "asdf";