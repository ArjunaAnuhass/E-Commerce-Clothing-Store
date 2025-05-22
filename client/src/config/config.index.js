export const registerFormControls = [
    {
        name: 'userName',
        label: 'User Name',
        placeholder: 'Enter Your user name',
        commonType: 'input',
        type: 'text'
    },
    {
        name: 'email',
        label: 'Email',
        placeholder: 'Enter Your email',
        commonType: 'input',
        type: 'email'
    },
    {
        name: 'password',
        label: 'Password',
        placeholder: 'Enter Your password',
        commonType: 'input',
        type: 'password'
    }
];

export const loginFormControls = [
    {
        name: 'email',
        label: 'Email',
        placeholder: 'Enter Your email',
        commonType: 'input',
        type: 'email'
    },
    {
        name: 'password',
        label: 'Password',
        placeholder: 'Enter Your password',
        commonType: 'input',
        type: 'password'
    }
];

export const addProductFormElement = [
    {
        label: "Title",
        name: "title",
        componentType: "input",
        type: "text",
        placeholder: "Enter product title"
    },
    {
        label: "Description",
        name: "description",
        componentType: "textarea",
        placeholder: "Enter product description"
    },
    {
        label: "Category",
        name: "category",
        componentType: "select",
        options: [
            { id: "men", label: "Men"},
            { id: "women", label: "Women"},
            { id: "kids", label: "Kids"},
            { id: "accessories", label: "Accessories"},
            { id: "footwear", label: "Footwear"},
        ]
    },
    {
        label: "Brand",
        name: "brand",
        componentType: "select",
        options: [
            { id: "nike", label: "Nike"},
            { id: "adidas", label: "Adidas"},
            { id: "puma", label: "Puma"},
            { id: "levis", label: "Levis"},
            { id: "zara", label: "Zara"},
            { id: "h&m", label: "H&M"},
        ]
    },
    {
        label: "Price",
        name: "price",
        componentType: "input",
        type: "number",
        placeholder: "Enter product price"
    },
    {
        label: "Sale Price",
        name: "salePrice",
        componentType: "input",
        type: "number",
        placeholder: "Enter sale price (optional)"
    },
    {
        label: "Total Stock",
        name: "totalStock",
        componentType: "input",
        type: "number",
        placeholder: "Enter total stock"
    }
];