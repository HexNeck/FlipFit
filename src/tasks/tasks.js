import {Text} from 'react-native';
import React, { useEffect, useState } from 'react';
import {TaskWrapper, TaskWrapperActive} from './tasksStyles';
import {connect} from 'react-redux';
import {getTodos} from '../reducers/tasks';

const Tasks: () => React$Node = props => {
  const {todos} = props;

  const [active, setActive] = useState(0);

  return (
    <>
      {todos.map((todo, index) => {
        return (
          <TaskWrapper key={index} active={(index===active)} onPress={() => setActive(index)}>
            <Text>{todo.text} {todo.id}</Text>
          </TaskWrapper>
        );
      })}
    </>
  );
};

function mapStateToProps(state) {
  return {
    todos: getTodos(state.tasks),
  };
}

export default connect(
  mapStateToProps,
  null,
)(Tasks);
