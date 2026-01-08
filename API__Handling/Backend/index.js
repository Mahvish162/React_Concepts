import express from 'express'

const app = express();

app.get('/api/products', (req, res) => {

    const products = [
        {
            id: 1,
            name: "Wooden Table",
            qty: 3,
            price: "10$"
        },
        {
            id: 2,
            name: "Platic Table",
            qty: 3,
            price: "10$"
        },
        {
            id: 3,
            name: "Study Table",
            qty: 3,
            price: "10$"
        },
        {
            id: 4,
            name: "Bed",
            qty: 3,
            price: "10$"
        },
        {
            id: 5,
            name: "Almirah",
            qty: 3,
            price: "10$"
        }
    ]

    if (req.query.search) {
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(req.query.search.toLowerCase()))
        res.send(filteredProducts);
        return;
    }

    console.log(req.query.search)

    setTimeout(() => {
        res.send(products);
    }, 3000);

})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on Port ${port}`)
})