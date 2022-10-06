/* CENTRES D'INTERETS */

let imagesCENTRESINTERETS = ['./images/dvlp.jpeg', './images/ordinateur.jpeg', './images/cinema.png', './images/photographie.jpeg', './images/musique.png', './images/benevole.png', './images/voyager.jpeg', './images/sport.jpeg'];
let nomsCENTRESINTERETS = ['Programmation', 'Technologie', 'Cinéma', 'Photographie', 'Musique', 'Bénévolat', 'Voyager', 'Sport'];

let contenuCENTRESINTERETS ='';
for (let leCentre=0; leCentre<nomsCENTRESINTERETS.length; leCentre+=1) {
    contenuCENTRESINTERETS += '<div class="card imgCentreInteret">' +
                                    '<div class="card-side row front">' +
                                        '<img src="'+imagesCENTRESINTERETS[leCentre]+'" class="imgCentreInteret" alt="">' +
                                    '</div>' +
                                    '<div class="card-side row back brown-nuance h-100">' +
                                        '<div class="m-auto">'+nomsCENTRESINTERETS[leCentre]+'</div>' +
                                    '</div>' +
                                '</div>';
    document.getElementById('chaqueCentreInteret').innerHTML = contenuCENTRESINTERETS;
}

/* ATOUTS */

let imagesATOUTS = ['./images/ponctualite.png', './images/creativite.png', './images/reactivite.png', './images/rigueur.png', './images/curiosite.png', './images/organisation.png', './images/enthousiasme.png'];
let nomsATOUTS = ['Ponctuelle', 'Créative', 'Réactive', 'Rigoureuse', 'Curieuse', 'Organisée', 'Positive'];

let contenuATOUTS ='';
for (let lAtout=0; lAtout<nomsATOUTS.length; lAtout+=1) {
    contenuATOUTS +='<div class="card imgCentreAtout">' +
                        '<div class="card-side row front">' +
                            '<img src="'+imagesATOUTS[lAtout]+'" class="imgCentreAtout" alt="">' +
                        '</div>' +
                        '<div class="card-side row back brown-nuance h-100">' +
                            '<div class="m-auto">'+nomsATOUTS[lAtout]+'</div>' +
                        '</div>' +
                    '</div>' ;
    document.getElementById('chaqueAtout').innerHTML = contenuATOUTS;
}

/* ETUDES */

let imagesETUDES = ['./images/ynov.jpeg', './images/uppa.jpeg', './images/harountazieff.jpeg'];
let intitulesETUDES = ['Master', 'Licence informatique', 'Bac S'];
let descriptionsETUDES = ['Expert développement web', 'Numérique pour les Environnements Connectés', 'Sciences de l\'Ingénieur'];
let datesETUDES = ['2022 - 2024', '2019 - 2022', '2019'];
let ecolesETUDES = ['YNOV', 'U.P.P.A.', 'Lycée Haroun Tazieff'];
let codepostalsETUDES = ['33063', '64600', '40990'];
let villesETUDES = ['BORDEAUX', 'ANGLET', 'SAINT-PAUL-LES-DAX'];
let liensETUDES = ['https://www.ynov.com/formation/ynov-masteres/expert-developpement-web/', 'https://formation.univ-pau.fr/fr/catalogue/sciences-technologies-sante-STS/licence-12/licence-informatique-45_1/l1-l2-l3-informatique-parcours-numerique-pour-les-environnements-connectes-nec-JDODLMEJ.html', 'https://www.lyceeharountazieff.com/'];

