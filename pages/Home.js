import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'


export default function Home() {
    const [gamesList, setGamesList] = useState([])
    const [perPage, setPerpage] = useState(10)
    const [page, setPage] = useState(1)
    const totalResults = gamesList.length
    const totalPage = Math.ceil(totalResults / perPage)

    useEffect(() => {
        console.log('useEfffffect')
        const user = localStorage.getItem('user-hash')
        async function getGames() {
            const response = await axios.get('http://3.211.115.231',{
                method: 'get',
                headers: {
                    'user-hash': `${user}`
                }
            })
            setGamesList(response.data)
        }
        getGames()
    },[])

    const controls  = {
        next () {
            setPage((prevState) => prevState + 1)
            window.scrollTo(0,0)
        },
        previous () {
            if(page === 1) {

            }else {
                setPage((prevState) => prevState - 1)
            }
            window.scrollTo(0,0)
        }
    }

    const list = {
        update() {
            let _page = page - 1
            let start = _page * perPage
            let end = start + perPage
            const PaginatedItems = gamesList.slice(start,end)
            return (
                <div>
                    {PaginatedItems.map((element) => {
                        return <p>{element.name}</p>
                    })}
                </div>
            )
        }

    }
  return (
    <div className="container">
      <Head>
        <title>Steam API Lista</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1 className="title">
          API Steam - App Masters
        </h1>
        <div>
            {list.update()}
        </div>
        <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{display: "flex", flexDirection: "row", alignItems: 'center'}}>
                <button onClick={() => controls.previous()} className="btn-controls" type="submit">Pagina Anterior</button>
                <p style={{fontFamily: 'Segoe UI', fontSize: 20, marginLeft: 5, marginRight: 5}}>{page}</p>
                <button onClick={() => controls.next()} className="btn-controls" type="submit">Próxima Pagina</button>
            </div>
            <div>
                <p style={{fontFamily: 'Segoe UI', fontSize: 14}}>Total de paginas: {totalPage}</p>
            </div>
        </div>
    </div>
  )
}
