
import Head from 'next/head'
import { useState } from 'react'
import Router from 'next/router'

export default function Login() {
    const [user, setUser] = useState("")
    return (
        <body>
            <div style={{margin:0, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Head>
                    <title>Usuário</title>
                </Head>
                <div className="container-login">
                    <p style={{color: "#00FA9A", fontFamily: 'Segoe UI', fontSize: 30, textAlign: 'center'}}>Escolha seu nome</p>
                    <p style={{color: "#D3D3D3", fontSize: 10, fontFamily: 'Segoe UI'}}>Lembre-se desse usuário para acessar novamente.</p>
                    <input  className="input-user" type="text" onChange={(event) => setUser(event.target.value)} />
                    <button className="btn-signin" type="submit" onClick={() => {
                        if(user.length > 0) {
                            localStorage.setItem('user-hash', user)
                            Router.push('/Home')
                        }else {
                            alert('Digite um nome para se identificar')
                        }
                    }}>ENTRAR</button>
                </div>
            </div>
        </body>

    )
}