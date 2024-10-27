const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

// Endpoint to calculate total value of products
app.post('/api/calculateTotal', (req, res) => {
  const products = req.body.products


  if (!Array.isArray(products)) {
    return res
      .status(400)
      .json({error: 'Invalid input: products should be an array'})
  }

  let totalValue = 0

  // Calculate total value
  products.forEach(product => {
    const {price, quantity} = product
    if (price && quantity) {
      totalValue += price * quantity
    }
  })

  
  res.json({totalValue})
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
