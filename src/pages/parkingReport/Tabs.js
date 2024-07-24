import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <div>
      <div>
        {tabs.map(tab => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            style={{ marginRight: '8px' }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {tabs.map(tab =>
          activeTab === tab.name ? <div key={tab.name}>{tab.component}</div> : null
        )}
      </div>
    </div>
  );
};

export default Tabs;

