const fs = require('fs');

const getNotes = function() {
    return fs.readFileSync('notes.json');
}

const addNote = function(title, body) {
    const notes = loadNotes();
    const duplicateNote = notes.filter(function(note){
        return note.title === title
    })

    if (duplicateNote.length === 0) {
        notes.push({
            title: title,
            body: body
        });
    
        saveNotes(notes);
        console.log("new node added");
    } else {
        console.log("node title taken");
    }
}

const removeNote = function(title) {
    const notes = loadNotes();
    const notesToKeep = notes.filter(function(n){
        return n.title !== title;
    })

    saveNotes(notesToKeep);
}

const saveNotes = function(notes) {
    var notesJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesJSON);
}

const loadNotes = function() {
    try {
        const data = fs.readFileSync('notes.json');
        const dataJSON = data.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};