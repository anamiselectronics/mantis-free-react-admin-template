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
const EditData = Loadable(lazy(() => import('pages/users/EditData')));

// render - cameras
const Cameras = Loadable(lazy(() => import('pages/cameras/Cameras')));
const AddCamera = Loadable(lazy(() => import('pages/cameras/AddCamera')));
const EditCamera = Loadable(lazy(() => import('pages/cameras/EditCamera')));

// render - Authorized Person
const ShowAuthorizedPersons = Loadable(lazy(() => import('pages/AuthorizedPersons/ShowAuthorizedPersons')));
const AddMember = Loadable(lazy(() => import('pages/AuthorizedPersons/AddNewMember')));
const EditMember = Loadable(lazy(() => import('pages/AuthorizedPersons/EditMember')));

//render - Live Show
const LiveShow = Loadable(lazy(() => import('pages/liveShow/LiveShow')));

//render - Show Black List
const ShowBlackList = Loadable(lazy(() => import('pages/blackList/ShowBlackList')))

//render - show parking managment
const ParkingManagment = Loadable(lazy(() => import('pages/parking/ParkingMangment')))
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
        },
        {
          path: 'edit',
          element: <EditData />
        }
      ]
    },
    {
      path: 'cameras',
      element: <Cameras />
    },
    {
      path: 'cameras',
      children: [
        {
          path: 'add_camera',
          element: <AddCamera />
        },
        {
          path: 'edit_camera',
          element: <EditCamera />
        }
      ]
    },
    {
      path: 'authorizedPersons',
      element: <ShowAuthorizedPersons />
    },
    {
      path: 'authorizedPersons',
      children: [
        {
          path: 'add-member',
          element: <AddMember />
        },
        {
          path: 'edit-memberInfo',
          element: <EditMember />
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
      path: 'liveShow',
      element: <LiveShow />
    },
    {
      path: 'showBlackList',
      element: <ShowBlackList />
    },
    {
      path: 'parkings',
      element: <ParkingManagment />
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
