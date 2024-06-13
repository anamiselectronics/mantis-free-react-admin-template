import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Report = Loadable(lazy(() => import('pages/components-overview/Report')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// render - reportPages
const Excel = Loadable(lazy(() => import('pages/reportPages/excel')));

// render - statistics
const ShowStatistics = Loadable(lazy(() => import('pages/statistics/showStatistic')));

// render - users
const Users = Loadable(lazy(() => import('pages/users/Users')));
const AddUser = Loadable(lazy(() => import('pages/users/AddUser')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'showStatistics',
      element: <ShowStatistics />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'users',
      element: <Users />
    },
    {
      path: 'users',
      children: [
        {
          path: 'add',
          element: <AddUser />
        }
      ]
    },
    {
      path: 'reportPages',
      children: [
        {
          path: 'excel',
          element: <Excel />
        }
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'report',
      element: <Report />
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    }
  ]
};

export default MainRoutes;
