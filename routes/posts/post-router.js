const router = require('express').Router();
const db = require('../data/db-config.js');

router.get('/', (req, res) => {
    console.log(req);
    //db().select(*).from('posts')
    db('posts')
        .then(result => {
            console.log(results);
            res.status(200).json(results);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: 'this went wrong' + error.message
            });
        });
});

router.get('/:id', async (req, res) => {
    try {
        const result = await db('posts').where({ id: req.params.id});
        res.json(result[0]);
    } catch(error) {
        res.status(500).json({
            message: 'this went wrong' + error.message
        });
    }

});

router.post('/', async (req, res) => {
    // INSERT INTO posts (title, content) VALUES ("a", "b")
    try {
        const result = await db('posts').insert({ 
            title: req.body.title, 
            contents: req.body.contents 
        });

        console.log(result);

    } catch(error) {
        res.status(500).json({
            message: 'this went wrong' + error.message
        });
    }
});

router.put('/:id', (req, res) => {
    db('posts').where({ id: req.params.id })
        .update({ 
            title: req.body.title,
            contents: req.body.contents
        })
        .then(result => {

        })
        .catch(error => {
            res.status(500).json({
                message: 'this went wrong' + error.message
            });
        });
});


router.delete('/:id', (req, res) => {
    db('posts').where({ id: req.params.id }).del()
        .then(result => {

        })
        .catch(error => {

        })
})

export.modules = router;