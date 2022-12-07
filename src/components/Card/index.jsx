import Button from "../Button";

const Card = ({ title, text, price, isOffer, hasStock }) => {
  // || cuando es false se muestra
  // && cuando es verdadero se muestra
  return (
    <div>
      <h1>
        {title} {hasStock || "Sin stock"}
      </h1>
      <p>{text}</p>
      <p>{price}</p>
      {isOffer ? "Producto de oferta" : "venta normal"}
      {hasStock && <Button text="comprar" />}
    </div>
  );
};
export default Card;
