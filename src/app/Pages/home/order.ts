export class order {
    id!: number | null;
    userId!: number | null;
    companyId!: number | null;
    orderTime!: Date | null;
    orderType!: number | null;
    stockPrice!: number | null;
    stockQuantity!: number | null;
    totalAmount!: number | null;

    constructor(id: number | null, userId: number | null, companyId: number | null, orderTime: Date | null, orderType: number | null, stockPrice: number | null, stockQuantity: number | null, totalAmount: number | null) {
        this.id = id;
        this.userId = userId;
        this.companyId = companyId;
        this.orderTime = orderTime;
        this.orderType = orderType;
        this.stockPrice = stockPrice;
        this.stockQuantity = stockQuantity;
        this.totalAmount = totalAmount;
    }
}