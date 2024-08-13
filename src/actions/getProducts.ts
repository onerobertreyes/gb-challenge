'use server'
import { Product } from '@/types/Product'

export const getProducts = async (offset: number, limit: number) => {
    try {
        const url = `https://my-json-server.typicode.com/onerobertreyes/gb-challenge/products`
        
        const response = await fetch(url)

        const data = (await response.json()) as Product[]    
        
        
        if (!data) return [];

        const length = data.length;

        if (!length) {
            return [];
        }
        if (offset > length - 1) {
            return [];
        }

        const start = Math.min(length - 1, offset);
        const end = Math.min(length, offset + limit);

        const products = data.slice(start, end);

        console.log(products)

        return products


    } catch (error: unknown) {
        throw new Error(`Error message: ${error}`)
    }
}