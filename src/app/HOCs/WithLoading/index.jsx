import React, { useState } from 'react'; /* eslint react/jsx-props-no-spreading:0 */

import LoaderWrapper from '@components/LoaderWrapper';

const WithLoading = (Component) => {
  const LoadingComponent = (props) => {
    const [isLoading, setLoading] = useState(true);
    const setLoadingState = (isLoadingComponent) => {
      setLoading(isLoadingComponent);
    };

    return (
      <>
        {isLoading && <LoaderWrapper />}
        <Component setLoading={setLoadingState} {...props} />
      </>
    );
  };

  return LoadingComponent;
};

export default WithLoading;
