// import mockNewsData from '../mockNewsData.json';
import Story from './Story.jsx';
import NewsConstructor from './NewsConstructor.js';


const AllStories = ({ allNewsData }) => {

    //allNewsData = mockNewsData.response.results;

    const stories = allNewsData.map((currentstory) => {
        const { id, webPublicationDate, webTitle, webUrl, fields } = currentstory;
        const story = new NewsConstructor(id, webPublicationDate, webTitle, webUrl, fields);
        return <div key={id} data-testid="stories"> <Story story={story} /></div >
    });

    return (
        <div>
            {stories}
            <div>
                <a href="#top" className='top'>Back to top of page</a>
            </div>
        </div >

    );
}


export default AllStories;