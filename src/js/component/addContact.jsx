import React, { useContext } from "react";
import { Context } from "../store/appContext";
import {Link} from 'react-router-dom'



export function NewContactForm(){

    const{actions}=useContext(Context)

    return (
        <div className="col-8 mx-auto">
            <h1 className="text-center pt-5">Add new contact</h1>
            <form onSubmit={(e)=>{actions.addNewContact(e)}}>
        <div className="mb-3">
            <label htmlFor="inputName" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="inputName" placeholder="Full Name"/>
        </div>
        <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail" placeholder="Enter email"/>
        </div>
        <div className="mb-3">
            <label htmlFor="inputPhone" className="form-label">Phone</label>
            <input type="text" className="form-control" id="inputPhone" placeholder="Enter phone"/>
        </div>
        <div className="mb-3">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="Enter addres"/>
        </div>
        <button className="btn btn-primary col-12" >Save</button>
        </form>
        <a><Link to='/'>Or get back to contacts</Link></a>
        </div>
    )
}