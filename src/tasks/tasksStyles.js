import styled from 'styled-components';

export const TaskWrapper = styled.TouchableHighlight`
  border-top-width: 2px;
  border-bottom-width: 2px;
  height: 120px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.active ? 'red' : 'white'};
`;

export const TaskWrapperActive = styled(TaskWrapper)`
  background-color: red;
`;
