import '../styles/projets.css'
import imgFaF from './Ressources/F&Fimg.png'

function projets () {
    return (
        <div className="projets">
            <h1>Voici mes projets personnelles </h1>

            <div className="ListOfProject">
                <div className="FeatAndFunProject">
                    <div className="FeatAndFunimg">
                        <a href="https://stingray-app-5dpts.ondigitalocean.app/" className="FeatAndFunImg" target="_blank">
                            <img src={imgFaF} alt="Feat and Fun" />
                        </a>
                    </div>
                    <div className="FeatAndFunText">
                        <p>Feat and Fun est un site web qui permet de jouer au jeu RolandGamos de l'émission YouTube RapJeu. Le jeu se joue en 1 contre 1, chaque joueur doit trouver un artiste qui a fait une collaboration avec l'artiste précédent.</p>
                        <p>Le Frontend a été réalisé avec la bibliothèque ReactJs, j'ai aussi utilisé le framework NextJs.</p>
                        <p>Le Backend a été réalisé en Javascript et ExpressJs, j'ai également utilisé l'API de Spotify.</p>
                        <p>Tout le projet a été déployé grâce au site DigitalOcean.</p>
                        <p>Je prévois d'apporter des mises à jour à ce projet, comme rajouter des artistes de départ (pour le moment on tombe uniquement sur le top 30 fr 2023, donc majoritairement des rappeurs).</p>
                        <p>De plus, je voudrais rajouter un jeu en multijoueur où les utilisateurs auront la possibilité de créer des salons et de les rejoindre.</p>
                        <p>J'ai réalisé ce site tout seul, les mises à jour sont donc rares, et le site peut contenir des erreurs avec mon niveau actuel. Niveau que je souhaiterais améliorer avec un stage !!</p>
                        <p>Cliquez sur l'image pour visiter le site.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default projets