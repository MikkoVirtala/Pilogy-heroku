import React from 'react'
import styled, { css } from 'styled-components'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import Button from './Button'
import { CreateIcon } from './Icons'
import { setPicture, setLoadingPicture } from '../../actions/picture'
import { setErrorMessage } from '../../actions/error'
import { closeRightSidebar } from '../../actions/sidebar'
import {
	getLoadingPicture,
	getCreatePictureButtonColor,
	getMaxNumberOfShapesInPicture
} from '../../selectors'

const StyledButton = styled(Button)`
	${props =>
		props.disabled &&
		css`
			background-color: ${props.theme.buttonActiveBackground};
			:hover {
				background-color: ${props.theme.buttonActiveBackground};
			}
			:active {
				background-color: ${props.theme.buttonActiveBackground};
			}
		`}
`

const CreatePictureButton = ({ resetZoom }) => {
	const dispatch = useDispatch()
	const loadingPicture = useSelector(getLoadingPicture)
	const maxNumberOfShapesInPicture = useSelector(getMaxNumberOfShapesInPicture)
	const createPictureButtonColor = useSelector(getCreatePictureButtonColor)

	const handleCreatePicture = () => {
		dispatch(closeRightSidebar())
		dispatch(setLoadingPicture(true))
		axios
			.post('/pictures/new', {
				maxNumberOfShapesInPicture
			})
			.then(response => {
				if (response.status === 200) {
					console.log('response in front')
					const picture = {
						id: response.data.id,
						shapes: response.data.shapes
					}
					dispatch(setPicture(picture))
				}
				dispatch(setLoadingPicture(false))
				if (resetZoom) resetZoom()
			})
			.catch(error => {
				dispatch(setErrorMessage(error))
			})
	}

	return (
		<StyledButton
			id='create-picture-button'
			onClick={() => handleCreatePicture()}
			icon={<CreateIcon />}
			helpText='Create'
			loading={loadingPicture}
			loadingText={'Loading'}
			disabled={loadingPicture}
			createPictureButtonColor={createPictureButtonColor}
		/>
	)
}

export default CreatePictureButton
