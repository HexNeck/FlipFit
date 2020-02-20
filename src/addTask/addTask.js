import { Text } from 'react-native';
import React from 'react';
import {Button} from './addTaskStyles';
import { connect } from 'react-redux';
import { addTask } from '../actions/index';

const AddSign: () => React$Node = props => {

  const onSendMessage = () => (props.addTask({text: 'new stuff to do'}));

  return (
    <>
      <Button onPress={onSendMessage}>
        <Text>+</Text>
      </Button>
    </>
  );
};

export default connect(
  null,
  {addTask},
)(AddSign);
