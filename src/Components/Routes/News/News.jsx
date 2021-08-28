import {useEffect, useState} from "react";
import {setNewNewsThunk, setNewsThunk} from "../../../redux/reducers/news-reducer";
import {useDispatch, useSelector} from "react-redux";
import NewsBlock from "./NewsBlock/NewsBlock";
import s from './News.module.css'


function News() {
    const [pageNumber, setPageNumber] = useState(2)
    const [countryNews, setCountryNews] = useState('ru')
    const [categoryNews, setCategoryNews] = useState('business')

    const [countryNewsIsShowed, setCountryNewsIsShowed] = useState(false)
    const [categoryNewsIsShowed, setCategoryNewsIsShowed] = useState(false)

    const [moreButtonIsDisabled, setMoreButtonIsDisabled] = useState(false)
    const [showButtonIsDisabled, setShowButtonIsDisabled] = useState(true)

    const news = useSelector(state => state.newsReducer.news)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNewsThunk(countryNews, categoryNews, 1))
    }, [])

    // const makeRandomIdForUser = (min, max) => {
    //     let rand = min + Math.random() * (max + 1 - min);
    //     return Math.floor(rand);
    // }

    console.log(countryNews)
    console.log('render')
    return (
        <div className={s.news}>
            <div className={s.newsEditMode}>
                <div>
                    <button onClick={() => {
                        setCountryNewsIsShowed(!countryNewsIsShowed)
                        setShowButtonIsDisabled(false)
                    }}>country</button>
                    {countryNewsIsShowed ?
                        <ul>
                            <li onClick={() => setCountryNews('ru')}>Russia</li>
                            <li onClick={() => setCountryNews('us')}>United States</li>
                            <li onClick={() => setCountryNews('ua')}>Ukraine</li>
                            <li onClick={() => setCountryNews('ae')}>United Arab Emirates</li>
                            <li onClick={() => setCountryNews('ar')}>Argentina</li>
                            <li onClick={() => setCountryNews('gr')}>Greece</li>
                            <li onClick={() => setCountryNews('lt')}>Lithuania</li>
                            <li onClick={() => setCountryNews('fr')}>France</li>
                            <li onClick={() => setCountryNews('za')}>South Africa</li>
                            <li onClick={() => setCountryNews('ng')}>Nigeria</li>
                            <li onClick={() => setCountryNews('il')}>Israel</li>
                            <li onClick={() => setCountryNews('ch')}>Switzerland</li>
                        </ul> : null}
                </div>
                <div>
                    <button onClick={() => {
                        setCategoryNewsIsShowed(!categoryNewsIsShowed)
                        setShowButtonIsDisabled(false)
                    }}>category</button>

                    {categoryNewsIsShowed ?
                        <ul>
                            <li onClick={() => setCategoryNews('business')}>business</li>
                            <li onClick={() => setCategoryNews('entertainment')}>entertainment</li>
                            <li onClick={() => setCategoryNews('general')}>general</li>
                            <li onClick={() => setCategoryNews('health')}>health</li>
                            <li onClick={() => setCategoryNews('science')}>science</li>
                            <li onClick={() => setCategoryNews('sports')}>sports</li>
                            <li onClick={() => setCategoryNews('technology')}>technology</li>
                        </ul> : null}
                </div>
                <button disabled={showButtonIsDisabled} style={{height: '34px', marginRight: '15px'}} onClick={() => {
                    setShowButtonIsDisabled(true)
                    dispatch(setNewsThunk(countryNews, categoryNews, 1))
                    setPageNumber(2)
                    setCountryNewsIsShowed(false)
                    setCategoryNewsIsShowed(false)
                }}>show
                </button>
                <div className={s.divText}>
                    {`${categoryNews} ${countryNews}`}
                </div>
            </div>
            {news ?
                <div>
                    {news.map(a => <NewsBlock key={a.title}
                                              author={a.author}
                                              publishedAt={a.publishedAt}
                                              title={a.title}
                                              imgUrl={a.urlToImage}
                                              description={a.description}
                                              content={a.content}
                                              url={a.url}
                    />)}
                    <div className={s.divButton}>
                        <button disabled={moreButtonIsDisabled} onClick={() => {
                            setMoreButtonIsDisabled(true)
                            dispatch(setNewNewsThunk(countryNews, categoryNews, pageNumber))
                            pageNumber <= 4 ? setPageNumber(pageNumber + 1) : alert('The news ran out.')
                            setTimeout(() => setMoreButtonIsDisabled(false), 5000)
                        }}>
                            More
                            <p>˅</p>
                        </button>
                    </div>
                </div> : <div>No news</div>}
        </div>
    )
}

export default News