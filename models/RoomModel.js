

//todo quand on aura un systeme de login / regsiter / logout fonctionnel

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const ObjectId = mongoose.Schema.Types.ObjectId; //permet de creer un champ qui sera un d'objectId de custommer par exemple


let RoomSchema = new Schema({
    name:
        {
            type: String,
            required: true,
            trim: true,
        },
    slots:
        {
            type: Number,
            required: true,
        },
    users:
        [
            {
                type: ObjectId,
                ref: 'Users'
            }
        ],

});

module.exports = db.model('Room', RoomSchema);