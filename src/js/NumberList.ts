import Sortable from "./Sortable";

class NumberList extends Sortable {
    #numbers: number[];
    constructor(...number: number[]) {
        super();
        this.#numbers = number;
    }

    get lengh(): number {
        return this.#numbers.length;
    }

    get numbers() {
        return this.#numbers;
    }

    compare(i: number, j: number): boolean {
        return this.#numbers[i] > this.#numbers[j];
    }

    swap(i: number, j: number): void {
        let temp;

        temp = this.#numbers[i];
        this.#numbers[i] = this.#numbers[j];
        this.#numbers[j] = temp;
    }
}

export default NumberList;
