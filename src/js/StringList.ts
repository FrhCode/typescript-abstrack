import Sortable from "./Sortable";

class StringList extends Sortable {
    #word: string;
    constructor(word: string) {
        super();
        this.#word = word;
    }

    get lengh(): number {
        return this.#word.length;
    }

    get word(): string {
        return this.#word;
    }

    compare(i: number, j: number): boolean {
        return (
            this.#word[i].toLowerCase().charCodeAt(0) >
            this.#word[j].toLowerCase().charCodeAt(0)
        );
    }

    swap(i: number, j: number): void {
        let characters = [...this.#word];

        let temp = characters[i];
        characters[i] = characters[j];
        characters[j] = temp;

        this.#word = characters.join("");
    }
}

export default StringList;
