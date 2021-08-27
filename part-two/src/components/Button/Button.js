import React from 'react';
import P from 'prop-types';
import { StyledButton } from './styled';

const Button = ({ disabled, text, onClick, type }) => (
	<StyledButton type={type} disabled={disabled} onClick={onClick}>
		{text}
	</StyledButton>
);

Button.prototypes = {
	disabled: P.bool,
	text: P.string.isRequired,
	onClick: P.func.isRequired,
	type: P.string,
};

Button.defaultProps = {
	disabled: false,
	type: '',
};

export default Button;
