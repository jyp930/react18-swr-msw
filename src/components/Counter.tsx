import React, { useState, useDeferredValue, useMemo } from 'react';

function Counter() {
  const [value, setValue] = useState('');
  const deferredValue = useDeferredValue(value);

  const boxes = useMemo(() => {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {new Array(10000).fill(null).map((_, index) => {
          const x = Math.floor(Math.random() * 256);
          const y = Math.floor(Math.random() * 256);
          const z = Math.floor(Math.random() * 256);
          const backgroundColor = 'rgb(' + x + ',' + y + ',' + z + ')';
          return (
            <div style={{ width: 100, height: 100, backgroundColor }} key={index}>
              {deferredValue[deferredValue.length - 1]}
            </div>
          );
        })}
      </div>
    );
  }, [deferredValue]);

  return (
    <div>
      <input onChange={(e) => setValue(e.target.value)} style={{ height: 100 }} />
      {boxes}
    </div>
  );
}
export default Counter;
