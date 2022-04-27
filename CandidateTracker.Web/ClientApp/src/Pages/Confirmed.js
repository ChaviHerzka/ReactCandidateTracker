import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Confirmed= () => {

const [confirmed, setConfirmed] = useState([]);
const [showNotes, setShowNotes] = useState([]);

useEffect(()=>{
    const getConfirmed = async () => {
        const {data} = await axios.get('/api/candidates/getconfirmed');
        setConfirmed(data);
    };
    getConfirmed();
})

const tableRow = c => {
    return (
        <tr key={c.id}>
            <td>{c.firstName}</td>
            <td>{c.lastName}</td>
            <td>{c.phoneNumber}</td>
            <td>{c.email}</td>
            {showNotes && <td>{c.notes}</td>}
        </tr>
    );
}
const toggleNotes = () => {
    setShowNotes(!showNotes)
}
return (
    <div className='container'>
        <div>
            <h1>Confirmed</h1>
        <div>
            <button className='btn btn-success' onClick={toggleNotes}>Toggle Notes</button>
            <table className='table table-hover table-striped table-bordered'>
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
                    {confirmed.map(c =>tableRow(c))}
                </tbody>
            </table>
        </div>
    </div>
</div>
    );
};
export default Confirmed;