import { db } from './db'
import mapItemsFromFirebaseToItemsObject from './mapItemsFromFirebaseToItemsObject'

const ORDER = {
  DESC: 'desc',
  ASC: 'asc'
}

const getIdeas = () => {
  return db
    .collection('idea')
    .orderBy('registered', ORDER.DESC)
    .get()
    .then(({ docs }) => {
      return docs.map(mapItemsFromFirebaseToItemsObject)
    })
}

export default getIdeas
