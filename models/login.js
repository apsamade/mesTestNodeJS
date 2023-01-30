const fs = require('fs');
const path = require('path');
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'logins.json'
);
const getLoginsFromFiles = (cb)=>{

    fs.readFile(p, (err, fileContent)=> {
        if(err){
            cb([]);
        }else{
            cb(JSON.parse(fileContent));
        }
    })
}
module.exports = class Login{
    constructor(pseudo, mdp, photo, id){
        // la method constructor permet de créer et intialiser un objet de cette classe
        this.pseudo = pseudo;
        this.mdp = mdp;
        this.photo = photo
        this.id = id;
    }

    save(){
        this.id = Math.random().toString();
        getLoginsFromFiles(logins => {
            logins.push(this);
            fs.writeFile(p, JSON.stringify(logins), (err) => {
                console.log(err)
            })
        });
        // le fichier data doit etre obligatoirement créer mais le logins.json peut se creer seul
    }

    static fetchAll(cb){
        // Une méthode de classe ou une méthode statique est une méthode qui n'agit pas sur des variables d'instance mais uniquement sur des variables de classe
        //fetchAll permet de recupere d'un coup l'ensemble des resultats d'une requete
        
        getLoginsFromFiles(cb);
    }
}