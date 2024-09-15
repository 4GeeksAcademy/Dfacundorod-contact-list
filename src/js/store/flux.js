const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},
			],
			contacts:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getApi:()=>{
				fetch(`https://playground.4geeks.com/contact/agendas/Facundo/contacts`,{
					method: 'GET'
				})
				.then(response=>{
					if(response.ok){
						return response.json()
					}else{return fetch(`https://playground.4geeks.com/contact/agendas/Facundo`,{
						method: 'POST',
						headers: {'Content-Type': 'application/json'},
						body: JSON.stringify({slug: `Facundo`})
					}).then(resp=>resp.json())
					.then(data=>{console.log(`esto es POST`, data); getapi()})
				}})
				.then(data=>{
					console.log(`GET`, data);
					setStore( {contacts: data.contacts})
				})
			},				
			deleteContact :(idContact)=>{
				fetch(`https://playground.4geeks.com/contact/agendas/Facundo/contacts/`+`${idContact}`,{
					method:'DELETE',
				})
				.then(resp=>resp.text())
				.then(data=>{
					console.log(`DELETE `, data);
					fetch(`https://playground.4geeks.com/contact/agendas/Facundo/contacts`,{
						method: 'GET'
					})
					.then(resp=>resp.json())
					.then(data=>{
						console.log(`GET`, data);
						setStore( {contacts: data.contacts})
					})
				})
			},
			addNewContact:(e)=>{
				e.preventDefault();
				let bodyRequest ={
					"name": `${e.target[0].value}`,
					"email": `${e.target[1].value}`,
					"phone": `${e.target[2].value}`,
					"address": `${e.target[3].value}`
				  };
				console.log(e)
				fetch('https://playground.4geeks.com/contact/agendas/Facundo/contacts',{
					method: 'POST',
					headers:{'Content-Type': 'application/json'},
					body:JSON.stringify(bodyRequest),
				}).then(resp=>resp.json())
				.then(data=>{
					console.log(`se agrego `, data);
					fetch(`https://playground.4geeks.com/contact/agendas/Facundo/contacts`,{
						method: 'GET'
					})
					.then(resp=>resp.json())
					.then(data=>{
						console.log(`GET`, data);
						setStore( {contacts: data.contacts})
					})
				})
			}


		}
	};
};

export default getState;
