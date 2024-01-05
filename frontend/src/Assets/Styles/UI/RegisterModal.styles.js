import styled, { keyframes } from 'styled-components'
import theme from '../GlobalStyles/theme'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.4);
	backdrop-filter: blur(5px);
	z-index: 9999999;
`

export const ModalBox = styled.div`
	position: relative;
	background: white;
	/* padding: 20px; */
	border-radius: 5px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
	width: 80%;
	max-width: 350px;
	max-height: 100vh;
	border-radius: 8px;
	animation: ${fadeIn} 0.3s ease-out forwards;
`

export const CloseButton = styled.button`
	position: absolute;
	top: 1%;
	right: 2%;
	border: none;
	background: none;
	font-size: 3rem;
	color: #fff;
	cursor: pointer;
`

export const ModalImgBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${theme.colors.primary};
	padding: 15px;
	border-radius: 8px 8px 0 0;
`

export const ModalImg = styled.img`
	width: 60%;
`

export const ModalInformation = styled.div`
	padding: 15px;
`

export const ModalTitle = styled.h3`
	text-align: center;
	font-size: 1.8rem;
	margin-bottom: 10px;
	span {
		color: ${theme.colors.secondary};
	}
`

export const ModalText = styled.p`
	font-size: 1.3rem;
	text-align: center;
	margin-bottom: 20px;
`
