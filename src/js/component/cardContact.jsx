import React, { useEffect} from "react";
import { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLocationDot, faPhone, faEnvelope, faTrash, faPen} from "@fortawesome/free-solid-svg-icons"

export const CardContact = ()=>{
    const {store, actions} = useContext(Context);    

    useEffect(()=>{actions.getApi(); console.log(`esta es store `, store)},[]);

    function editContact(){

    }
    
    return (
        <div className="col-8 mx-auto ">            
            <div className="d-flex justify-content-end py-3">
            <Link to="/new-contact-form" className="btn btn-success ">Add new contact</Link>
            </div>
            {store.contacts.map((contact)=>(
                <div key={contact.id} className="card mb-3">
                    <div className="row g-0 text-secondary">
                        <div className="col-3 d-flex justify-content-center">
                            <img src="https://img.freepik.com/vector-gratis/avatar-personaje-empresario-aislado_24877-60111.jpg?w=740&t=st=1726320735~exp=1726321335~hmac=07be721001d184def920ad28e10d67a34529b8d59472a543f3f905ee7e615143" className="img-fluid rounded-circle m-3 avatarImg" alt="Avatar profile image"/>
                        </div>                        
                        <div className="card-body col-4 ms-3 ">
                                <h5 className="card-title">{contact.name}</h5>
                                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} className="mx-1"/>{contact.address}</p>
                                <p className="card-text"><FontAwesomeIcon icon={faPhone} className="mx-1"/>{contact.phone}</p>
                                <p className="card-text"><FontAwesomeIcon icon={faEnvelope} className="mx-1"/>{contact.email}</p>
                        </div>                        
                        <div className="col-2 d-flex h-25 mt-3 ms-2 gap-3">
                            <Link to={`/new-contact-form/${contact.id}`} className="actionButtons text-black" onClick={editContact}><FontAwesomeIcon icon={faPen} /></Link>
                            <button className="actionButtons" onClick={()=>{actions.deleteContact(contact.id)}}><FontAwesomeIcon icon={faTrash} /></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>          
    )
}