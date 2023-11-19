// import React, { useEffect } from 'react'
// import {
// 	Overlay,
// 	ModalTitle,
// 	ModalBox,
// 	CloseButton,
// 	ModalImg,
// 	ModalImgBox,
// 	ModalInformation,
// 	ModalText,
// } from '../../Assets/Styles/UI/RegisterModal.styles'
// import filterImg from '../../Assets/Images/UI/filterImg.png'

// const FiltersModal = ({ isOpen, onClose }) => {
// 	useEffect(() => {
// 		const timer = setTimeout(() => {
// 			onClose()
// 		}, 5000)

// 		return () => clearTimeout(timer)
// 	}, [onClose])

// 	if (!isOpen) return null

// 	return (
// 		<Overlay onClick={onClose}>
// 			<ModalBox onClick={e => e.stopPropagation()}>
// 				<CloseButton onClick={onClose}>&times;</CloseButton>
// 				<ModalImgBox>
// 					<ModalImg src={filterImg}></ModalImg>
// 				</ModalImgBox>
// 				<ModalInformation>
// 					<ModalTitle>
// 						Uzupełnij <span>kryteria!</span>
// 					</ModalTitle>
// 					<ModalText>
// 						Musisz uzupełnić wszystkie potrzebne kryteria, aby móc wyszukać
// 						odpowiedniego korepetytora!
// 					</ModalText>
// 				</ModalInformation>
// 			</ModalBox>
// 		</Overlay>
// 	)
// }

// export default FiltersModal
