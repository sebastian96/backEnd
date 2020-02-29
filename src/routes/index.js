const router = require('express').Router();
const pool = require('../database');

router.get('/', async (req, res) => {   
    const questions = await pool.query("SELECT * FROM proyecto.questions ORDER BY id_type_question");
    console.log(req);
    res.send(questions);
})

module.exports = router;
