export const productScheme = {
    name: "product",
    title: "Products",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Product Name",
            type: "string"
        },
        {
            name: "description",
            title: "Product Description",
            type: "text",
            rows: 5,
        },
        {
            name: "price",
            title: "Product Price",
            type: "number"
        },
        {
            name: "category",
            title: "Product Category",
            type: "string"
        },
        {
            name: "tagline",
            title: "Product tagline",
            type: "string"
        },
        {
            name: "quantity",
            title: "Product quantity",
            type: "number"
        },
        {
            name: "image",
            title: "Product Image",
            type: "image"
        },
    ]
}