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
  LineChartOutlined 
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
  LineChartOutlined

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
      id: 'ant-icons',
      title: 'مدیریت دوربین',
      type: 'item',
      url: '/cameras',
      icon: icons.VideoCameraOutlined,
      breadcrumbs: false
    },
    {
      id: 'util-shadow',
      title: 'نمایش زنده',
      type: 'item',
      url: '/shadow',
      icon: icons.PlaySquareOutlined
    },
    {
      id: 'util-color',
      title: 'رنگ',
      type: 'item',
      url: '/color',
      icon: icons.ProjectOutlined
    }
  ]
};

export default utilities;
