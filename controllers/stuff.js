const Thing = require('../models/Thing');


// middleware pour intercepter les requettes post
exports.createThing = (req, res, next) => {
    delete req.body._id; // delete le id envoye par le frontend car deja genere par MongoDB
    const thing = new Thing({
        ...req.body // operator spread ... ou title: req.body.title(reads the info sent through the route)
    });
    thing.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !' })) // la promesse
        .catch(error => res.status(400).json({ error }));
};

//route pour modifier(update) les infos de l'objet cree
exports.modifyThing = (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, {...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch(error => res.status(400).json({ error }));
};

// route pour DELETE objet
exports.deleteThing = (req, res, next) => {
    Thing.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
        .catch(error => res.status(400).json({ error }));
};


// route get pour trouver un seul objet findOne(methode) avec l'id et les : rendent le id dynamique(parametre) 
exports.getOneThing = (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(404).json({ error }));
};

// route get pour recuperer tous les objets de la BD
exports.getAllThings = (req, res, next) => {
    Thing.find()
        .then(things => res.status(200).json(things))
        .catch(error => res.status(400).json({ error }));
};