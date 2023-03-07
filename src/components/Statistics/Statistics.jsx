import PropTypes from 'prop-types';
import {Container, List, Items} from './Statistics.styled'
export { Statistics};

function Statistics ({ title, stats }) {
    return <Container >
        <h2>{title}</h2> <List>
        {stats.map(({ label, percentage, id }) => {
            return <li className="item"  key={id}>
                <span className="label">{label}</span>
                <span className="percentage">{percentage}%</span>
            </li>
        })}
    </List></Container >
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object)
}