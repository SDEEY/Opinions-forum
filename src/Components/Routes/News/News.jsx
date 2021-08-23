import {useEffect} from "react";
import {setNewsThunk} from "../../../redux/reducers/news-reducer";
import {useDispatch, useSelector} from "react-redux";
import NewsBlock from "./NewsBlock/NewsBlock";

function News() {
    const news = useSelector(state => state.newsReducer.news)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNewsThunk(1))
    }, [])

    // const makeRandomIdForUser = (min, max) => {
    //     let rand = min + Math.random() * (max + 1 - min);
    //     return Math.floor(rand);
    // }

    return (
        <div style={{backgroundColor: '#e5e5e5', padding: '20px 25px'}}>
            {news.map(a => <NewsBlock key={a.title}
                                      author={a.author}
                                      publishedAt={a.publishedAt}
                                      title={a.title}
                                      imgUrl={a.urlToImage}
                                      description={a.description}
                                      content={a.content}
                                      url={a.url}
            />)}
        </div>
    )
}

export default News