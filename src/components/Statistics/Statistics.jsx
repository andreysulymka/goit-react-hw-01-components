import PropTypes from 'prop-types';
import { Container, List } from './Statistics.styled'
import { getRandomColor } from 'components/helpers/randomColor';
export { Statistics};

function Statistics ({ title, stats }) {
    return <Container >
        {title && <h2>{title}</h2>}
        <List>
        {stats.map(({ label, percentage, id }) => {
            return <li style={{ backgroundColor: getRandomColor() }} key={id}>
                <span>{label}</span>
                <span>{percentage}%</span>
            </li>
        })}
    </List></Container >
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object)
}