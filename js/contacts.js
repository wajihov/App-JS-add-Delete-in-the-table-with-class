console.log("Bienvenue dans le gestionnaire des contacts");
var choix;
var table=[];
listeChoix();
do{
    choix = prompt("Choisir une option");
    listeChoix();
    var ChoixNumber = parseInt(choix) ;
    if(ChoixNumber==1){
        listerTable();
    }
    if(ChoixNumber==2){
        ajouterUtilisateur();
    }    
}while (ChoixNumber!=0)

class Utilisateur {
    constructor(lastname, firstname){
        this.nom=lastname;
        this.prenom=firstname;
    }
}

function listerTable(){    
    console.log("Voici la listes de tous les contactes")
    table.forEach(item=>{
        console.log(`le nom  :  ${item.nom}  prenom  :  ${item.prenom} `);        
    })
    listeChoix();
}

function ajouterUtilisateur(){
    var name= prompt("Donner le nom : ");
    var lastname= prompt("Donner le prenom : ");
    var user={
        nom:name,
        prenom:lastname
    };
    table.push(user)    
    console.log("le nouveau contact a été ajouté");
    listeChoix();
}

function listeChoix(){
    console.log("\n1 : Lister les contacts");    
    console.log("2 : Ajouter un contact");
    console.log("0 : Quitter");
}

console.log("Au revoir !");
