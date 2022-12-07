import Button from "./components/Button";
import Card from "./components/Card";

const App = () => {
  // const productos = [{}];
  return (
    <div>
      <Button text="Hola soy un boton" />
      <Button text="boton" />
      <Button text="gris" />
      <Card
        title="Escritorio de madera"
        text="Es un escritorio hecho de madera de roble"
        price={20}
        isOffer={true}
      ></Card>
    </div>
  );
};

export default App;
