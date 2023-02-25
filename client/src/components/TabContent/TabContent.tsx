import React from 'react';

interface TabPanelProps {
    panelName: string;
    value: string;
    children: React.ReactNode;
}

const TabPanel = ({ panelName, value, children }: TabPanelProps) => {
    return panelName === value ? <>{children}</> : null;
};

export default TabPanel;
