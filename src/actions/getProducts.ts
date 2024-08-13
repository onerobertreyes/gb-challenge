'use server'
import { Product } from '@/types/Product'

export const getProducts = async (offset: number, limit: number) => {
    try {
        const url = `https://my-json-server.typicode.com/onerobertreyes/gb-challenge/products?offset=${offset}&limit=${limit}`
        console.log(url)

        const response = await fetch(url)

        const data = (await response.json()) as Product[]

        console.log(data)

        return data

    } catch (error: unknown) {
        throw new Error(`Error message: ${error}`)
    }
}