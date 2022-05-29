abstract class Sortable {
    abstract lengh: number;
    abstract swap(i: number, j: number): void;
    abstract compare(i: number, j: number): boolean;

    sort() {
        const { lengh } = this;

        let i, j;
        for (i = 0; i < lengh - 1; i++)
            for (j = 0; j < lengh - i - 1; j++)
                if (this.compare(j, j + 1)) this.swap(j, j + 1);
    }
}

export default Sortable;
