import React from 'react';
import { Container, Header, Button, Input } from 'semantic-ui-react'
import { connect } from 'react-redux';


const App = (props) => {

  // const changeGreeting = () => {
  //   props.dispatch({ type: 'CHANGE_GREETING' })
  // }

  return (
    <>
      <Container>
        <Header as='h1'>{props.state.greeting}</Header>
        <Input
          placeholder='Greeting...'
          onChange={(event) => props.dispatch({ type: 'SET_NEW_GREETING', greeting: event.target.value })}
        />
        <Button
          primary
          // onClick={changeGreeting.bind(this, 'text')}
          onClick={() => props.dispatch({ type: 'CHANGE_GREETING', greeting: 'New greeting' })}
        >
          Change greeting
        </Button>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

export default connect(
  mapStateToProps
)(App)
