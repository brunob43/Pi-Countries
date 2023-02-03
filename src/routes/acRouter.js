const { Router } = require('express');
const {Activity} = require("../db")

const acRouter = Router();
const {postActivity} = require ("../controllers/activityController");
const { validateActivity } = require('../middlewares/validacion');

acRouter.post("/", validateActivity, postActivity );

module.exports = acRouter;