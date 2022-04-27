import React, { useState, useContext } from 'react';
import axios from "axios";
import { useHistory } from 'react-router';
import { useStatusCounts } from '../Context';

const AddCandidate = () => {
    const ctx = useStatusCounts();
    const [Candidate, SetCandidate] = useState({ firstName: '', lastName: '', email: '', phoneNumber: '', notes: '' })
    const history = useHistory();

    const onTextChange = e => {
        const copy = { ...Candidate };
        copy[e.target.name] = e.target.value;
        SetCandidate(copy);
    };

    const addCandidate = async () => {
        await axios.post(`/api/candidates/addcandidate`, Candidate);
        ctx.updateCounts();
        history.push("/");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body bg-light">
                        <h4>Add Candidate</h4>
                        <input type="text" name="firstName" placeholder="First Name" className="form-control" onChange={onTextChange} />
                        <br />
                        <input type="text" name="lastName" placeholder="Last Name" className="form-control" onChange={onTextChange} />
                        <br />
                        <input type="text" name="email" placeholder="Email" className="form-control" onChange={onTextChange} />
                        <br />
                        <input type="text" name="phoneNumber" placeholder="Phone Number" className="form-control" onChange={onTextChange} />
                        <br />
                        <textarea rows="5" className="form-control" name="notes" placeholder="Notes" onChange={onTextChange} />
                        <br />
                        <button className="btn btn-primary" onClick={addCandidate}>Submit</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AddCandidate;