const Login = require('../models/login')


////////////////////////////////////////////////////Gestion inscription
exports.getAddLogin = (req, res, next) => {
    res.render('admin/inscription');
}
exports.postAddLogin = (req, res, next) => {
    const pseudo = req.body.pseudo 
    const mdp = req.body.mdp
    const photo = req.body.photo
    const login = new Login(pseudo, mdp, photo);
    login.save();
    res.redirect('profil')
}
////////////////////////////////////////////////////Gestion Connexion

exports.getConnexion = (req, res, next) => {
    res.render('admin/connexion');
}
exports.postConnexion =  (req, res, next) => {
    console.log(req.body)
    res.redirect('profil')
}

////////////////////////////////////////////////////Gestion Edit

exports.getEdit = (req, res, next)=>{
    Login.fetchAll((logins)=>{
        res.render('admin/edit-profil', {log: logins, nmb: logins.length})
    })
    
}
////////////////////////////////////////////////////Gestion Admin profil
exports.getAdminProfil = (req, res, next)=>{
    res.render('admin/admin-profil')
}