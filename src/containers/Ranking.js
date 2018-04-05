import { connect } from 'react-redux';
import Ranking from '../components/Ranking';
import * as actions from '../actions/Ranking';

const mapStateToProp = (state, props) => ({
    categoryId: props.categoryId,
    category: state.Ranking.category,
    ranking: state.Ranking.ranking,
    error: state.Ranking.error,
})
const mapDispatchToProps = dispatch => ({
    onMount (categoryId) {
        dispatch(actions.fetchRanking(categoryId))
    },
    onUpdate (categoryId) {
        dispatch(actions.fetchRanking(categoryId))
    }
});

export default connect(mapStateToProp, mapDispatchToProps)(Ranking);
