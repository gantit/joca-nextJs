---
title: Orden de las carpetas en React
published: true
description: A medida que nuestro proyecto crece, el mantener un orden se hace difícil.
tags: javascript, reactJs, redux, testing
cover_image: https://me.joca.dev/code.jpeg
date: '10/02/2021'
order: 1
---

# Orden de las carpetas en React

La idea de tener un orden en las carpetas siempre nos trae de cabeza, por ello propongo el uso de esta estructura en base a los diferentes proyectos que tenemos. Siempre que se pueda, la idea es que cada fichero tenga su `.test` y su `index.js`

```
Fichero/
  index.js
  Fichero.js
  Fichero.test.js
```

De esta forma, podríamos tener cada uno de los con sus respectivos test y sus principales dependencias. Por ejemplo, si es un componente, que este tenga su `.scss` o su contenedor `.container.js` en caso de que se requiera conectar al redux.

### Los nuevos containers serán componentes

Con esto, lo que conseguiremos, es separar el conectar con el redux en un HOC. Allí es dónde podemos tratar los datos que vienen del Redux en caso de ser necesario.

```
Fichero/
  index.js
  Fichero.js
  Fichero.test.js
  Fichero.scss
  Fichero.container.js
```

Un ejemplo del fichero de container, puede ser:

```javascript
import { connect } from 'react-redux'
import Fichero from './Fichero'
import { FicheroAction } from './store/actions/academy.actions'

const FicheroContainer = ({ name, surname }) => {
  const nameLowerCase = name.toLowerCase()
  const surnameLowerCase = surname.toLowerCase()

  return <Fichero name={nameLowerCase} surname={surnameLowerCase} />
}

const mapStateToProps = ({ data }) => {
  const user = data.user
  return user
}

const mapDispatchToProps = (dispatch) => ({
  getData: (data) => dispatch(FicheroAction(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Fichero)
```

Esto nos permitiría conectar el componente y separar las props de redux, mientras que las otras props del componente estarían en el fichero del mismo. Ya que hemos tocado el tema de redux, la propuesta para la organización de las carpetas sería la siguiente:

Dado el caso de que todas las peticiones se hagan mediante las actions, es conveniente que se metan los servicios dentro de la carpeta `store/ o redux/` quedando de esta forma:

```
store/
  actions/
  reducers/
  services/
```

En caso de que se gestionen las peticiones dentro de redux, veo conveniente hacer una carpeta aparte para los `services\`, ya que en esta carpeta es donde se efectuarán las llamadas a las api's.

```
store/
  actions/
  reducers/
  services/
    user/
      index.js
      user.js
      user.test.js
    ...
```

Tanto para los actions como para los reducers, sería recomendable tener la misma estructura de las carpetas

```
store/
  actions/
    user/
      user.actions.js
      user.actions.test.js
      index.js
    ...
  reducers/
    user/
      user.reducers.js
      user.reducers.test.js
      index.js
    ...
  services/
    user/
      index.js
      user.js
      user.test.js
    ...
```

### Estructura de las carpetas

La estructura planteada para las carpetas, sería algo como esto:

```
components/
  Avatar/
    index.js
    Avatar.js
    Avatar.test.js
    Avatar.scss
  login/
    index.js
    login.js
    login.test.js
    login.scss
    login.container.js
  Button/
    index.js
    Button.js
    Button.test.js
    Button.scss
  ...
config/
  configureStore.js
  i18n.js
  icons.js
  ...
hooks/
  useCallback/
    index.js
    useCallback.js
    useCallback.test.js
  useScroll/
    index.js
    useScroll.js
    useScroll.test.js
  ...
routes/
  index.js
  routes.js
store/
  actions/
    user/
      user.actions.js
      user.actions.test.js
      index.js
    ...
  reducers/
    user/
      user.reducers.js
      user.reducers.test.js
      index.js
    ...
  services/
    user/
      index.js
      user.js
      user.test.js
    ...
utils/
  flatObject/
    index.js
    flatObject.js
    flatObject.test.j
  getLocation/
    index.js
    getLocation.js
    getLocation.test.js
  ...
```

<div style="max-width:400px; margin:0 auto;">
  <img src="https://media.giphy.com/media/2rqEdFfkMzXmo/giphy.gif" width="100%" height="100%" alt="abre tu mente"/>
</div>

Teniendo en cuenta esto, las carpetas de `containers o views` dejarían de existir, pero nos surge una duda
_¿cómo podemos evitar tener tanta lógica en los componentes de este tipo de componentes?_
La respuesta es simple, separando más los componentes.

Para esto, propongo plantear la norma de una única responsabilidad. Es decir, tengo un componente que tiene que estar conectado a redux, tambien tiene que hacer llamadas a la api y debe tener lógica para que se pinte de una forma u otra.

Un caso de uso puede ser una lista, que dependiendo del tipo de usuario. se debe qué renderizar de una forma u otra y si se hace click en un elemento de la lista, debe hacer una request.

Para este caso, la estructura con su separación sería algo como:

```
components/
  *** Conectamos el redux con las listas
  Lists/
    index.js
    Lists.js
    Lists.test.js
    Lists.scss
    Lists.container.js
  *** La lista de tipo usuario
  ListUser/
    index.js
    ListUser.js
    ListUser.test.js
    ListUser.scss
  *** La lista de tipo admin
  ListAdmin/
    index.js
    ListAdmin.js
    ListAdmin.test.js
    ListAdmin.scss
  *** El ítem lista y sería en el que se haga la llamada a la api
  ListItem/
    index.js
    ListItem.js
    ListItem.test.js
    ListItem.scss
  ...
```
