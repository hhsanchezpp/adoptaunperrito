import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Card from "./components/Card"
import Lengueta from "./components/Lengueta"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <Header titulo_header={"Adopta un Perrito"}/>
      <div className= "container">
      <Card
      nombre={"Soso"}     
      url={"https://www.kowalski.es/imagenes/cachorros-golden-retriever/primera-camada-golden-04.jpg"}
      informacion={"soy un perrito tierno y me gustaria tener un hogar contigo"}
      boton={<Lengueta color_bg="success" palabra="Adoptame"/>}
      />
      <Card
      nombre={"Landro"}
      url={"https://www.kowalski.es/jackrussellterrier/imagenes/jack/kowalski-sagrario.jpg"}
      informacion={"soy un perrito tierno y me gustaria tener un hogar contigo"}
      boton={<Lengueta color_bg="primary" palabra="Adoptame"/>}
      
      />
      <Card
      nombre={"Lolo"}
      url={"https://www.kowalski.es/imagenes/pie-l/foto3.jpg"}
      informacion={"soy un perrito tierno y me gustaria tener un hogar contigo"}
      boton={<Lengueta color_bg="danger" palabra="Adoptame"/>}
      />
      <Card
      nombre={"Sira"}
      url={"https://www.kowalski.es/imagenes/pie-l/foto6.jpg"}
      informacion={"soy un perrito tierno y me gustaria tener un hogar contigo"}
      boton={<Lengueta color_bg="warning" palabra="Adoptame"/>}
      />
      </div>
  
      

      <div className= "footer">
      <Footer
      texto_footer={"Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto.   Tenemos una variedad de perros con diferentes personalidades y tamaños,  todos en busca de una hogar amoroso.   Cada imagen captura su esencia única.   Adopta un perro y bríndale una segunda oportunidad.  Encuentra a tu compañero peludo para siempre"}
      />
        </div>
    </div>
      
  )
}
export default App