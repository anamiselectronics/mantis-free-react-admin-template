// assets
import { UsergroupAddOutlined, UserOutlined } from '@ant-design/icons';

// icons
const icons = {
  UsergroupAddOutlined,
  UserOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'مدیریت کاربران',
      type: 'item',
      url: '/sample-page',
      icon: icons.UsergroupAddOutlined
    },
    {
      id: 'documentation',
      title: 'افراد مجاز',
      type: 'item',
      url: '/sample-page',
      icon: icons.UserOutlined
      // external: true,
      // target: true
    }
  ]
};

export default support;
