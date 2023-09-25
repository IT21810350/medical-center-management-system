const router = require('express').Router();
let Room = require('../../Models/ResourcePersonModel/Rooms');

// get rooms
router.route('/').get((req, res) => {
    Room.find()
        .then(room => res.json(room))
        .catch(err => res.status(400).json('Error: ' + err));
});

// add rooms
router.route('/add').post((req, res) => {
    const roomNumber = req.body.roomNumber;
    const status = req.body.status;
    const roomType = req.body.roomType;

    const newRoom = new Room({
        roomNumber,
        status,
        roomType
    });

    newRoom.save()
        .then(() => res.json('Room added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// delete room
router.route('/:id').delete((req, res) => {
    Room.findByIdAndDelete(req.params.id)
        .then(() => res.json("Room Deleted!"))
        .catch(err => res.status(400).json("Error: " + err));
})

module.exports = router;