let contenuEtudes ='';
for (let lEtude=0; lEtude<intitulesETUDES.length; lEtude+=1) {
    contenuEtudes += '<div class="col-xs-6 col-sm-4 col-md-4">' +
                        '<div class="c text-center mx-4">' +
                            '<div class="wrap">' +
                                '<div class="my-5 dateEtudes"><h3>'+datesETUDES[lEtude]+'</h3></div>' +
                                '<img src="'+imagesETUDES[lEtude]+'" alt="" class="box_shadow"> ' +
                                '<div class="info">' +
                                    '<div class="h3">'+intitulesETUDES[lEtude]+'</div>' +
                                    '<div class="h5">'+descriptionsETUDES[lEtude]+'</div>' +
                                '</div>' +
                            '</div>' +
                            '<div class="more brown-nuance">' +
                                '<div class="mt-4">' +
                                    ''+ecolesETUDES[lEtude]+'<br>'+codepostalsETUDES[lEtude]+' - '+villesETUDES[lEtude]+'' +
                                    '<a href="'+liensETUDES[lEtude]+'">' +
                                        '<p class="mt-4 orangered-text">Accéder au site</p>' +
                                    '</a>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>';
    document.getElementById('chaqueEtudes').innerHTML = contenuEtudes;
}

/* PARCOURS */

let degradesPARCOURS = ['blue-nuancePARCOURS', 'blue-nuancePARCOURS', 'red-nuancePARCOURS', 'orange-nuancePARCOURS', 'red-nuancePARCOURS', 'red-nuancePARCOURS', 'green-nuancePARCOURS'];
let imagesPARCOURS = ['./images/avenirdata.jpeg', './images/avenirdata.jpeg', './images/intermarche.jpeg', './images/stPaulLesDax.jpeg', './images/feria.jpeg', './images/feria.jpeg', './images/harmonie.jpg'];
let intitulesPARCOURS = ['Alternance informatique et data', 'Stage informatique et data', 'Hôtesse de caisse', 'Stage informatique', 'Vendeuse', 'Vendeuse', 'Bénévole dans une association musicale'];
let datesPARCOURS = ['2022 - 2024', 'Avril - Août 2022', 'Juin / Juillet / Août 2021', '2020', 'Août 2019', 'Août 2017', 'Depuis 2015'];
let descriptionsPARCOURS = ['Exploitation, compréhension, modélisation de la donnée B2B et développement web', 'Exploitation, compréhension, modélisation de la donnée B2B et développement web', 'Poste d’hôtesse de caisse, agent d\'entretien et mise en rayon', 'Gestion d’un parc d’appareils mobiles (tablettes) via le MDM Jamf Pro (Apple)', 'Vente de tickets pour les navettes bus / parkings relais pour les férias de DAX (journée & nuit)', 'Vente de tickets pour les navettes bus / parkings relais pour les férias de DAX (journée)', 'Aide à l\'organisation et aux animations lors des concerts et déplacements'];
let societesPARCOURS = ['Avenir Data', 'Avenir Data', 'Intermarché', 'Mairie', 'SPL Trans-Landes', 'SPL Trans-Landes', 'Harmonie de Christus'];
let codepostalsPARCOURS = ['40100', '40100', '40075', '40990', '40990', '40990', '40990'];
let villesPARCOURS = ['DAX', 'DAX', 'CASTETS', 'SAINT-PAUL-LES-DAX', 'SAINT-VINCENT-DE-PAUL', 'SAINT-VINCENT-DE-PAUL', 'SAINT-PAUL-LES-DAX'];
let liensPARCOURS = ['https://www.avenirdata.com/', 'https://www.avenirdata.com/', 'https://www.intermarche.com/magasins/05798/castets-40260/infos-pratiques', 'https://www.st-paul-les-dax.fr/', 'https://www.trans-landes.fr/', 'https://www.trans-landes.fr/', 'https://www.harmonie-de-christus.com/'];

let contenuParcours ='';
for (let leparcours=0; leparcours<intitulesPARCOURS.length; leparcours+=1) {
    contenuParcours += '<div class="col-xs-6 col-sm-4 col-md-4">' +
                            '<div class="box">' +
                                '<div class="our-services box_shadow '+degradesPARCOURS[leparcours]+'">' +
                                    '<div class="icon"> <img src="'+imagesPARCOURS[leparcours]+'" class="imageParcours box_shadow" alt=""> </div>' +
                                    '<div class="h2">'+intitulesPARCOURS[leparcours]+'</div>' +
                                    '<div class="h4">'+datesPARCOURS[leparcours]+'</div>' +
                                    '<div class="mt-4">'+descriptionsPARCOURS[leparcours]+'</div>' +
                                    '<div class="mt-4 pb-4">' +
                                        ''+societesPARCOURS[leparcours]+'<br>'+codepostalsPARCOURS[leparcours]+' - '+villesPARCOURS[leparcours]+'' +
                                        '<a href="'+liensPARCOURS[leparcours]+'">' +
                                            '<p class="mt-4 orangered-text">Accéder au site</p>' +
                                        '</a>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>';
    document.getElementById('chaqueParcours').innerHTML = contenuParcours;
}

