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
import registerModal from '../../Assets/Images/Register/registerModal.png'

const RegisterModal = ({ isOpen, onClose }) => {
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
					<ModalImg src={registerModal}></ModalImg>
				</ModalImgBox>
				<ModalInformation>
					<ModalTitle>
						Witaj w <span>EduFusion!</span>
					</ModalTitle>
					<ModalText>
						Od teraz możesz rezerwować lekcje i wspólnie z korepetytorami
						zdobywać wymarzone cele!
					</ModalText>
				</ModalInformation>
			</ModalBox>
		</Overlay>
	)
}

export default RegisterModal
