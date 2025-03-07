function Restaurant({ restaurant }) {
  console.log(restaurant);

  return (
    <div data-cy={restaurant.name} className="restaurant">
      <h2>{restaurant.name}</h2>
      <ul data-cy="restaurant-item">
        <li>{restaurant.address}</li>
        <li>{restaurant.phone}</li>
        <li>{restaurant.cuisine}</li>
        <li>{restaurant.rating}</li>
      </ul>
    </div>
  );
}

export default Restaurant;
