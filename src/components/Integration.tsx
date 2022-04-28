import React, { Suspense } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import Block from './Block';

function Integration() {
  return (
    <ErrorBoundary
      fallback={
        <div className="boundary" style={{ color: 'red' }}>
          Error
        </div>
      }
    >
      <Suspense fallback={<div className="boundary">loading...</div>}>
        <section className="blocks">
          {['ONE', 'TWO', 'THREE', 'FOUR'].map((label) => (
            <div className="blockWrapper" key={label}>
              <Block label={label} key={label} />
            </div>
          ))}
        </section>
      </Suspense>
    </ErrorBoundary>
  );
}
export default Integration;
