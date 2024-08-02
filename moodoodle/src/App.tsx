import React from "react";
import "./App.css";

let data = {
  name: "누나네 식당",
  category: 'westorn',
  address: {
    city: 'incheoi',
    detail: 'somewhere',
    zipcode : 235435,
  },
  menu: [{ name: "rose pasta", price: 2000, category: 'PASTA' }, {name : 'garlic steak', price : 3000, category: 'STEAK'}]
}
const App: React.FC = () => {
  return <div className="App"></div>;
};

export default App;
