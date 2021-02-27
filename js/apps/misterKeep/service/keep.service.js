'use strict'
import {
    storageService
} from '../../../service/async-storage.service.js'
export const keepService = {
    getNotes,
    getByType,
    makeId,
    deleteNote,
    saveNote,
    getById,
    updateNote,
    // sortNote
}

const NOTES_KEY = 'notes'

function getNotes() {
    return storageService.query(NOTES_KEY)
        .then(notes => {
            if (!notes || !notes.length) {
                storageService.postMany(NOTES_KEY, gNotes)
                return gNotes
            } else {
                return notes
            }
        })
}

function saveNote(note) {
    return storageService.post(NOTES_KEY, note)
}

function updateNote(editNote) {
    return storageService.put(NOTES_KEY, editNote)
}

function getByType(type) {
    console.log('loca service getByType:', type)
    return survey.cmps.find(cmp => cmp.type === type)
}

function getById(noteId) {
    return storageService.get(NOTES_KEY, noteId)
}

function makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function deleteNote(noteId) {
    return storageService.remove(NOTES_KEY, noteId)

}

// function sortNote(note) {
//     return getNotes()
//         .then(notes => {
//             console.log('first appearnce',notes)
//             if (note.isPinned) {
//                 let idx = notes.pinned.findIndex(pinnedNote => pinnedNote.id === note.id)
//                 notes.notPinned.push(note)
//                 notes.pinned.splice(idx, 1)
//             } else {
//                 console.log(note.id)
//                 // console.log(notes.notPinned)
//                 let idx = notes.notPinned.findIndex(simpleNote => simpleNote.id === note.id)
//                 notes.pinned.push(note)
//                 notes.notPinned.splice(idx, 1)
//             }
//             storageService._save(NOTES_KEY, notes)
//         })
// }


var gNotes = [

    {
        id: 'j101',
        type: "textBox",
        isPinned: false,
        color: 'blue',
        info: {
            txt: "Fullstack Me Baby!"
        }
    },

    {
        id: 'j103',
        type: "to-do",
        isPinned: false,
        color: 'blue',
        info: {
            todos: [{
                    txt: "Do that",
                    doneAt: null
                },
                {
                    txt: "Do this",
                    doneAt: 187111111
                }
            ]
        }
    }
];

var survey = {
    title: 'Robots Shopping',
    cmps: [{
            type: 'textBox',
            info: {
                label: 'Simple Note',
            }
        },
        {
            type: 'to-do',
            info: {
                label: 'Write your To Do\'s',
                opts: ['Great', 'Fine', 'Crap', 'Worst Ever']
            }
        },

        {
            type: 'videoNote',
            info: {
                label: 'Quality:',
                max: 5
            }
        },
        {
            type: 'imageNote',
            info: {
                label: 'Tune your photo:',
                // imgUrl: 'https://res.cloudinary.com/daahi2yaz/image/upload/v1557175588/Robots/Crypto-robots.jpg'
                imgUrl: 'https://res.cloudinary.com/daahi2yaz/image/upload/v1547889015/Robots/spotmini-975475584.jpg'
                // imgUrl: 'https://res.cloudinary.com/daahi2yaz/image/upload/v1555521791/Robots/maxresdefault.jpg'
                // imgUrl: 'https://res.cloudinary.com/demo/image/upload/lady.jpg'
            }
        },

    ]
}