import React from 'react';
import {Container, Header} from 'semantic-ui-react'
import {connect} from 'react-redux';

const App = (props) => {
  return (
    <>
      <Container>
        <Header as='h1'>{props.state.greeting}</Header>
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
