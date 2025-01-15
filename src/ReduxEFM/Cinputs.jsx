//Cinput.jsx
import { useDispatch } from "react-redux";
import { Add,Sub,Div, Mul ,nbr1Change, nbr2Change} from "./EFMaction";


function Cinputs() {
    

    const dispatch = useDispatch()
   
    return (
        <div className="container mt-3">
        <div className="row g-2">
            <div className="col-md-3">
                <label className="form-label">Nombre 1 :</label>
                <input 
                    type="number" 
                    className="form-control" 
                    onChange={(e) => dispatch(nbr1Change(e.target.value))} 
                />
            </div>
            <div className="col-md-3">
                <label className="form-label">Nombre 2 :</label>
                <input 
                    type="number" 
                    className="form-control" 
                    onChange={(e) => dispatch(nbr2Change(e.target.value))} 
                />
            </div>
        </div>
        <div className="mt-3">
            <button 
                type="button" 
                className="btn btn-primary me-2" 
                onClick={() => dispatch(Add())} 
                value="add"
            >
                +
            </button>
            <button 
                type="button" 
                className="btn btn-secondary me-2" 
                onClick={() => dispatch(Sub())} 
                value="sub"
            >
                -
            </button>
            <button 
                type="button" 
                className="btn btn-success me-2" 
                onClick={() => dispatch(Mul())} 
                value="mul"
            >
                *
            </button>
            <button 
                type="button" 
                className="btn btn-danger" 
                onClick={() => dispatch(Div())} 
                value="div"
            >
                /
            </button>
        </div>
    </div>
    
    );
}

export default Cinputs;