import React, {useState, useEffect} from 'react'

const Stock = (props) => {
  const symbol = props.match.params.symbol
  const apiKey = 'bafc5f21f1760611bb5676a6f77cd283'
console.log('props', symbol)
  const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`
 
  const [stock, setStock] = useState()
  const getStock = async () => {
    const response = await fetch(url)
    // console.log(response)
    const data = await response.json()
    setStock(data)
    // console.log('stock', stock[0])
  }

  useEffect(() => {
    getStock()
  }, [])

  const loaded = () => {
    return (
    <div>
      <h1>Name: {stock[0].companyName}</h1>
      <h3>Price: {stock[0].price}{stock[0].currency}</h3>
      <h3>Exchange: {stock[0].exchangeShortName}</h3>
      <h3>Industry: {stock[0].industry}</h3>
      <h3>Location: {stock[0].city}</h3>
    </div>
    )
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      {stock ? loaded() : loading()}
    </div>
  )
}

export default Stock