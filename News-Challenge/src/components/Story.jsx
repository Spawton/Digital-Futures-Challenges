import PropTypes from 'prop-types';
import NewsConstructor from './NewsConstructor';
import { NavLink } from 'react-router-dom';

const Story = ({ story }) => {
    const { webTitle, thumbnail } = story;
    const picture = thumbnail;
    const headline = webTitle;

    return (
        <div className="card text-center mx-auto" >
            <img className="card-img-top mx-auto" style={{
                "maxHeight": "750px", "maxWidth": "450px"
            }} src={picture} alt={headline} />
            <NavLink className="card-text" to={`/Article/${headline}`}>
                <div className="card-body">
                    <h4>
                        {headline}
                    </h4>
                </div>
            </NavLink>
        </div >
    );
}

Story.propTypes = {
    story: PropTypes.instanceOf(NewsConstructor)
};


export default Story;