import {
  storageService
} from '../../service/async-storage.service.js'

const MAILS_KEY = 'mails'
const gMails = [{
  "id": "OXeMG8wNskc",
  "subject": "Hey there MrBit",
  "body": "halo halo mishtara yes po shod hlaila",
  "to": ['Yaron Biton', 'Asaf'],
  "sentAt": 1551133930594,
  "isStar": true,
  "isRead": false,
  "from": 'me',
},{
  "id": "OXe81awNskc",
  "subject": "Bla Bla",
  "body": "muki puki shuki bla bla",
  "to": ['Stav'],
  "sentAt": 1551149930594,
  "isStar": true,
  "isRead": true,
  "from": 'me',
},{
  "id": "0de81awNskc",
  "subject": "Read meeeee",
  "body": "asta la vi sta",
  "to": ['Shachar'],
  "sentAt": 1551249930594,
  "isStar": false,
  "isRead": true,
  "from": 'me',
}];

export const mailService = {
  query,
  remove,
  save,
  getEmptyMail,
  getById,
  put
}

function query() {
  return storageService.query(MAILS_KEY)
    .then(mails => {
      if (!mails.length) {
        mails = gMails;
        storageService._save(MAILS_KEY, gMails);
      }
      return mails;
    });
}

function remove(mailId) {
  return storageService.remove(MAILS_KEY, mailId);
}

function save(mail) {
  if (mail.id) {
    return storageService.put(MAILS_KEY, mail);
  } else {
    return storageService.post(MAILS_KEY, mail);
  }
}

function getEmptyMail() {
  return {
    "subject": "",
    "body": "",
    "to": [],
    "sentAt": 2020,
    "isStar": true,
    "isRead": false,
    "from": 'me',
  }
}

function getById(id) {
  return storageService.get(MAILS_KEY, id);
}

function put(mail) {
  return storageService.put(MAILS_KEY, mail);
}