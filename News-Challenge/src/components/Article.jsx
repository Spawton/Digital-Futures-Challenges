import { useParams } from 'react-router-dom';
import React from 'react';


const Article = ({ allNewsData }) => {
    const { id } = useParams();


    let headline = "";
    let image = "";
    let articleText = "";
    let webLink = "";

    allNewsData.forEach(story => {
        const { webTitle, webUrl, fields: { thumbnail, bodyText } } = story;
        if (id === webTitle) {
            image = thumbnail;
            headline = webTitle;
            articleText = bodyText;
            webLink = webUrl;
        }
    })

    function replaceEveryNth(value, search, replacement, nthCount = 1) {
        let matchCount = 0;

        return String(value)
            .split(
                RegExp(`(${search})`)
            )
            .map(str =>
                ((str === search) && (++matchCount % nthCount === 0))
                    ? replacement
                    : str
            )
            .join('');
    }

    return (
        <div className="card text-center" >
            <a href={webLink} >
                <div className="card-body">
                    <h4 key={id}>
                        {headline}
                    </h4>
                </div>
            </a>
            <img className="card-img-top mx-auto" style={{
                "maxHeight": "750px", "maxWidth": "450px"
            }} src={image} alt={id} />

            <div className="card-body">
                <p data-testid="bodyText" className='articleText'>
                    {replaceEveryNth(articleText, ". ", ".\n", 3).split('\n').map(e => <React.Fragment key={e}>{e}<br /><br /></React.Fragment>)}
                    {/* {articleText} */}
                </p>
            </div>
            <div>
                <a href="#top" className='top'>Back to top of page</a>
            </div>
        </div >

    );
}


export default Article;