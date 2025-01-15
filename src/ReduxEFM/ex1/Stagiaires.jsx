import { useRef, useState } from "react";

function Stagiaires() {
  const id = useRef(null);
  const matricule = useRef(null);
  const nom = useRef("");
  const ville = useRef("");
  const moyenne = useRef(0);
  const codePostale = useRef(null);

  const [Stagiaires, setStagiaire] = useState([
    {
      id: 1,
      matricule: 1454,
      nom: "Alaoui",
      codepostal: 20400,
      ville: "casa",
      moyenne: 12.56,
    },
    {
      id: 2,
      matricule: 1455,
      nom: "Mansouri",
      codepostal: 20400,
      ville: "casa",
      moyenne: 14.67,
    },
  ]);

  const [editingId, setEditingId] = useState(null);
  const [Stagiaure2, setStagiaire2] = useState([]);

  const generateUniqueId = () => {
    return Stagiaires.length > 0
      ? Math.max(...Stagiaires.map((stagiaire) => stagiaire.id)) + 1
      : 1;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nouveauStagiaire = {
      id: editingId !== null ? editingId : generateUniqueId(),
      matricule: matricule.current.value.trim(),
      nom: nom.current.value.trim(),
      ville: ville.current.value.trim(),
      codepostal: codePostale.current.value.trim(),
      moyenne: parseFloat(moyenne.current.value.trim()),
    };

    if (
      !nouveauStagiaire.matricule ||
      !nouveauStagiaire.nom ||
      !nouveauStagiaire.ville ||
      !nouveauStagiaire.codepostal ||
      isNaN(nouveauStagiaire.moyenne) ||
      nouveauStagiaire.moyenne < 0 ||
      nouveauStagiaire.moyenne > 20
    ) {
      return alert(
        "Tous les champs sont obligatoires et la moyenne doit être entre 0 et 20."
      );
    }

    if (
      editingId === null &&
      Stagiaires.some(
        (stagiaire) => stagiaire.matricule === nouveauStagiaire.matricule
      )
    ) {
      return alert("Le matricule doit être unique.");
    }

    if (editingId !== null) {
      setStagiaire(
        Stagiaires.map((stagiaire) =>
          stagiaire.id === editingId ? nouveauStagiaire : stagiaire
        )
      );
      alert("Stagiaire mis à jour avec succès !");
    } else {
      setStagiaire([...Stagiaires, nouveauStagiaire]);
      alert("Stagiaire ajouté avec succès !");
    }

    setEditingId(null);
    resetForm();
  };

  const handleDelete = (theId) => {
    setStagiaire(Stagiaires.filter((stagiaire) => stagiaire.id !== theId));
  };

  const handleEdit = (theId) => {
    const stagiaire = Stagiaires.find((stagiaire) => stagiaire.id === theId);
    if (stagiaire) {
      id.current.value = stagiaire.id;
      matricule.current.value = stagiaire.matricule;
      nom.current.value = stagiaire.nom;
      ville.current.value = stagiaire.ville;
      codePostale.current.value = stagiaire.codepostal;
      moyenne.current.value = stagiaire.moyenne;

      setEditingId(theId);
    }
  };

  const resetForm = () => {
    id.current.value = "";
    matricule.current.value = "";
    nom.current.value = "";
    ville.current.value = "";
    codePostale.current.value = "";
    moyenne.current.value = "";
  };

  const handeFiltrage = () => {
    setStagiaire2(
      Stagiaires.filter(
        (stagiaire) =>
          stagiaire.nom.toLocaleLowerCase() ===
            nom.current.value.toLocaleLowerCase() ||
          stagiaire.ville.toLocaleLowerCase() ===
            ville.current.value.toLocaleLowerCase()
      )
    );
  };

  const initStagiaire2 = () => {
    setStagiaire2([]);
  };

  const calculerStatistiques = () => {
    if (Stagiaires.length === 0) {
      return {
        moyennePlusHaute: null,
        moyennePlusBasse: null,
        moyenneGenerale: null,
      };
    }

    const moyennes = Stagiaires.map((stagiaire) => stagiaire.moyenne);

    const moyennePlusHaute = Math.max(...moyennes);
    const moyennePlusBasse = Math.min(...moyennes);
    const moyenneGenerale =
      moyennes.reduce((total, moyenne) => total + moyenne, 0) / moyennes.length;

    return {
      moyennePlusHaute,
      moyennePlusBasse,
      moyenneGenerale: moyenneGenerale.toFixed(2),
    };
  };

  const statistiques = calculerStatistiques();

  return (
    <>
      <div className="container mt-4">
        {Stagiaires.length > 0 ? (
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Matricule</th>
                <th>Nom</th>
                <th>Ville</th>
                <th>Code Postale</th>
                <th>Moyenne</th>
                <th>Supprimer</th>
                <th>Editer</th>
              </tr>
            </thead>
            <tbody>
              {Stagiaires.map((stagiaire) => (
                <tr key={stagiaire.id}>
                  <td>{stagiaire.id}</td>
                  <td>{stagiaire.matricule}</td>
                  <td>{stagiaire.nom}</td>
                  <td>{stagiaire.ville}</td>
                  <td>{stagiaire.codepostal}</td>
                  <td>{stagiaire.moyenne}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(stagiaire.id)}
                    >
                      Supprimer
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleEdit(stagiaire.id)}
                    >
                      Editer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-danger">La liste des stagiaires est vide.</p>
        )}

        <form onSubmit={handleSubmit} className="my-4">
          <div className="mb-3">
            <label className="form-label">ID</label>
            <input type="text" className="form-control" readOnly ref={id} />
          </div>

          <div className="mb-3">
            <label className="form-label">Matricule</label>
            <input type="text" className="form-control" ref={matricule} />
          </div>

          <div className="mb-3">
            <label className="form-label">Nom</label>
            <input type="text" className="form-control" ref={nom} />
          </div>

          <div className="mb-3">
            <label className="form-label">Ville</label>
            <input type="text" className="form-control" ref={ville} />
          </div>

          <div className="mb-3">
            <label className="form-label">Code Postale</label>
            <input type="text" className="form-control" ref={codePostale} />
          </div>

          <div className="mb-3">
            <label className="form-label">Moyenne</label>
            <input type="text" className="form-control" ref={moyenne} />
          </div>

          <button type="submit" className="btn btn-success me-2">
            {editingId !== null ? "Mettre à jour" : "Ajouter"}
          </button>
          <button
            type="button"
            className="btn btn-warning me-2"
            onClick={handeFiltrage}
          >
            Filtrer ville et nom
          </button>
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={resetForm}
          >
            Vider
          </button>
          <button
            type="button"
            className="btn btn-info"
            onClick={initStagiaire2}
          >
            Initialiser recherche
          </button>
        </form>

        {Stagiaure2.length > 0 ? (
          <div>
            <h5>Résultats de recherche :</h5>
            <ul className="list-group">
              {Stagiaure2.map((stagiaire2) => (
                <li className="list-group-item" key={stagiaire2.id}>
                  {stagiaire2.nom} - {stagiaire2.ville}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-muted">Table de recherche est vide.</p>
        )}

        <div className="my-4">
          <h5>Statistiques des Stagiaires :</h5>
          {Stagiaires.length > 0 ? (
            <ul>
              <li>Moyenne la plus élevée : {statistiques.moyennePlusHaute}</li>
              <li>Moyenne la plus basse : {statistiques.moyennePlusBasse}</li>
              <li>Moyenne générale : {statistiques.moyenneGenerale}</li>
            </ul>
          ) : (
            <p>Aucun stagiaire enregistré.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Stagiaires;
