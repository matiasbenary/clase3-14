import Button from "./components/Button";
import Card from "./components/Card";

const App = () => {
  const products = [
    {
      title: "Escritorio de madera",
      text: "Es un escritorio hecho de madera de roble",
      price: 20,
      isOffer: true,
      hasStock: false,
    },
    {
      title: "Escritorio de metal",
      text: "Es un escritorio hecho de metal",
      price: 100,
      isOffer: false,
      hasStock: true,
    },
    {
      title: "Mesa de madera",
      text: "Es un mesa hecho de madera de roble",
      price: 50,
      isOffer: true,
      hasStock: true,
    },
    {
      title: "Escritorio de oro",
      text: "Es un escritorio hecho de oro",
      price: 120,
      isOffer: false,
      hasStock: false,
    },
  ];
  return (
    <div>
      <Button text="Hola soy un boton" />
      <Button text="boton" />
      <Button text="gris" />
      {products.map((product) => {
        return (
          <Card
            key={`card-${product.title}`}
            title={product.title}
            text={product.text}
            price={product.price}
            isOffer={product.isOffer}
            hasStock={product.hasStock}
          />
        );
      })}
    </div>
  );
};

export default App;
