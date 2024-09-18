import React from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";

import { CardContact } from "./component/cardContact.jsx";
import { NewContactForm } from "./component/addContact.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<CardContact/>}/>
					<Route path="/new-contact-form" element={<NewContactForm />}/>
					<Route path="/new-contact-form/:id" element={<NewContactForm />}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
