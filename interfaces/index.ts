import { ReactNode } from "react"

export interface LayoutPropsType {
    children?: ReactNode
}

export interface TextInputPropsInterface {
    text: string
}

export interface ProductPropsInterface {
    id: number,
    name: string,
    href: string,
    price: string,
    imageSrc: string,
    imageAlt: string,
    message?: string
}

export interface ProductsPropsInterface {
    products: ProductPropsInterface[],
    message?: string
}

export interface CanvasPropsInterface {
    imgSrc: string,
    alt: string,
    width: number, 
    height: number
}