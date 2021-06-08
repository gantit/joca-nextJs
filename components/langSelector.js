import { useRouter } from 'next/router'

const langSelector = () => {
  const router = useRouter()

  const changeLang = (e) => {
    console.log('value', e.target.value)
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
