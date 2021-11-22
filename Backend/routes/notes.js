const express = require('express')
const router = express.Router()
const Note = require('../models/Note')
const fetchUser = require('../middleware/fetchUser')
const { body, validationResult } = require('express-validator');

//# Route 1: Adding notes : POST "/api/auth/addnote". login required

router.post("/addnote", fetchUser, [
    body('title', "title can't be blank").isLength({ min: 1 }),
    body('description', "description can't be blank").isLength({ min: 1 }),
], async (req, res) => {

    /// if there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { title, description, tag } = req.body
        let note = new Note({
            title, description, tag, user: req.user.id
        })
        let savedNote = await note.save()
        res.json(savedNote)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal error accrued")
    }

})



//# Route 2: getting notes from db : GET "/api/auth/fetchnotes". login required
router.get("/fetchnotes", fetchUser, async (req, res) => {
    try {
        let notes = await Note.find({ user: req.user.id })
        res.json(notes)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal error accrued")
    }
})



//# Route 3: Update existing notes  : PUT "/api/auth/updatenotes/:id". login required
router.put("/updatenote/:id", fetchUser, async (req, res) => {
    const { title, description, tag } = req.body
    try {
        let newNote = {}
        if (title) { newNote.title = title }
        if (description) { newNote.description = description }
        if (tag) { newNote.tag = tag }

        let note = await Note.findById(req.params.id) /// finding with note's id which has been passed in api endpoint (:id)
        if (!note) {
            return res.status(404).send("Not found")
        }
        //req.params.id=particular note's id,  req.user.id=note's user id 
        /// Allow updating only if user owns this note
        if (note.user.toString() !== req.user.id) {   // comparing between the user id associated to note's id and req user id which has been sent in header in a wrap of jsonWebToken
            return res.status(401).send("Not allowed")
        }
        let updatedNote = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ updatedNote })
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal error accrued")
    }
})



//# Route 4: delete existing notes  : DELETE "/api/auth/deletenotes/:id". login required
router.delete("/deletenote/:id", fetchUser, async (req, res) => {
    try {
        let note = await Note.findById(req.params.id) /// finding with note's id which has been passed in api endpoint (:id)
        if (!note) {
            return res.status(404).send("Not found")
        }
        //req.params.id=particular note's id,  req.user.id=note's user id 
        /// Allow updating only if user owns this note
        if (note.user.toString() !== req.user.id) {   // comparing between the user id associated to note's id and req user id which has been sent in header in a wrap of jsonWebToken
            return res.status(401).send("Not allowed")
        }
        let deletedNote = await Note.findByIdAndDelete(req.params.id)
        res.json({success:"Note deleted" })
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal error accrued")
    }
})
module.exports = router