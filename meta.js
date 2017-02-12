module.exports = function() {
    return function(req, res, next) {
        res.locals.title = "Daniel Melo | That Dev ";
        res.locals.meta = {
        description: "Daniel Melo é um desenvolvedor web brasileiro fisicamente residente em Goiânia e cidadão da Terra",
        copyright: "© "+ ( new Date().getFullYear() )+" Daniel Melo"
        }
        next();
    }
}


 