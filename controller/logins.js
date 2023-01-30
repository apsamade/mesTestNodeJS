const Login = require('../models/login')

////////////////////////////////////////////////////Gestion Acceuil
exports.getAcceuil = (req, res, next)=>{
    res.render('profil/acceuil')
}
////////////////////////////////////////////////////Gestion Profil

exports.getLogin = (req, res, next) => { 
    Login.fetchAll((logins)=>{
        console.log('login :', logins)
        console.log('length :', logins.length)
        res.render('profil/profil', {log: logins, nmb: logins.length})
    })
    
}
exports.getProfil = (req, res, next) => {
    const idPro = req.params.idProfil;
    console.log("id : " + idPro)
    res.redirect('/')
}
