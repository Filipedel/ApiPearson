const getDummy = "Select * from dummy";
const getid = "Select * from dummy where id = $1";
const checkEmailExists = "Select d from dummy d where d.email = $1";
const addUser = "Insert into dummy ( name, email,age,dob) Values ($1, $2, $3, $4)";
const deleteuser = "DELETE FROM dummy WHERE id = $1";
const updateUser = "UPDATE dummy SET name = $1 WHERE id = $2";

module.exports={
    getDummy,
    getid,
    checkEmailExists,
    addUser,
    deleteuser,
    updateUser,
}