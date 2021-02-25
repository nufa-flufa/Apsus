import {
  storageService
} from '../../../service/async-storage.service.js'

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
  "to": ['me'],
  "sentAt": 1551149930594,
  "isStar": true,
  "isRead": true,
  "from": 'Stav',
},{
  "id": "0de81awNskc",
  "subject": "Read meeeee",
  "body": "asta la vi sta",
  "to": ['Shachar'],
  "sentAt": 1551249930594,
  "isStar": false,
  "isRead": true,
  "from": 'me',
},{
  "id": "0deac945skc",
  "subject": "Come work with us",
  "body": "come work with us at (random work place name)",
  "to": ['me'],
  "sentAt": 1651249930594,
  "isStar": false,
  "isRead": false,
  "from": 'random work place name',
},{
  "id": "0deac94aaaa",
  "subject": "Im here from the begin of time",
  "body": "this thing is history",
  "to": ['me'],
  "sentAt": 1,
  "isStar": true,
  "isRead": false,
  "from": 'Time Lord',
},{
  "id": "0decsdfaaa",
  "subject": "please dont distroy our world",
  "body": "I know you can do it but please dont",
  "to": ['Thanos'],
  "sentAt": 1551349130094,
  "isStar": true,
  "isRead": false,
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
    "sentAt": null,
    "isStar": false,
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