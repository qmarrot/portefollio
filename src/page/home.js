import "../styles/home.css"
import image from "./IMG_7160.jpg"

function home () {
  return (
      <div className="home">
        <div>
          <h2>A propos de moi</h2>
        </div>
          <div className="imageAndText">
              <div>
                <img src={image} className="Image"/>
              </div>
              <div className="text">
                  <p>Bonjour ! Je m'appelle Quentin Marrot.</p>
                  <p>En plein Master 1 d'informatique à Bordeaux, je suis passionné par le domaine et désireux d'apprendre lors d'un stage. Je suis résolument déterminé à enrichir mes compétences au travers d'une expérience professionnelle stimulante.</p>
                  <p>Pour le moment, mes domaines de compétences s'étendent déjà sur beaucoup de domaines. Je touche à tout, que ce soit de l'informatique théorique, fondamentale ou plus pratique.</p>
                  <p>Mon expérience en informatique, combinée à ma motivation et à mon désir d'apprendre aux côtés de vrais professionnels, font de moi un candidat déterminé à contribuer de manière significative à tout projet qui me sera confié. Je suis ouvert à de nouvelles technologies.</p>
                  <p>Je suis persuadé que cette expérience de stage sera l'occasion parfaite d'enrichir mon bagage professionnel, tout en apportant une valeur ajoutée à l'entreprise. Je me tiens à votre disposition pour échanger davantage sur mes compétences et motivations.</p>
              </div>
          </div>
      </div>
  )
}

export default home