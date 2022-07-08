/* eslint-disable no-empty-function */
import React, { useState } from 'react';

function useStatefulRef(initialVal = null) {
  // eslint-disable-next-line prefer-const
  let [currentVal, setCurrentVal] = React.useState(initialVal);

  const [statefulRef] = useState({
    // eslint-disable-next-line getter-return
    get current() {},
    set current(value) {},
  });

  Object.defineProperty(statefulRef, 'current', {
    get: () => currentVal,
    set: (newValue) => {
      if (!Object.is(currentVal, newValue)) {
        currentVal = newValue;
        setCurrentVal(newValue);
      }
    },
  });

  return statefulRef;
}

export default useStatefulRef;
