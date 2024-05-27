import * as React from 'react';
import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';

//asset

import ListItemDecorator from '@mui/joy/ListItemDecorator';
import {
  RepeatOneOutlined,
  QueryBuilderOutlined,
  CorporateFare,
  ImportExportOutlined,
  MoneyOutlined,
  EmojiTransportationOutlined,
  SpeedOutlined,
  DirectionsCarOutlined
} from '@mui/icons-material';

//Import Component
import TimeDate from 'pages/reportPages/timeDate';
import Direction from 'pages/reportPages/direction';
import LineNumber from 'pages/reportPages/lineNumber';
import Camera from 'pages/reportPages/camera';
import State from 'pages/reportPages/state';
import Speed from 'pages/reportPages/speed';
import Plate from 'pages/reportPages/plate';
import CarsType from 'pages/reportPages/carsType';
import Excel from 'pages/reportPages/excel';
import ShowResult from 'pages/reportPages/showResult';

// ==============================|| TabList - SearchPage ||============================== //

const Report = () => {
  return (
    <>
    
    
      <Tabs defaultValue={1} container>
        <TabsList container xs={12}>
          <Tab value={1}>
            <ListItemDecorator>
              <CorporateFare sx={{ fontSize: 25, paddingLeft: 0.4 }} />
            </ListItemDecorator>
            سامانه
          </Tab>
          <Tab value={2}>
            <ListItemDecorator>
              <QueryBuilderOutlined sx={{ fontSize: 25, paddingLeft: 0.4 }} />
            </ListItemDecorator>
            تاریخ و ساعت
          </Tab>
          <Tab value={3}>
            <ListItemDecorator>
              <ImportExportOutlined sx={{ fontSize: 25, paddingLeft: 0.4 }} />
            </ListItemDecorator>
            جهت
          </Tab>
          <Tab value={4}>
            <ListItemDecorator>
              <RepeatOneOutlined sx={{ fontSize: 25, paddingLeft: 0.4 }} />
            </ListItemDecorator>
            شماره خط
          </Tab>
          <Tab value={5}>
            <ListItemDecorator>
              <MoneyOutlined sx={{ fontSize: 25, paddingLeft: 0.4 }} />
            </ListItemDecorator>
            پلاک
          </Tab>
          <Tab value={6}>
            <ListItemDecorator>
              <EmojiTransportationOutlined sx={{ fontSize: 25, paddingLeft: 0.4 }} />
            </ListItemDecorator>
            استان
          </Tab>
          <Tab value={7}>
            <ListItemDecorator>
              <SpeedOutlined sx={{ fontSize: 25, paddingLeft: 0.4 }} />
            </ListItemDecorator>
            سرعت
          </Tab>
          <Tab value={8}>
            <ListItemDecorator>
              <DirectionsCarOutlined sx={{ fontSize: 25, paddingLeft: 0.4 }} />
            </ListItemDecorator>
            خودرو
          </Tab>
          <Tab value={9}>
            <ListItemDecorator>
              <DirectionsCarOutlined sx={{ fontSize: 25, paddingLeft: 0.4 }} />
            </ListItemDecorator>
            اکسل
          </Tab>
        </TabsList>
        <hr style={{border:'none'}}/>
        <hr style={{border:'none'}}/>
      <ShowResult />
        <TabPanel value={1}>
          <Camera />
        </TabPanel>
        <TabPanel value={2}>
          <TimeDate />
        </TabPanel>
        <TabPanel value={3}>
          <Direction />
        </TabPanel>
        <TabPanel value={4}>
          <LineNumber />
        </TabPanel>
        <TabPanel value={5}>
          <Plate />
        </TabPanel>
        <TabPanel value={6}>
          <State />
        </TabPanel>
        <TabPanel value={7}>
          <Speed />
        </TabPanel>
        <TabPanel value={8}>
          <CarsType />
        </TabPanel>
        <TabPanel value={9}>
          <Excel />
        </TabPanel>
      </Tabs>
    </>
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
  width: auto;
  line-height: 2;
  padding: 8px 5px;
  margin: 6px;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
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
  white-space: nowrap; /* Prevent text wrapping */
  over-flow: hidden;
`;

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  font-family: Vazirmatn;
  font-size: 0.875rem;
  min-width: 400px;
  background-color: ${blue[500]};
  border-radius: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
  align-items: center;
  box-shadow: 0px 4px 6px ${theme.palette.mode === 'light' ? 'rgba(0,0,0, 0.4)' : 'rgba(0,0,0, 0.2)'};
  white-space: nowrap;

  @media (max-width: 1200px) {
    font-size: 0.8rem;
  }

  @media (max-width: 992px) {
    font-size: 0.75rem;
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
    justify-content:center;

  }

  @media (max-width: 576px) {
    font-size: 0.65rem;
    justify-content:center;
  }
  `
);

export default Report;
