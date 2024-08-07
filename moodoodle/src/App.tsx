import React, { useState } from 'react'
import './App.css'
import Store from './Store'
import { Address, Restaurant } from './model/restraurant'
import BestMenu from './BestMenu'

const data: Restaurant = {
  name: '먼지네 식당',
  category: 'westorn',
  address: {
    city: 'incheoi',
    detail: 'somewhere',
    zipCode: 235435,
  },
  menu: [
    { name: 'rose pasta', price: 2000, category: 'PASTA' },
    { name: 'garlic steak', price: 3000, category: 'STEAK' },
  ],
}
const App: React.FC = () => {
  // <> 제네릭 문법
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data)
  const changeAddress = (address: Address) => {
    setMyRestaurant({ ...myRestaurant, address })
  }
  const showBestMenuName = (name: string) => {
    return name
  }

  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress} />
      <BestMenu name="불고기 피자" category="피자" price={1000} showBestMenuName={showBestMenuName} />
    </div>
  )
}

export default App
