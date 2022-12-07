const Card = ({ title, text, price, isOffer }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
      <p>{price}</p>
      {isOffer ? "Producto de oferta" : "venta normal"}
    </div>
  );
};
export default Card;
