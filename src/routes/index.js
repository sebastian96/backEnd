const router = require('express').Router();
const pool = require('../database');

router.get('/api:id', async (req, res) => {
    const { id } = req.params;

    const questions = await pool.query(`SELECT rhq.id_restaurant, res.restaurant_name, rhq.id_question, que.question, que.id_type_question FROM restaurants_has_questions rhq LEFT JOIN questions que ON rhq.id_question = que.id_question LEFT JOIN restaurants res ON rhq.id_restaurant = ${id}`);
    
    const assamble = () => {
        let res = []; 
        questions.forEach(element => {
            res.push({
                id_question: element.id_question,
                question: element.question
            })
        });
        return res;
    }

    const response = {
        id_restaurant: questions[0].id_restaurant,
        restaurant_name: questions[0].restaurant_name,
        questions: assamble()
    }

    res.json(response);
})

module.exports = router;
