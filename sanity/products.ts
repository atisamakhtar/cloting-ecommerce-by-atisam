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
            type: "number",
            validation: (Rule: { custom: (arg: (quantity: number) => string | true) => any }) =>
                Rule.custom((quantity: number) => {
                    if (quantity < 0) {
                        return "Quantity cannot be less than 0";
                    }
                    return true; // Validation passed
                }),
        },
        {
            name: "imageList",
            title: "Product Image",
            type: "array",
            of: [
                {
                    name: 'image',
                    title: 'Add an image',
                    type: 'image',
                }
            ]
        },
    ]
}