import { db } from './db'

const removeIdea = ({ id }) => db.collection('idea').doc(id).delete()
export default removeIdea
