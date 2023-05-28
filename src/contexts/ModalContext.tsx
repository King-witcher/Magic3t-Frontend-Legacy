import { createContext, useState } from 'react'
import styled from 'styled-components'

interface ModalProps {
  children?: React.ReactNode
}

interface ModalData {
  openModal(content: React.ReactNode): void
  closeModal(): void
}

interface OverlayProps {
  visible: boolean
}

const ModalContext = createContext<ModalData>({} as ModalData)

const modalAnimationTime = 100

const BlurOverlay = styled.div<OverlayProps>`
  position: fixed;
  pointer-events: none;
  width: 100%;
  height: 100%;
  transition: backdrop-filter ${modalAnimationTime}ms linear;
  z-index: 1;
  backdrop-filter: ${({ visible }) => (visible ? 'blur(2px)' : '')};
`

const DarkOverlay = styled.div<OverlayProps>`
  position: fixed;
  width: 100%;
  height: 100%;
  transition: opacity ${modalAnimationTime}ms linear;
  background-color: #000;
  z-index: 1;
  opacity: ${({ visible }) => (visible ? '0.4' : '0')};
  pointer-events: ${({ visible }) => (visible ? 'all' : 'none')};
`

const ModalContainer = styled.div<OverlayProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-color: #eee;
  border-radius: var(--radius);
  padding: 1rem;
  box-shadow: var(--shadow);

  transition: opacity ${2 * modalAnimationTime}ms linear;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
`

export function ModalProvider({ children }: ModalProps) {
  const [content, setContent] = useState<React.ReactNode>(null)
  const [visible, setVisible] = useState(false)

  function openModal(content: React.ReactNode) {
    setContent(content)
    setVisible(true)
  }

  function closeModal() {
    setVisible(false)
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      <BlurOverlay visible={visible} />
      <DarkOverlay visible={visible} onClick={closeModal} />
      <ModalContainer visible={visible}>{content}</ModalContainer>
      {children}
    </ModalContext.Provider>
  )
}
