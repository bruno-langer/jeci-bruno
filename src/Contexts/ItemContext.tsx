import { createContext, ReactNode, useState } from "react";
import { itemTypeData } from "../models/ItemModel";


interface itemContextType {
    setItemData: Function
    itemData: itemTypeData | undefined
}





const ItemContext = createContext<itemContextType>({ setItemData: () => { }, itemData: { id: 0, links: [{link:"dwa",value:1023},{link:"23142",value:1023}], name: "" } })


export function ItemContextProvider({ children }: { children: ReactNode }) {

    const [itemData, setItemData] = useState<itemTypeData>()

    return (
        <ItemContext.Provider value={{ itemData, setItemData }}>{children}</ItemContext.Provider>
    )

}

export {ItemContext}