import { Item } from "../model/item.model";

export default function generateRandomMock(){
    const MOCK_ITEMS = [{ id: 1, name: 'caca', quantity: 10 }, { id: 2, name: 'pis', quantity: 10 }] as unknown as Item []
    return MOCK_ITEMS 
}