'use strict'
export const keepService = {
    getNotes,
    getByType
}

function getNotes(){
    return notes
}

function getByType(type){
    return survey.cmps.find(cmp => cmp.type === type)
}

var notes = [
    {
        type: "textbox",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    // {
    //     type: "NoteImg",
    //     info: {
    //         url: "http://some-img/me",
    //         title: "Me playing Mi"
    //     },
    //     style: {
    //         backgroundColor: "#00d"
    //     }
    // },
    {
        type: "to-do",
        info: {
            // label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    }
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
                opts: ['Great', 'Fine', 'Crap', 'Worst Ever']
            }
        },

        {
            type: 'linearScale',
            info: {
                label: 'Quality:',
                max: 5
            }
        },
        {
            type: 'photoTuner',
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