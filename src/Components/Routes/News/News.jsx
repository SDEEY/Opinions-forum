import {useEffect, useState} from "react";
import {setNewNewsThunk, setNewsThunk} from "../../../redux/reducers/news-reducer";
import {useDispatch, useSelector} from "react-redux";
import NewsBlock from "./NewsBlock/NewsBlock";
import s from './News.module.css'


function News() {
    const [pageNumber, setPageNumber] = useState(2)

    const news = useSelector(state => state.newsReducer.news)
    // const isFetching = useSelector(state => state.newsReducer.isFetching)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNewsThunk(1))
    }, [])

    // const makeRandomIdForUser = (min, max) => {
    //     let rand = min + Math.random() * (max + 1 - min);
    //     return Math.floor(rand);
    // }
    console.log(news)
    return (
        news ?
            <div className={s.news}>
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
                    <button onClick={() => {
                        dispatch(setNewNewsThunk(pageNumber))
                        pageNumber <= 4 ? setPageNumber(pageNumber + 1) : alert('The news ran out.')
                    }}>
                        More
                        <p>˅</p>
                    </button>
                </div>
            </div> : <div>No news</div>
    )
}

export default News