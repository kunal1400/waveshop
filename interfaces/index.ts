import { ReactNode } from "react";
import p5Types from "p5";

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
    message?: string,
    slug: 'text_neon_effect' | 'border_shadow_effect'
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

export interface CanvasTextGraphicsInterface {
    p: p5Types,
    w: number,
    h: number,
    t: string
}

export type svgIconType = 'svg_share' | 'svg_print' | 'svg_undo' | 'svg_redo' | 'svg_user' | 'svg_product' | 'svg_signin' | 'svg_audio' | 'svg_template' | 'svg_soundwave' | 'svg_canvassize' | 'svg_background' | 'svg_texticon' | 'svg_qrcode' | 'svg_download';