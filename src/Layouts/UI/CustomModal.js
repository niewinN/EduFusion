import React, { useEffect } from 'react'
import {
	Overlay,
	ModalTitle,
	ModalBox,
	CloseButton,
	ModalImg,
	ModalImgBox,
	ModalInformation,
	ModalText,
} from '../../Assets/Styles/UI/RegisterModal.styles'

const CustomModal = ({ isOpen, onClose, title, text, imageSrc }) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			onClose()
		}, 5000)

		return () => clearTimeout(timer)
	}, [onClose])

	if (!isOpen) return null

	return (
		<Overlay onClick={onClose}>
			<ModalBox onClick={e => e.stopPropagation()}>
				<CloseButton onClick={onClose}>&times;</CloseButton>
				<ModalImgBox>
					<ModalImg src={imageSrc}></ModalImg>
				</ModalImgBox>
				<ModalInformation>
					<ModalTitle>{title}</ModalTitle>
					<ModalText>{text}</ModalText>
				</ModalInformation>
			</ModalBox>
		</Overlay>
	)
}

export default CustomModal
