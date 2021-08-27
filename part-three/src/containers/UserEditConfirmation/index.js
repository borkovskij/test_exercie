import { connect } from 'react-redux';

import UserEditConfirmation from './UserEditConfirmation';

import { navigateToUsersList } from '../../actionCreators/userEditConfirmation';
import { clearUserReducer } from '../../actionCreators/user';

const mapStateToProps = (state) => ({
	user: state.user.user,
	updatedUser: state.user.updatedUser,
	error: state.user.error,
});

const mapDispatchToProps = (dispatch) => ({
	navigateToUsersList: () => dispatch(navigateToUsersList()),
	clearData: () => dispatch(clearUserReducer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserEditConfirmation);
