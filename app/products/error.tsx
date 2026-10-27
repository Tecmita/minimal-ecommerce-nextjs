"use client"

import BackButton from "../components/BackButton"


export default function Error ({error, reset}:{ error: Error, reset: ()=> void})  {


  const humanMessage = error.message.includes("JSON") ? "No pudimos obtener los datos del servidor. Inténtalo de nuevo." : error.message

  return  <div>
      <h2>Ocurrió un error 😢</h2>
      <p>{humanMessage}</p>
      <button onClick={() => reset()}>Reintentar</button>
      <BackButton/>
    </div>
  
}
