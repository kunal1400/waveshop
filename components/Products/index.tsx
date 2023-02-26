import dynamic from "next/dynamic";
import React, { memo } from "react";
import { ProductsPropsInterface, ProductPropsInterface } from "../../interfaces";

const AudioCanvas = dynamic(() => import("../Canvas"), {
    ssr: false
})

/**
 * Grid to show canvas
 * @param param0 
 * @returns 
 */
const ProductGrid = memo(function ProductGrid( { products, message }: ProductsPropsInterface ) {
    return <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="">Pick Sample</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {
                products.map((product: ProductPropsInterface) => <ProductCard key={product.id} {...product} message={message} />)
            }
        </div>
    </div>
})


/**
 * Canvas Card
 * @param param0 
 * @returns 
 */
export function ProductCard({message, ...product}: ProductPropsInterface) {
    return <>
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">            
            <AudioCanvas 
                imgSrc={product.imageSrc}
                alt={product.imageAlt}
                width={320}
                height={320}
            />
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
        </div>
    </>
}

export default ProductGrid;