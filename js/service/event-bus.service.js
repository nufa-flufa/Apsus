import {
    mailService
} from '../apps/misterEmail/service/mail-service.js'
import {
    keepService
} from '../apps/misterKeep/service/keep.service.js'

export const eventBus = new Vue()

eventBus.$on('mailToNote', (val) => {
    const note = {
        id: keepService.makeId(),
        type: "textBox",
        isPinned: true,
        color: 'blue',
        info: {
            label: val.subject,
            txt: val.body
        }
    }
    keepService.saveNote(note);
})
/*eventBus.$on('puk', (val) => {
    console.log('Puk Happened', val)
})*/