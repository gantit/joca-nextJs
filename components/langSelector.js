import { useRouter } from 'next/router'

const langSelector = () => {
  const router = useRouter()

  const changeLang = (e) => {
    router.push(router.pathname, router.pathname, {
      locale: e.target.value
    })
  }

  return (
    <select onChange={changeLang}>
      <option value="es">Español</option>
      <option value="en">English</option>
    </select>
  )
}

export default langSelector
