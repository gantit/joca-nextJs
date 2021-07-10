const mapItemsFromFirebaseToItemsObject = (doc) => {
  const data = doc.data()
  const { registered } = data
  const id = doc.id
  return {
    ...data,
    id,
    registered: +registered.toDate()
  }
}

export default mapItemsFromFirebaseToItemsObject
