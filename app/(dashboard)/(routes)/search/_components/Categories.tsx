"use client";

import { tbl_categorias } from "@prisma/client";
import {
    FcManager,
    FcBusinessman,
    FcLandscape,
    
   
} from "react-icons/fc";
import { IconType } from "react-icons";


import { CategoryItem } from "./Category-item";

interface CategoriesProps {
    items: tbl_categorias[];
}

const iconMap: Record<tbl_categorias["nombre"], IconType> = {
    "Estampada": FcManager,
    "Formal": FcBusinessman,
    "Vaquero": FcLandscape,
   
   
    
};

export const Categories = ({
    items,
}: CategoriesProps) => {
    return (
        <div className="flex items-center gap-x-2 overflow-x-auto pb-2 content-between justify-center">
            {items.map((item) => (
                <CategoryItem
                    key={item.uuid}
                    label={item.nombre}
                    icon={iconMap[item.nombre]}
                    value={item.uuid}
                />
            ))}
        </div>
    )
}
