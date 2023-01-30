const { default: axios } = require("axios");

const validateActivity = (req,res,next) => {
    const {name, dificult, duration, season} = req.body;
    if(!name) return res.status(400).json({error: "missing name"});
    if(!dificult) return res.status(400).json({error: "missing dificult"});
    if(!duration) return res.status(400).json({error: "missing duration"});
    if(!season)return res.status(400).json({error: "missing season"});
    next();
};




module.exports = {
    validateActivity,
}