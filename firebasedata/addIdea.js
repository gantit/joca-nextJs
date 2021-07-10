import { db, firebase } from './db'

const addIdea = ({
  text,
  likes,
  dislikes,
  selled = false,
  autor = 'gpt-3',
  visible = true,
  buyer = null
}) =>
  db.collection('idea').add({
    text,
    likes,
    dislikes,
    selled,
    buyer,
    autor,
    registered: firebase.firestore.Timestamp.fromDate(new Date()),
    visible
  })

export default addIdea
