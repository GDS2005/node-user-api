const pool = require('../config/db')

exports.createUser = async (req, res) => {
    try{
        const {email, password_hash, first_name, last_name} = req.body;
        const result = await pool.query(
            `INSERT INTO users (email, password_hash, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING *`,
            [email, password_hash, first_name, last_name]
        );
        res.status(201).json(result.rows[0]);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
}

exports.readUsers = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}

exports.readUser = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM users WHERE id = ${id}`);

        if (result.rows.length === 0){
            return res.status(404).json({ message: "User not found" })
        }

        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        // Validamos que haya al menos un campo para actualizar
        const allowedFields = ['email', 'password_hash', 'first_name', 'last_name'];
        const fields = Object.keys(data).filter(key => allowedFields.includes(key));

        if (fields.length === 0) {
            return res.status(400).send('No valid fields provided to update.');
        }

        // Armamos dinámicamente la query
        const setClause = fields.map((field, index) => `${field} = $${index + 1}`).join(', ');
        const values = fields.map(field => data[field]);

        const result = await pool.query(
            `UPDATE users SET ${setClause} WHERE id = $${fields.length + 1} RETURNING *`,
            [...values, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).send('User not found.');
        }

        res.status(200).json(result.rows[0]);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}

exports.deleteUser = async (req, res) => {
    try{
        const {id} = req.params;
        const {rowCount} = await pool.query(`DELETE FROM users WHERE id = ${id} RETURNING *`);
        
        if (rowCount === 0){
            return res.status(404).json({ message: "User not found" })
        }else{
            return res.json({ message: "User deleted" })
        }
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
}