import { Header } from '../components';
import { LayoutType } from './Layput.type';

export default function Layout({ children }: LayoutType) {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">{children}</main>
    </div>
  );
}
