export interface ProductPropsInterface {
    id: number,
    name: string,
    href: string,
    price: string,
    imageSrc: string,
    imageAlt: string,
}

export interface ProductsPropsInterface {
    products: ProductPropsInterface[]
}

export interface CanvasPropsInterface {
    imgSrc: string,
    alt: string,
    width: number, 
    height: number
}