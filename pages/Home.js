import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'


export default function Home() {
    const [gamesList, setGamesList] = useState([])
    const [perPage, setPerpage] = useState(10)
    const [page, setPage] = useState(1)
    const totalResults = gamesList.length
    const totalPage = Math.ceil(totalResults / perPage)
    const [star, setStar] = useState(false)
    const [star2, setStar2] = useState(false)
    const [star3, setStar3] = useState(false)
    const [star4, setStar4] = useState(false)
    const [star5, setStar5] = useState(false)
    const [star6, setStar6] = useState(false)
    const [star7, setStar7] = useState(false)
    const [star8, setStar8] = useState(false)
    const [star9, setStar9] = useState(false)
    const [star10, setStar10] = useState(false)
    const [modal, setModal] = useState(false)

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
            clearStar()
            setPage((prevState) => prevState + 1)
            window.scrollTo(0,0)
        },
        previous () {
            clearStar()
            if(page === 1) {

            }else {
                setPage((prevState) => prevState - 1)
            }
            window.scrollTo(0,0)
        }
    }

    const conditional = (i) => {
        if(i === 0) {
            return <div onClick={() => {
                setModal(true)
                star ? setStar(false) : setStar(true)
            }}>
                    {star ?  <img src="/star-on.png" width="25" height="25" style={{flex: 1}} /> 
                    :  
                    <img src="/star-of.png" width="25" height="25" style={{flex: 1}} />}
                    </div>
        }
        if(i === 1) {
            return <div onClick={() => star2 ? setStar2(false) : setStar2(true)}>
                    {star2 ?  <img src="/star-on.png" width="25" height="25" style={{flex: 1}} /> 
                    :  
                    <img src="/star-of.png" width="25" height="25" style={{flex: 1}} />}
                    </div>
        } 
        if(i === 2) {
            return <div onClick={() => star3 ? setStar3(false) : setStar3(true)}>
                    {star3 ?  <img src="/star-on.png" width="25" height="25" style={{flex: 1}} /> 
                    :  
                    <img src="/star-of.png" width="25" height="25" style={{flex: 1}} />}
                    </div>
        } 
        if(i === 3) {
            return <div onClick={() => star4 ? setStar4(false) : setStar4(true)}>
                    {star4 ?  <img src="/star-on.png" width="25" height="25" style={{flex: 1}} /> 
                    :  
                    <img src="/star-of.png" width="25" height="25" style={{flex: 1}} />}
                    </div>
        } 
        if(i === 4) {
            return <div onClick={() => star5 ? setStar5(false) : setStar5(true)}>
                    {star5 ?  <img src="/star-on.png" width="25" height="25" style={{flex: 1}} /> 
                    :  
                    <img src="/star-of.png" width="25" height="25" style={{flex: 1}} />}
                    </div>
        } 
        if(i === 5) {
            return <div onClick={() => star6 ? setStar6(false) : setStar6(true)}>
                    {star6 ?  <img src="/star-on.png" width="25" height="25" style={{flex: 1}} /> 
                    :  
                    <img src="/star-of.png" width="25" height="25" style={{flex: 1}} />}
                    </div>
        } 
        if(i === 6) {
            return <div onClick={() => star7 ? setStar7(false) : setStar7(true)}>
                    {star7 ?  <img src="/star-on.png" width="25" height="25" style={{flex: 1}} /> 
                    :  
                    <img src="/star-of.png" width="25" height="25" style={{flex: 1}} />}
                    </div>
        } 
        if(i === 7) {
            return <div onClick={() => star8 ? setStar8(false) : setStar8(true)}>
                    {star8 ?  <img src="/star-on.png" width="25" height="25" style={{flex: 1}} /> 
                    :  
                    <img src="/star-of.png" width="25" height="25" style={{flex: 1}} />}
                    </div>
        } 
        if(i === 8) {
            return <div onClick={() => star9 ? setStar9(false) : setStar9(true)}>
                    {star9 ?  <img src="/star-on.png" width="25" height="25" style={{flex: 1}} /> 
                    :  
                    <img src="/star-of.png" width="25" height="25" style={{flex: 1}} />}
                    </div>
        } 
        if(i === 9) {
            return <div onClick={() => star10 ? setStar10(false) : setStar10(true)}>
                    {star10 ?  <img src="/star-on.png" width="25" height="25" style={{flex: 1}} /> 
                    :  
                    <img src="/star-of.png" width="25" height="25" style={{flex: 1}} />}
                    </div>
        }  
    }

    const clearStar = () => {
        setStar(false)
        setStar2(false)
        setStar3(false)
        setStar4(false)
        setStar5(false)
        setStar6(false)
        setStar7(false)
        setStar8(false)
        setStar9(false)
        setStar10(false)
    }

    const arrStar = ['1','2','3','4','5']

    const ModalRating = () => {
        return  (
            <div style={{display: 'flex', flexDirection: 'column', backgroundColor: 'white', width: 200, 
                        height: "auto", padding: 10, borderRadius: 10, alignItems: 'center', justifyContent: 'center',
                        marginLeft: 100, marginBottom: 10}}>
                <p style={{fontFamily: 'Segoe UI', fontSize: 15}}>Deixe sua nota</p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    {arrStar.map(() => {
                        return <div><img src="/star-of.png" width="25" height="25" style={{marginRight: 5}} /></div> 
                    })}
                    <button  onClick={() => {
                        setModal(false)
                    }} type="submit">OK</button>
                </div>
            </div>
        )
    }
    const list = {
        update() {
            let _page = page - 1
            let start = _page * perPage
            let end = start + perPage
            const PaginatedItems = gamesList.slice(start,end)
            return (
                <div className="container-games">
                    {PaginatedItems.map((element, i) => {
                        return (
                            <div style={{display: 'flex', flexDirection: 'row', margin:0, padding:0, alignItems: 'center'}}>
                                <p style={{fontFamily: 'Segoe UI', fontSize: 15, flex: 15}}>{element.name}</p>
                                {conditional(i)}           
                            </div>
                        )
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
            {modal ? <ModalRating /> : "" }
            {list.update()}
        </div>
        <div style={{display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
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
