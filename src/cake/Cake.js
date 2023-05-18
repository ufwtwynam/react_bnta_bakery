const Cake = ({cake}) => {
  const { cakeName, ingredients, price, rating } = cake;

  return (
    <>
      <h2>{cakeName}</h2>
      <p>Rating: {rating}</p>
      <p>Price: {price}</p>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
        
    </>
  );
};

export default Cake;