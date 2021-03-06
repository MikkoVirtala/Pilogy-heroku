import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Container = styled.div`
	position: relative;
	width: 100%;
	height: ${props =>
		props.isOpen ? `${props.numberOfButtons * 60}px` : '60px'};
	background-color: ${props =>
		props.isOpen
			? props.theme.dropdownOpenBackground
			: props.theme.dropdownClosedBackground};
`

const StyledButton = styled(Button)`
	width: 100%;
`

const Selection = styled.div`
	position: absolute;
	top: 60px;
	left: 0;
	width: 240px;
	background-color: ${props => props.theme.dropdownOpenBackground};
	box-shadow: ${props => props.theme.shadow};
`

const Dropdown = props => {
	const selectedButton = props.children.filter(function(child) {
		return child.props.name === props.selectedButtonName
	})[0]
	const unselectedButtons = props.children.filter(function(child) {
		return child.props.name !== props.selectedButtonName
	})
	return (
		<Container
			isOpen={props.isOpen}
			numberOfButtons={unselectedButtons.length + 1}
		>
			<StyledButton
				onClick={props.selectedOnClick}
				icon={selectedButton.props.icon}
				helpText={selectedButton.props.helpText}
				text={selectedButton.props.text}
			/>
			{props.isOpen && <Selection>{unselectedButtons}</Selection>}
		</Container>
	)
}

export default Dropdown
