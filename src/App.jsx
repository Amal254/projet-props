import "./App.css";
import Fullname from "./component/Fullname";
import Profession from "./component/Profession";
import Bio from "./component/Bio";

function App() {
  const itemarray = 
    {
     
      Nom: "Amal ben ammar",
   
      cv: "Jeune diplômée en licence fondamentale économie fondamentale spécialisée en économie quantitative. Je suis précise, curieuse et autonome, j’ai à cœur de mettre en pratique mes connaissances acquises, en acquérir une nouvelle expérience qui approfondira mes connaissances en économie et gestion.",
    
      specialite: "Comptable",
   
    
      pic: "/image/image1.jpg' alt='image1",
    
    }
  return (
    <div className="App">
      <Fullname data={itemarray.Nom} />
      <Bio cv={itemarray.cv} />
      <Profession spec={itemarray.specialite}>
      https://www.oiseaux.net/photos/frederic.pelsy/images/pic.epeiche.frpe.1g.jpg

      </Profession>
    </div>
  );
}

export default App;
