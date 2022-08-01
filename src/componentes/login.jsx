import React from 'react';
import './login.css';
const image = require('../img/imageedit_5_3999388920 1.png');

const Login = () => {
  return (
    <div className='login'>
        <div>
            <form>
            <img src={image} alt="Logo empresa" />
            <div className="input-container">
                <input type="text" id="email" required />
                <label for="email">Correo electronico</label>
            </div>
            <div className="input-container">
                <input type="password" id="password" required />
                <label for="password">Contraseña</label>
            </div>
            <button>Ingresar</button>
            </form>
            <div className='link'>
            <a href="www.google.com">Olvide mi contraseña</a>
            </div>
        </div>
    </div>
  )
}

export default Login