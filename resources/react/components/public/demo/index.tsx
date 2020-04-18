import React from 'react';
import { connect } from 'react-redux';
import { RootState } from 'reducers';
import * as sampleActions from 'actions/sample/actions';

const mapStateToProps = ({ sample }: RootState) => ({
  value: sample.value,
});

const mapDispatchToProps = {
  incrementValue: sampleActions.incrementValue,
  decrementValue: sampleActions.decrementValue,
};

export type WithReduxComponentProps =
  ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const WithReduxComponent = ({
  value,
  incrementValue,
  decrementValue,
}: WithReduxComponentProps) => (
  <main>
    <div>
      <h2>Redux + Redux Saga with typsafe actions</h2>
      <p>{`Value: ${value}`}</p>
      <button type="button" onClick={incrementValue}>Add</button>
      <button type="button" onClick={decrementValue}>Decrement</button>
      <button type="button" onClick={() => console.error('async')}>Async</button>
    </div>
  </main>
);

export default connect(mapStateToProps, mapDispatchToProps)(WithReduxComponent);

export { WithReduxComponent };
