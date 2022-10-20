import { useEffect, useState } from "react";
import List from "./List";

const Home = () => {
  
  const [houses, setHouses] = useState([
    { name: 'Apartment A', location: 'Delhi', bhk: 3, price:"1L", id: 1 },
    { name: 'Apartment B', location: 'Dehradun', bhk: 2,price:"2L", id: 2 },
    { name: 'Apartment C', location: 'Bangalore', bhk: 3,price:"1L", id: 3 }
  ])
  
  const handleDelete = (id) => {
    const newHouses = houses.filter(house => house.id !== id);
    setHouses(newHouses);
  }
  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [bhk, setBhk] = useState();
  const [price, setPrice] = useState();
  const createEntry = () =>{
    let entry = {name:name,location:location, bhk:bhk, price:price};
    setHouses([...houses,entry]);
  }
  const handleSubmit = (e)=>{
    createEntry();
    handleOverlay();
    e.preventDefault();
  }
  const handleOverlay = ()=>{
    let ele = document.querySelector(".overlay")
    ele.style.cssText = "display:none"
  } 
  useEffect(()=>{handleOverlay()},[]);
  return (
    <div className="home">
      <List houses={houses} title="Available Houses" handleDelete={handleDelete} />
      <div className="overlay">
        <div className="box">
          <h2>Create new Entry</h2>
          <div className="a">
          <form onSubmit={handleSubmit}>
          <label><h3>Name:</h3> <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} /></label>
          <label><h3>Location:</h3> <input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} /></label>
          <label><h3>BHK:</h3> <input type="text" name="bhk" value={bhk} onChange={(e) => setBhk(e.target.value)} /></label>
          <label><h3>Price:</h3> <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} /></label>
          <center>
          <input type="submit" value="Submit"/><br />
          </center>
          </form>
          </div>
        </div>
      </div>
    </div>
    );
  }
  
  export default Home;
  