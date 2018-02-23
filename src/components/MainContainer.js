import React from 'react';

const MainContainer = ({classNames, children}) => (
    <div className={classNames}>
        { children }
    </div>
);

export default MainContainer;