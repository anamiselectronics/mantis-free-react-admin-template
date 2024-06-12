// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  PlaySquareOutlined,
  ProjectOutlined,
  BarChartOutlined,
  LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
  BarChartOutlined,
  ProjectOutlined,
  PlaySquareOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined
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
      id: 'util-color',
      title: 'رنگ',
      type: 'item',
      url: '/color',
      icon: icons.ProjectOutlined
    },
    {
      id: 'util-statistics',
      title: 'آمار',
      type: 'item',
      url: '/showStatistics',
      icon: icons.ProjectOutlined
    },
    {
      id: 'util-users',
      title: 'مدیریت کاربران ',
      type: 'item',
      url: '/users',
      icon: icons.ProjectOutlined
    },
    {
      id: 'util-shadow',
      title: 'نمایش زنده',
      type: 'item',
      url: '/shadow',
      icon: icons.PlaySquareOutlined
    },
    {
      id: 'ant-icons',
      title: 'مدیریت دوربین',
      type: 'item',
      url: '/icons/ant',
      icon: icons.AntDesignOutlined,
      breadcrumbs: false
    }
  ]
};

export default utilities;
