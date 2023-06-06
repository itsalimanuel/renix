import React, { ReactNode, useState } from 'react';

export interface tabsProps {
  type?: string;
  position?: 'left' | 'top' | 'right' | 'bottom';
  children?: string;
  className?: string;
}

export interface TabProps {
  label: string;
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}

export const Tab: React.FC<TabProps> = ({ label, active, onClick }) => {
  return (
    <div
      className={`py-2 text-xs font-medium cursor-pointer px-3 first-of-type:pl-0 last-of-type:pr-0 border-b ${
        active ? 'active border-yellow-300' : ''
      }`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export const Tabs: React.FC<tabsProps> = ({ position, children, className }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const renderedLabels = React.Children.map(children, (child, index) => {
    if (React.isValidElement<TabProps>(child)) {
      return React.cloneElement(child, {
        active: activeTab === index || undefined,
        onClick: () => handleTabClick(index),
      });
    }
    return null;
  });

  const renderedBodies = React.Children.map(children, (child, index) => {
    if (React.isValidElement<TabProps>(child)) {
      return activeTab === index ? child.props.children : null;
    }
    return null;
  });

  return (
    <div
      className={`relative flex gap-1 ${className ? className : ''} ${
        position === 'top' || position === 'bottom'
          ? 'flex-col items-center justify-start'
          : position === 'left' || position === 'right'
          ? 'flex-row items-start justify-start'
          : ''
      }`}
    >
      <div
        className={`${
          position === 'top' || position === 'bottom'
            ? 'flex items-center justify-start'
            : position === 'left' || position === 'right'
            ? 'flex-row items-start justify-start'
            : ''
        }`}
      >
        {renderedLabels}
      </div>
      <div className="bodies-container">{renderedBodies}</div>
    </div>
  );
};

// export { Tabs, Tab };
// export default Tabs;
