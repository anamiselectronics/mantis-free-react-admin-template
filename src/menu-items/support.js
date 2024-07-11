// assets
import { UsergroupAddOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';

// icons
const icons = {
  UsergroupAddOutlined,
  UserOutlined,
  SettingOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'تنظیمات',
      type: 'item',
      url: '/sample-page',
      icon: icons.SettingOutlined
    },
    {
      id: 'documentation',
      title: 'درباره ما',
      type: 'item',
      url: '/sample-page',
      icon: icons.UserOutlined
      // external: true,
      // target: true
    }
  ]
};

export default support;
