export class Item{
    id!: number;
    product!: string;
    price!: number;
    quantity!: number;

    total(): number{
        return this.price * this.quantity;
    }
}