import * as React from 'react';
import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
// project import
// import ComponentSkeleton from './ComponentSkeleton';

//asset
// import { UserOutlined } from '@ant-design/icons';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import { AccessAlarm, ThreeDRotation, AccountBalanceWalletOutlined  } from '@mui/icons-material';

// ==============================|| COMPONENTS - TYPOGRAPHY ||============================== //

const ComponentTypography = () => {
  return (
    <Tabs defaultValue={1}>
      <TabsList>
        <Tab value={1}>
          <ListItemDecorator>
            <AccountBalanceWalletOutlined />
          </ListItemDecorator>
          سامانه
        </Tab>
        <Tab value={2}>
          <ListItemDecorator>
            <ThreeDRotation sx={{ fontSize: 30, paddingLeft: 0.5 }} />
          </ListItemDecorator>
          تاریخ و ساعت
        </Tab>
        <Tab value={3}>
          <ListItemDecorator>
            <AccessAlarm />
          </ListItemDecorator>
          جهت
        </Tab>
        <Tab value={4}>شماره خط</Tab>
        <Tab value={5}>امکانات</Tab>
        <Tab value={6}>دیگر</Tab>
        <Tab value={7}>پلاک</Tab>
        <Tab value={8}>استان</Tab>
        <Tab value={9}>سرعت</Tab>
        <Tab value={10}>خودرو</Tab>
        <Tab value={11}>تخلف</Tab>
      </TabsList>
      <TabPanel value={1}>First page</TabPanel>
      <TabPanel value={2}>Second page</TabPanel>
      <TabPanel value={3}>Third page</TabPanel>
      <TabPanel value={4}>Four page</TabPanel>
      <TabPanel value={5}>Five page</TabPanel>
      <TabPanel value={6}>Six page</TabPanel>
      <TabPanel value={7}>Seven page</TabPanel>
      <TabPanel value={8}>Eight page</TabPanel>
      <TabPanel value={9}>Nine page</TabPanel>
      <TabPanel value={10}>Ten page</TabPanel>
      <TabPanel value={11}>Eleven page</TabPanel>
    </Tabs>
  );
};

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75'
};

const Tab = styled(BaseTab)`
  font-family: Vazirmatn;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  line-height: 1.5;
  padding: 8px 12px;
  margin: 6px;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${blue[200]};
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: ${blue[600]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(BaseTabPanel)`
  width: 100%;
  font-size: 0.875rem;
  overflow-x: auto; /* Add horizontal scrolling */
  white-space: nowrap; /* Prevent text wrapping */
`;

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  font-family: Vazirmatn;
  min-width: 400px;
  background-color: ${blue[500]};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  justify-content:center;
  align-items: center;
  box-shadow: 0px 4px 6px ${theme.palette.mode === 'light' ? 'rgba(0,0,0, 0.4)' : 'rgba(0,0,0, 0.2)'};
  white-space: nowrap;
  `
);

export default ComponentTypography;
