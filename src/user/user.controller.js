const { pool } = require('../config/db')

exports.createUser = async (req, res) => {
    try{
        
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
}

exports.readUser = async (req, res) => {
    try{
        await pool.query('SELECT * FROM users')
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
}

exports.updateUser = async (req, res) => {
    try{
        res.send("User created.")
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
}

exports.deleteUser = async (req, res) => {
    try{
        res.send("User created.")
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
}