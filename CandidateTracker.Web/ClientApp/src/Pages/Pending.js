import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

const Pending =() =>{

    const[pending, setPending] = useState([]);

    useEffect(()=>{
        const getPending = async () =>{
            const {data} = await axios.get('/api/candidates/getpending');
            setPending(data);
        };
        getPending();
    })
    const tableRow = p =>{
        return (
            <tr key= {p.id}>
                <td>
                    <Link to={`/pending/details/${p.id}`}>
                        View Details
                    </Link>
                </td>
                <td>{p.firstName}</td>
                <td>{p.lastName}</td>
                <td>{p.phoneNumber}</td>
                <td>{p.email}</td>
            </tr>
        );
    }
        return(
            <table className="table table-hover table-bordered table-striped">
                <thead>
                    <tr>
                        <th></th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {pending.map(p=>tableRow(p))}
                </tbody>
            </table>
        );
    }
export default Pending;