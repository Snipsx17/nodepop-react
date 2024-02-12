import styled from 'styled-components';

const Modal = styled.div`
  position: absolute;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 25rem;
  height: 18rem;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.1),
    0px 8px 8px -4px rgba(16, 24, 40, 0.04);
  transition: all 0.5s ease;
  z-index: 1;
`;

export default Modal;
