import Footer from "components/Footer/Footer";
import Header from '../Header/Header';

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
