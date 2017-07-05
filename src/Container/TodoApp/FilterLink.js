import { connect } from 'react-redux';
import { setVisibilityFilter } from './../../actions';
import FooterLink from './FooterLink';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(FooterLink);

export default FilterLink;
