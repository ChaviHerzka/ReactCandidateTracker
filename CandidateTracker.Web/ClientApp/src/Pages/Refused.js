import React,{useState, useEffect} from "react";
import axios  from "axios";

const Refused = () => {
    const [refused, setRefused] = useState([]);
    const [showNotes, setShowNotes] = useState();

    useEffect(()=> {
        const getRefused = async() =>{
            const {data} = await axios.get('/api/candidates/getrefused')
            setRefused(data);
        };
        getRefused();
    });

     const tableRow = r => {
        return (
            <tr key={r.id}>
                <td>{r.firstName}</td>
                <td>{r.lastName}</td>
                <td>{r.phone}</td>
                <td>{r.email}</td>
               {showNotes &&<td>{r.notes}</td>}
            </tr>
        );
    }
    const toggleButton =() =>{
        setShowNotes(!showNotes)
    }

    return(
        <div className="container">
            <div>
                <h1>Refused</h1>
            <div>
                <button className="btn btn-success" onClick={toggleButton}>Toggle Button</button>
                <table className="table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            {showNotes && <th>Notes</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {refused.map(r => tableRow(r))}
                    </tbody>
                </table>
            </div>
        </div>
     </div>
    )
}
export default Refused;