const List = ({ houses, title, handleDelete }) => {
    return (
      <div className="list">
        <h2>{ title }</h2>
        {houses.map(house => (
          <div className="list-preview" key={house.id} >
            <h2>{ house.name } - { house.bhk } BHK</h2>
            <p><span className="t">Location:</span> { house.location }</p>
            <p><span className="t">Price:</span> { house.price }</p>
            <button onClick={() => handleDelete(house.id)}>Delete Entry</button>
          </div>
        ))}
      </div>
    );
  }
   
  export default List;