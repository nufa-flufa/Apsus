'use strict'
import { storageService } from '../../../service/async-storage.service.js'
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
            }
            else {

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

var gNotes = [

    {
        id: 'j101',
        type: "textBox",
        title:'',
        isPinned: false,
        color:'blue',
        
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: 'j103',
        type: "to-do",
        title:'',
        isPinned: false,
        color:'blue',
        info: {
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    },
    {
        id: 'j104',
        type: "to-do",
       
        isPinned: true,
        color:'blue',
        info: {
            title:'To-Dos for the week',
            todos: [
                { txt: "Buy milk", doneAt: null },
                { txt: "Clean the house", doneAt: null },
                { txt: "Take the cat for a walk", doneAt: null },
                { txt: "Call Bibi", doneAt: null },

            ]
        }
    },
    {
        id: 'j105',
        type: "textBox",
        isPinned: false,
        color:'green',
        title:'',
        info: {
            txt: "What Do you call someone that dosen't fart in public? \n a private tutor"
        }
    },
    {
        type: 'video-note',
        isPinned: false,
        color:'blue',
        info: {
            title: '',
            vidUrl: 'https://www.youtube.com/embed/3OC2aPCuzjo',
        }
    },
    {
        type: 'video-note',
        isPinned: false,
        color:'blue',
        info: {
            title: 'הראל סקעת המלך',
            vidUrl: 'https://www.youtube.com/embed/AcpgsbFvnbM',
        }
    },
    {
        type: 'video-note',
        isPinned: false,
        color:'blue',
        info: {
            title: 'לא לשכוח לראות',
            vidUrl: 'https://www.youtube.com/embed/zuCsnK5c9jY',
        }
    },
    {
        type: 'video-note',
        isPinned: true,
        color:'white',
        info: {
            title: '',
            imgUrl: 'https://cdn.vox-cdn.com/thumbor/NoYZ8hcQ2y-aTJfq5qc03moWeD0=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/16022155/A_Consensus_sm.jpg',
        }
    },
    {
        type: 'video-note',
        isPinned: false,
        color:'pink',
        info: {
            title: 'last ski trip',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx5Y0wtvbzEzTZuBRhc-30w_cZ9-RfjhHNMA&usqp=CAU',
        }
    },

];

var survey =
{
    title: 'Robots Shopping',
    cmps: [
        {
            type: 'textBox',
            info: {
                label: 'Simple Note',
            }
        },
        {
            type: 'to-do',
            info: {
                label: 'Write your To Do\'s',
            }
        },

        {
            type: 'videoNote',
        },
        {
            type: 'imageNote',
            
        },

    ]
}