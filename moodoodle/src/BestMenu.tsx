import React from 'react'
import { Menu } from './model/restraurant'

interface OwnProps extends Menu {
  showBestMenuName(name: string): string
}

const BestMenu: React.FC<OwnProps> = ({ name, price, category, showBestMenuName }) => {
  return (
    <div>
      {name}
      {price}
      {category}
      {showBestMenuName.name}
    </div>
  )
}

export default BestMenu
