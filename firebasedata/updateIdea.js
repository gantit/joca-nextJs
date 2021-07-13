import { db, firebase } from './db'

const updateIdea = ({
  autor,
  buyer,
  dislikes,
  id,
  likes,
  selled,
  text,
  visible
}) => {
  const data = {
    text,
    likes: firebase.firestore.FieldValue.increment(likes === true ? 1 : 0),
    dislikes: firebase.firestore.FieldValue.increment(
      dislikes === true ? 1 : 0
    ),
    selled,
    buyer,
    autor,
    visible
  }
  return db.collection('idea').doc(id).update(data)
}

export default updateIdea
