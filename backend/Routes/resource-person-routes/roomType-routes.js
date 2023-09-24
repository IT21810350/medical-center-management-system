const router = require('express').Router();
let RoomType = require('../../Models/ResourcePersonModel/RoomTypeModel');

// get roomTypes
router.route('/').get((req, res) => {
    RoomType.find()
        .then(roomTypes => res.json(roomTypes))
        .catch(err => res.status(400).json('Error: ' + err));
});

// add roomType
router.route('/add').post((req, res) => {
    const roomType = req.body.roomType;
    const description = req.body.description;

    const newRoomType = new RoomType({
        roomType,
        description
    });

    newRoomType.save()
        .then(() => res.json('RoomType added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;