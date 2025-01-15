// Coutput.jsx
import { useSelector } from "react-redux";

function Coutput() {
  const data = useSelector((state) => state);
  return (
    <div className="container mt-4">
      {data.OP !== "" ? (
        <>
          <h1 className="text-center text-info">
            {data.nb1} {data.OP} {data.nb2} = {data.result}
          </h1>
          <h2 className="text-center text-muted">
            Opérations effectuées : {data.nbrOP}
          </h2>
        </>
      ) : (
        <p className="text-center text-danger">Aucune opération effectuée.</p>
      )}
    </div>
  );
}

export default Coutput;
