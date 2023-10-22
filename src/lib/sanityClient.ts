import { createClient } from '@sanity/client'

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-10-20',
    token: process.env.PRODUCT_TOKEN,
})

export const getSingleProduct = async (idOfProduct: string) => {

    // console.log(idOfProduct, typeof idOfProduct)
    const res = await client.fetch(`*[_type=="product" && _id=='${idOfProduct}'][0]`);
    return res;

}

export const fetchSanityProducts = async (category?: string) => {
    let res;
    if (category !== undefined) {
        res = await client.fetch(`*[_type=="product" && category=="${category}"]`);
        return res;
    }
    res = await client.fetch(`*[_type=="product"]`);
    return res;
}

export default client;