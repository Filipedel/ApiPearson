import React from "react";
import { useState } from "react";
import Modal from "./Popup/Modal";

const Home = ()=>{
    
    //See table
    const [open, isOpen] = useState(false);

    //see modal Add
    const [openmodal, setOpenModal] = useState(false);

    //get data
    const [Data , set] = useState([]);

    //Get all users
    const getAllUsers= async ()=>{
        await fetch("/api/Dummy/")
        .then(response=>response.json())
        .then(d =>{ set(Data =>[...Data,d["objet"]])});
    };

    //Delete Users

    const removeuserid = async(idUser)=>{
        await fetch("/api/Dummy/"+idUser, {method:"Delete"})
        console.log('user has been deleted');
    }
    
    //post addusers
    const addUserinHtml = async(name,email,age,dob)=>{
        await fetch("/api/Dummy/",{
            method:"POST",
            headers:{ 'Content-Type': 'application/json' },
            body: JSON.stringify({name:name,
            email:email,
        age:age,
    dob:dob})});
    }
    
    

    return (
        <div>
            <button onClick={()=>setOpenModal(true)}>Add</button>
            <br></br>
            <button onClick={()=>{getAllUsers();isOpen(true)}}>See table</button>
        {Data[0] !== undefined && open === true ?
        <table >
            <tr> <th> ID</th>     <th>Name</th>      <th>Email </th>      <th> Age </th>    <th>DOB</th></tr>
            {Data[0].map((item)=>{
                return(
                    <tr> <th>{item.id}</th>  <th>{item.name}</th>    <th>{item.email}</th>    <th>{item.age}</th>  <th> {item.dob}</th> <th> <button onClick={()=>{removeuserid(item.id)}}>Delete</button></th></tr>
                )
            })}
</table>
:null}
<Modal open={openmodal} onClose={()=>setOpenModal(false)}/>
</div>
    )
};

export default Home;