//Importacion de React.
import React from 'react'
import {createRoot} from 'react-dom/client'


//Importar el Layout para tus componentes.
import Layout from './Layout.jsx'

const root = createRoot(document.querySelector("#app"))
root.render(<Layout/>)

