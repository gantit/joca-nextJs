import { getIdeas } from 'firebasedata'

const getAllIDeas = async (req, res) => {
  const ideasList = await getIdeas()

  res.status(200).json({ ideasList })
}

export default getAllIDeas
