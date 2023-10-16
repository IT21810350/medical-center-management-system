const router = require('express').Router();
let Room = require('../../Models/ResourcePersonModel/Rooms');

// get rooms
router.route('/').get((req, res) => {
    Room.find()
        .then(room => res.json(room))
        .catch(err => res.status(400).json('Error: ' + err));
});

// get room by id
router.route('/:id').get((req, res) => {
    Room.findById(req.params.id)
        .then(room => res.json(room))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.post("/getroombyid", async (req, res) => {

    const roomid = req.body.roomid

    try {
        const rooms = await Room.findOne({ _id: roomid })
        res.send(rooms)
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});

// add rooms
router.route('/add').post((req, res) => {
    const name = req.body.name;
    const rentPerDay = req.body.rentPerDay;
    const type = req.body.type;
    const imageUrls = req.body.imageUrls;
    const currentBookings = req.body.currentBookings;
    const description = req.body.description;

    const newRoom = new Room({
        name,
        rentPerDay,
        type,
        imageUrls,
        currentBookings,
        description
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

// update room
router.route('/update/:id').post((req, res) => {
    Room.findById(req.params.id)
        .then(room => {
            room.name = req.body.name;
            room.rentPerDay = req.body.rentPerDay;
            room.type = req.body.type;
            room.imageUrls = req.body.imageUrls;
            room.currentBookings = req.body.currentBookings;
            room.description = req.body.description;

            room.save()
                .then(() => res.json('Room updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

// add room
// router.post("/add", async (req, res) => {
//     try {
//         const newRoom = new Room(req.body)
//         await newRoom.save()

//         req.send("new room added successfully")
//     } catch (error) {
//         return res.status(4000).json({ error });
//     }
// })

module.exports = router;