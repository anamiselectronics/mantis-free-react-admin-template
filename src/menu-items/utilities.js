// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  PlaySquareOutlined,
  ProjectOutlined,
  BarChartOutlined,
  LoadingOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LineChartOutlined,
  UsergroupAddOutlined,
  StopOutlined,
  CarOutlined,
  SnippetsOutlined
} from '@ant-design/icons';

// icons
const icons = {
  BarChartOutlined,
  ProjectOutlined,
  PlaySquareOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LineChartOutlined,
  UsergroupAddOutlined,
  StopOutlined,
  CarOutlined,
  SnippetsOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'گزارش گیری',
      type: 'item',
      url: '/Report',
      icon: icons.BarChartOutlined
    },
    {
      id: 'util-statistics',
      title: 'آمار',
      type: 'item',
      url: '/showStatistics',
      icon: icons.LineChartOutlined
    },
    {
      id: 'util-users',
      title: 'مدیریت کاربران ',
      type: 'item',
      url: '/users',
      icon: icons.UserOutlined
    },
    {
      id: 'util-cameras',
      title: 'مدیریت دوربین',
      type: 'item',
      url: '/cameras',
      icon: icons.VideoCameraOutlined,
      breadcrumbs: false
    },
    {
      id: 'util-authorized-person',
      title: 'افراد مجاز',
      type: 'item',
      url: '/authorizedPersons',
      icon: icons.UsergroupAddOutlined
    },
    {
      id: 'util-liveShow',
      title: 'نمایش زنده',
      type: 'item',
      url: '/liveShow',
      icon: icons.PlaySquareOutlined
    },
    {
      id: 'util-ShowBlackList',
      title: 'لیست سیاه',
      type: 'item',
      url: '/showBlackList',
      icon: icons.StopOutlined
    },
    {
      id: 'util-ParkingManagment',
      title: 'مدیریت پارکینگ',
      type: 'item',
      url: '/parkings',
      icon: icons.CarOutlined
    },
    {
      id: 'util-ParkingReport',
      title: 'گزارش گیری پارکینگ',
      type: 'item',
      url: '/parkingReport',
      icon: icons.SnippetsOutlined
    }
    // {
    //   id: 'util-shadow',
    //   title: 'نمایش زنده',
    //   type: 'item',
    //   url: '/shadow',
    //   icon: icons.PlaySquareOutlined
    // },
    // {
    //   id: 'util-color',
    //   title: 'رنگ',
    //   type: 'item',
    //   url: '/color',
    //   icon: icons.ProjectOutlined
    // }
  ]
};

export default utilities;
