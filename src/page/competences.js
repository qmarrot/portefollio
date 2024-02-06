import '../styles/competences.css';
import cv from './Ressources/Marrot-Quentin-cvImage.png';
import CVForDownload from './Ressources/MarrotQuentinCVAvecLien.pdf';

function competences() {
  return (
      <div className="competences">
          <div className="competencesContent">
              <div className="imageAndButton">
                <img src={cv} className="imageCV" alt="CV" />
                  <a href={CVForDownload} download="Marrot-Quentin-CV.pdf">
                  <button className="cvButton" >Télécharger mon CV
                  </button>
                  </a>
              </div>
              <div className="competencesText">
                  <h2>Général</h2>
                  <p>Lors de mes études en informatique, j'ai eu l'occasion d'en apprendre énormément sur le monde informatique.</p>
                  <p>Mes connaissances s'étalent donc sur beaucoup de domaines. Voici donc une liste de mes compétences/connaissances :</p>

                  <h3>Connaissances théoriques:</h3>
                  <li>Algorithmie sur les tableaux, piles, files, table de hachage, listes simplement et doublement chaînées</li>
                  <li>Algorithmie sur les arbres (binaire, AVL, tas binaire)</li>
                  <li>Algorithmie sur les graphes</li>
                  <li>Probabilité, combinatoire</li>
                  <li>Modélisation d'automates</li>
                  <li>Logique</li>
                  <li>Connaissance des classes de problèmes (P, NP) ainsi que des manipulations autour de ces problèmes (SAT, Réduction de problème)</li>
                  <li>Et autres (programmation dynamique, algorithme glouton, A*)</li>

                  <h3>Connaissances pratiques:</h3>
                  <li>Programmation itérative et récursive</li>
                  <li>Gestion d'allocation dynamique de mémoire en C</li>
                  <li>Programmation fonctionnelle apprise avec OCaml</li>
                  <li>Programmation orientée objet apprise avec Java</li>
                  <li>Programmation web (HTML, CSS, JavaScript, Vue.js)</li>
                  <li>Analyse et classification de données (Descente de gradient, Knn, Régression linéaire, Bayes, arbres aléatoires)</li>
                  <li>Visualisation de données (ACP, LDA)</li>
                  <li>Connaissance des Design patterns</li>

                  <h3>Connaissances fondamentales:</h3>
                  <li>Assembleur (Y86)</li>
                  <li>Programmation système (gestion de fichiers, processus (fork, exec), Tubes, Thread, Signaux)</li>
                  <li>Compilateur (Parsing, analyse sémantique)</li>
                  <li>Système d'exploitation (synchronisation mémoire, swap)</li>

                  <h3>Autres connaissances :</h3>
                  <li>Git</li>
                  <li>Trello</li>
                  <li>Outils comme valgrind ou gdb</li>
                  <li>Makefile, CMakeFile</li>
                  <li>LaTeX</li>

                  <h3>Connaissances acquises lors de projets personnels </h3>

                  J'ai aussi eu l'occasion de travailler sur des projets personnels, ce qui m'a permis d'acquérir des compétences sur React.js, Express.js, ainsi que de manipuler des VM.

              </div>
          </div>
      </div>

  );
}

export default competences;