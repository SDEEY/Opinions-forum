import s from './NewsBlock.module.css'

function NewsBlock(props) {
    const getDateOfArticle = () => {
        const publishedAtNewDate = new Date(props.publishedAt)
        const publishedAtSubstr = publishedAtNewDate.toISOString().substr(0, 10)
        const hours = publishedAtNewDate.getHours().toString().padStart(2, "0")
        const minutes = publishedAtNewDate.getMinutes().toString().padStart(2, "0")
        return {publishedAtSubstr, hours, minutes}
    }

    return (
        <article className={s.article}>
            <div>
                {props.author ?
                    <h3>{props.author}</h3> :
                    <h3>Anonymous</h3>}
                <p>
                    {`${getDateOfArticle().publishedAtSubstr} ${getDateOfArticle().hours}:${getDateOfArticle().minutes}`}
                </p>
            </div>
            <div>
                <h1>
                    <a href={props.url} target={'_blank'} rel={'noreferrer'}>{props.title}</a>
                </h1>
            </div>
            <div style={{fontSize: '0px'}}>
                <a href={props.url} target={'_blank'} rel={'noreferrer'}><img alt={'imgUrl'} width={'800px'} src={props.imgUrl}/></a>
            </div>
            <div>
                <h2>{props.description}</h2>
            </div>
            <div>
                <h4>{`${props.content} `}
                    <a href={props.url} target={'_blank'} rel={'noreferrer'}>Read more</a>
                </h4>
            </div>
        </article>
    )
}

export default NewsBlock