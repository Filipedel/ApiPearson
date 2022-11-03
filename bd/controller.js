//import database pearson
//import queries 

const queries = require("./queries");
//all we got here is control querry if we want some specificities in tables

const pool = require("../bd/bd");




const getDummy = (req, res) => {
   
    pool.query(queries.getDummy,(err,result)=>{
        let data;
        if(err){
            throw err;
        }

        //if we get the result
        data = result.rows;
         res.send({
            "objet": data
        });
    })
}

const getid = (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.getid,[id],(err,result)=>{
        if (err ) throw err;
        res.status(200).json(result.rows);
    })
}

const adduser = (req,res)=>{
    const {name, email, age, dob}= req.body;
    //if someone has already registered his email
    pool.query(queries.checkEmailExists,[email],(err, result)=>{
        if (result.rows.length) {
            res.send("Email already exists");
        }
    
    })
    //add
    pool.query(queries.addUser, [name,email,age,dob],(err,result)=>{
        if(err) throw err;
        res.status(201).send("User has been created successfully!");  
    })


}

const removeUser = (req,res)=>{
    const id = parseInt(req.params.id);
    //see if user exists
    pool.query(queries.getid,[id],(err,result)=>{
        const nouserFound = !result.rows.length;
        if (nouserFound){
        res.send("user does not exist in the database");
        }
        pool.query(queries.deleteuser,[id],(err,result)=>{
            if(err ) throw err;
            res.status(200).send("User has been removed");
        })
        
    });

    
}


//update for example name
const updateuser = (req,res)=>{
    const id = parseInt(req.params.id);
    const {name}= req.body;
    //check if id user exists
    pool.query(queries.getid,[id],(err,result)=>{
        const nouserFound = ! result.rows.length;
        if(nouserFound){
            res.send("User does not exist");
        }
        pool.query(queries.updateUser,[name,id],(err,result)=>{
            if (err) throw err;
            res.status(200).send("Student has been updated succesfully");
        })
    })

}

module.exports = {
    getDummy,
    getid,
    adduser,
    removeUser,
    updateuser,
};