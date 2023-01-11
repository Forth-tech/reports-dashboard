interface IPurchase {
    id: number;
    nf: string;
    internalCode: string;
    date: string;
    type: string;
    id_seller: number;
    id_store: number;
}

interface PurchaseProps {
    purchase: IPurchase;
}

type ApiGetPurchaseType = {
    message: string
    success: boolean
    data: IPurchase | IPurchase[]
}