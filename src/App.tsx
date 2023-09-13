import { useAppDispatch } from './redux/hooks';
import { updateMenu } from './redux/slices';

import Layout from './layout/Layout';
import { IActiveMenuType } from './redux/types/menu';

const activeMenu1: IActiveMenuType[] = [
  {
    name: 'admin.name',
    level: 0,
  },
  {
    name: 'admin.sepa.name',
    level: 1,
  },
  {
    name: 'admin.sepa.inbatch',
    level: 2,
  },
];

const activeMenu2: IActiveMenuType[] = [
  {
    name: 'loyalty.name',
    level: 0,
  },
  {
    name: 'loyalty.secucard.name',
    level: 1,
  },
  {
    name: 'loyalty.secucard.customers',
    level: 2,
  },
];

const activeMenu3: IActiveMenuType[] = [
  {
    name: 'smart-device.name',
    level: 0,
  },
  {
    name: 'smart-device.devices',
    level: 1,
  },
];

function App() {
  const dispatch = useAppDispatch();

  function onClick1() {
    dispatch(updateMenu(activeMenu1));
  }
  function onClick2() {
    dispatch(updateMenu(activeMenu2));
  }
  function onClick3() {
    dispatch(updateMenu(activeMenu3));
  }
  function onClick4() {
    dispatch(updateMenu([]));
  }
  
  return (
    <Layout>
      <p>
        <button className="button" onClick={onClick4}>
          close all
        </button>
      </p>
      <p>
        <button className="button" onClick={onClick1}>
          admin.sepa.inbatch
        </button>
      </p>
      <p>
        <button className="button" onClick={onClick2}>
          loyalty.secucard.customers
        </button>
      </p>
      <p>
        <button className="button" onClick={onClick3}>
          smart device.devices
        </button>
      </p>
    </Layout>
  );
}

export default App;
