import { Express, Router } from 'express';

const router = Router();

router.get(
    '/',
    function (req, res) {
        res.status(200).json({ success: true, msg: 'Hello' });
    },
);
function routing(app: Express) {
    app.use('/', router);
}
export { routing };
