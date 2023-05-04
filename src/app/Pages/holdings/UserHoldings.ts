export class UserHoldings {
    userId!: number | null;
    companyId!: number | null;
    quantity!: number | null;
    buyPrice!: number | null;
    currentPrice!: number | null;

    constructor(userId: number | null, companyId: number | null, quantity: number | null, buyPrice: number | null, currentPrice: number | null) {
        this.userId = userId;
        this.companyId = companyId;
        this.quantity = quantity;
        this.buyPrice = buyPrice;
        this.currentPrice = currentPrice;
    }
}