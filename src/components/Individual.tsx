import React, { Suspense } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import Block from './Block';

function Individual() {
  return (
    <section className="blocks">
      {['ONE', 'TWO', 'THREE', 'FOUR'].map((label) => (
        <div className="blockWrapper" key={label}>
          <ErrorBoundary fallback={<p style={{ color: 'red' }}>Error</p>} key={label}>
            <Suspense fallback={<p>loading...</p>}>
              <Block label={label} />
            </Suspense>
          </ErrorBoundary>
        </div>
      ))}
    </section>
  );
}
export default Individual;
