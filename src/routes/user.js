const router = require('express').Router();

router.route('/')
    .get(function (req, res) {
        res.send(req.originalUrl);
    });

export default router;