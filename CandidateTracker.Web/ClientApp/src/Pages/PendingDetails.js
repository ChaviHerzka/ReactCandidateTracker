import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useStatusCounts} from '../Context';

const PendingDetails =() =>{
    const ctx = useStatusCounts();

    const params = useParams();
    const {id} = params;
    const [candidate, setCandidate] = useState({FirstName: '', lastName: '', email: '', phoneNumber: '', status: '', notes: ''});

    useEffect(()=>{
        const getDetails = async () =>{
            const {data} = await axios.get(`/api/candidates/getcandidateforid?id=${id}`)
            setCandidate(data);
        }
        getDetails();
    }, [candidate]);

    const onConfirmClick = async() =>{
        await axios.post(`/api/candidates/confirm?id=${id}`)
        ctx.updateCounts();
    };

    
    const onRefuseClick = async() =>{
        await axios.post(`/api/candidates/refuse?id=${id}`)
        ctx.updateCounts();
    };

    return (
        <div className='row'>
            <div className="col-md-6 offset-md-3">
                <div className='card card-body bg-light'>
                    <h4>Name: {candidate.FirstName} {candidate.lastName}</h4>
                    <h4>Email: {candidate.email}</h4>
                    <h4>Phone: {candidate.phoneNumber}</h4>
                    <h4>Status: {candidate.status}</h4>
                    <h4>Notes: {candidate.notes}</h4>
                    <p></p>

                    {candidate.status === 0 && <div>
                        <button className='btn btn-primary' onClick={onConfirmClick}>Confirm</button>
                        <button className='btn btn-danger' onClick={onRefuseClick}>Refuse</button>
                    </div>}
                </div>
             </div>
        </div>
    );

};
export default PendingDetails;