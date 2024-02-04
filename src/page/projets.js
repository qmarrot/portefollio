import '../styles/projets.css'
import imgFaF from './Ressources/F&Fimg.png'
import imgNDI from './Ressources/NDI.png'

function projets () {
    return (
        <div className="projets">
            <h1>Voici mes projets personnelles </h1>

            <hr className="hrS"/>

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
                <hr className="hrS"/>
                <div className="NDIProject">
                    <div className="NDIimg">
                        <a href="https://www.ndi-deploy.fr" className="NDIImg" target="_blank">
                            <img src={imgNDI} alt="NDI" />
                        </a>
                    </div>
                    <div className="NDIText">
                        <p>Site web réalisé à l'occasion de la <a href="https://www.nuitdelinfo.com/" target="_blank">nuit de l'info 2023</a>. C'est une compétition qui réunit les étudiants pour travailler ensemble sur le développement d’une application web.</p>
                        <p>Le but étant de proposer une solution à un problème réel proposé par une entreprise en une nuit.</p>
                        <p>Cette année il fallait proposer une application web ludique permettant aux utilisateurs de trouver des vraies informations et solutions sur le climat.</p>
                        <p>En plus de cela les équipes ont le choix de réléver certains défis (Au maximun 5) en plus du site.</p>
                        <p>Nous avons gagné le defis Accéssibilité de l'entreprise Code-Troopers (<a href="https://www.nuitdelinfo.com/inscription/defis/390" target="_blank">Lien du défi</a>)</p>
                        <p>Le Frontend a été réaliser sous Angular et le backend sous expressJS et une base de donnée MongoDB</p>
                    </div>
                </div>
                <hr className="hrS"/>

            </div>

        </div>
    )
}

export default projets