interface IStore {
    id: number;
    internalCode: string;
    id_seller: number;
    id_client: number;
    id_city: number;
}

interface StoreProps {
    store: IStore;
}

type ApiGetStoreType = {
    message: string
    success: boolean
    data: IStore | IStore[]
}