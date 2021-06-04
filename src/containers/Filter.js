import { connect } from 'react-redux';
import { setFilter } from '../actions/filter';
import Filter from '../components/Filter';

const mapStateToProps = (state) => ({
  filterBy: state.books.filterBy,
});

const actionCreators = {
  setFilter,
};

export default connect(mapStateToProps, actionCreators)(Filter);
