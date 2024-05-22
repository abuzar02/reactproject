import React, { useState } from 'react';
import Tab from './tab';

const Tabs = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="tabs">
        {children.map((tab, index) => (
          <Tab
            key={index}
            label={tab.props.label}
            isActive={index === activeIndex}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>
      <div className="tab-content">
        {children[activeIndex]}
      </div>
    </div>
  );
};

export default Tabs;