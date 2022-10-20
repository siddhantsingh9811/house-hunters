import List from "./List";

const Home = () => {
  
  const [houses, setHouses] = useState([
    { name: 'Apartment A', location: 'Delhi', bhk: 3, price:"1L", id: 1 },
    { name: 'Apartment B', location: 'Dehradun', bhk: 2,price:"2L", id: 2 },
    { name: 'Apartment C', location: 'Bangalore', bhk: 3,price:"1L", id: 3 }
  ])
const Home = () => {
    return ( 
        <div className="home">
        <List houses={houses} title="Available Houses" handleDelete={handleDelete} />
        <div className="overlay">
            <div className="box">
                
            </div>
        </div>
        </div>
     );
}
 
export default Home;