/* COMPETENCES - LANGAGES */

let imagesLANGAGES = ['./images/html.png', './images/css.png', './images/php.png', './images/js.png', './images/sql.png', './images/python.png', './images/swift.jpeg', './images/java.png', './images/c.png', './images/vba.svg'];
let nomsLANGAGES = ['HTML', 'CSS', 'PHP', 'JS', 'SQL', 'Python', 'Swift', 'Java', 'C', 'VBA'];

let contenuLANGAGES ='';
for (let leLangage=0; leLangage<nomsLANGAGES.length; leLangage+=1) {
    contenuLANGAGES += '<div class="card petitLogo">' +
                            '<div class="card-side row front">' +
                                '<img src="'+imagesLANGAGES[leLangage]+'" class="petitLogo" alt="">' +
                            '</div>' +
                            '<div class="card-side row back brown-nuance h-100">' +
                                '<div class="m-auto">'+nomsLANGAGES[leLangage]+'</div>' +
                            '</div>' +
                        '</div>';
    document.getElementById('chaqueLangage').innerHTML = contenuLANGAGES;
}

/* COMPETENCES - FRAMEWORKS */

let imagesFRAMEWORKS = ['./images/bootstrap.png', './images/django.png'];
let nomsFRAMEWORKS = ['Bootstrap', 'Django'];

let contenuFRAMEWORKS ='';
for (let leFramework=0; leFramework<nomsFRAMEWORKS.length; leFramework+=1) {
    contenuFRAMEWORKS += '<div class="card petitLogo">' +
        '<div class="card-side row front">' +
        '<img src="'+imagesFRAMEWORKS[leFramework]+'" class="petitLogo" alt="">' +
        '</div>' +
        '<div class="card-side row back brown-nuance h-100">' +
        '<div class="m-auto">'+nomsFRAMEWORKS[leFramework]+'</div>' +
        '</div>' +
        '</div>';
    document.getElementById('chaqueFramework').innerHTML = contenuFRAMEWORKS;
}

/* COMPETENCES - LOGICIELS */

let imagesLOGICIELS = ['./images/office.png', './images/emeditor.webp', './images/rstudio.png', './images/xcode.png', './images/android.png', './images/eclipse.png', './images/phpStorm.png', './images/visualStudio.png', './images/heidisql.png', './images/workbench.png', './images/phpmyadmin.jpeg', './images/mamp.png', './images/jamf.png', './images/balsamiq.png'];
let nomsLOGICIELS = ['Office', 'EmEditor', 'RStudio', 'XCode', 'Android<br>Studio', 'Eclipse', 'PhpStorm', 'VS Code', 'HeidiSQL', 'Workbench', 'Php<br>MyAdmin', 'Mamp', 'Jamf Pro', 'Balsamiq'];

let contenuLOGICIELS ='';
for (let leLogiciel=0; leLogiciel<nomsLOGICIELS.length; leLogiciel+=1) {
    contenuLOGICIELS += '<div class="card petitLogo">' +
        '<div class="card-side row front">' +
        '<img src="'+imagesLOGICIELS[leLogiciel]+'" class="petitLogo" alt="">' +
        '</div>' +
        '<div class="card-side row back brown-nuance h-100">' +
        '<div class="m-auto">'+nomsLOGICIELS[leLogiciel]+'</div>' +
        '</div>' +
        '</div>';
    document.getElementById('chaqueLogiciel').innerHTML = contenuLOGICIELS;
}