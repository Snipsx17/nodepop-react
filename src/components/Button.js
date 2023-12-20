import { styled } from 'styled-components';

const Button = styled.button`
  background-color: ${(props) =>
    props.$variant === 'primary' ? '#3dd2ba' : '#fff'};
  color: ${(props) => (props.$variant === 'primary' ? '#000' : '#3dd2ba')};
  border: ${(props) =>
    props.$variant === 'primary' ? 'none' : '2px solid #3dd2ba'};
  padding: 1rem 2rem;
  border-radius: 999px;
  text-transform: uppercase;
  font-size: 1.3rem;

  &:hover {
    cursor: pointer;
    opacity: ${(props) => (props.$variant === 'primary' ? '0.8' : '1')};
    background-color: ${(props) =>
      props.$variant === 'primary' ? '#3dd2ba' : 'rgba(199, 255, 246, 0.5)'};
  }
`;

export default Button;
