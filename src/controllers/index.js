const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('<h1> Hello World </h1>')
});

router.get('/data', (req, res) => {
    res.json({data: 'data'})
})

module.exports = router;