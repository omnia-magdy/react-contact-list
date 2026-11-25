import { useState } from "react"
import "./Contacts.css"

const Contacts=()=>{
    const[contacts,setContacts]=useState([{id:1 , name:"omnia" , phone :"01007170216"}])
    const[name,setName]=useState("")
    const[phone,setPhone]=useState("")

    const handleName=(name)=>{
        setName(name)
    }
    const handlePhone=(phone)=>{
        setPhone(phone)
    }

    const addContact=()=>{
        if (!name.trim() || !phone.trim()) return;
        const newContact={
            id:Date.now(),
            name:name,
            phone:phone
        }
        setContacts((prev)=>{
            return ([...prev , newContact])
        })
        setName("")
        setPhone("")
    }

    const deleteContact=(id)=>{
        return(
            setContacts (contacts.filter(i=>i.id !== id))
        )
    }
    return(
        <div className="container">
            <div className="inputs">
                <input type="text" placeholder="Name" value={name} 
                onChange={(e)=>{handleName(e.target.value)}} />

                <input type="text" placeholder="Phone number" value={phone}
                onChange={(e)=>{handlePhone(e.target.value)}} />

                <button onClick={()=>{addContact()}}> Add New Contact</button>
                
            </div>
            {
                contacts.map(contact=>{
                    return(
                        <div key={contact.id} className="contact-details">
                            <div className="info">
                                <p className="id">id : # {contact.id} </p>
                                <p>Name : {contact.name} </p>
                                <p>Phone : {contact.phone} </p>
                            </div>
                            <button onClick={()=>{deleteContact(contact.id)}} >delete</button>
                        </div>
                        
                    )
                })
            }

        </div>
    )
}

export default Contacts