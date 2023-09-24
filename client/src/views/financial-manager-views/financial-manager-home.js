import React from 'react';
import styled from 'styled-components';
import Sidebar from '../../components/financial-component/Sidebar'
import RighSidebar from '../../components/financial-component/RightSidebar'
import Dashboard from '../../components/financial-component/Dashbord'
function FApp() {
  return (
    <Div>
      <Sidebar />
      <Dashboard />
      <RighSidebar />
    </Div>
  );
}

export default FApp;
const Div = styled.div `
position: relative;
`;