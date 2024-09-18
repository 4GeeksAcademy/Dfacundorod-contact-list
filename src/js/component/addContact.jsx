import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import {Link, useNavigate, useParams} from 'react-router-dom'



export function NewContactForm(){
    const navigate = useNavigate()
    const {id} = useParams();
    const{store, actions}=useContext(Context);
    const [contactData, setContactData]= useState({
        name:'',
        email:'',
        phone:'',
        address:'',
    })
    
    const handleChange = (e) => {
        setContactData({
            ...contactData,
            [e.target.name]: e.target.value
        });
    };    

    const submitActions=(e)=>{
        e.preventDefault();
        if(id){
            actions.editContact(id, contactData)
        }else {
            actions.addNewContact(contactData)
        };
        navigate('/');
    }

    useEffect(()=>{
        if(id){
            const findConctact = store.contacts.find(contact=>contact.id.toString()===id.toString());
            setContactData(findConctact)
        }
       
    },[id, store.data])

    return (
        <div className="col-8 mx-auto">
            <h1 className="text-center pt-5">{id ? `Edit contact` : `Add new contact`}</h1>
            <form onSubmit={(e)=>{submitActions(e)}}>
        <div className="mb-3">
            <label htmlFor="inputName" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="inputName" name="name" onChange={handleChange} value={`${contactData.name}`} placeholder="Full Name"/>
        </div>
        <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail" name="email" onChange={handleChange} value={`${contactData.email}`} placeholder="Enter email"/>
        </div>
        <div className="mb-3">
            <label htmlFor="inputPhone" className="form-label">Phone</label>
            <input type="text" className="form-control" id="inputPhone" name="phone" onChange={handleChange} value={`${contactData.phone}`} placeholder="Enter phone"/>
        </div>
        <div className="mb-3">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" name="address" onChange={handleChange} value={`${contactData.address}`} placeholder="Enter addres"/>
        </div>
        <div>{id ? <button className="btn btn-primary col-12" >Edit</button> :  <button className="btn btn-primary col-12" >Save</button>}</div>
       
        </form>
        <Link to='/'>Or get back to contacts</Link>
        </div>
    )
}