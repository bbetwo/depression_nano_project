import type { ProductItemType } from "../types";
import { useCartCont } from "./useCartContext"


export const useCartAction = () => {
    const {dispatch} = useCartCont();

    const addItem = (item:ProductItemType) => {
        dispatch({type:'ADD_ITEM', payload:item})
    }

    const removItems = (itemId: number)=> {
        dispatch({type:'REMOVE_ITEM', payload: {id:itemId}})
    }

    const plusItem = (itemId: number ) => {
        dispatch({type:'PLUS_ITEM', payload:{id: itemId}})
    }

    const minusItem = (itemId: number) => {
        dispatch({type:'MINUS_ITEM', payload:{id: itemId}})
    }

    return {addItem, removItems, plusItem, minusItem};
}