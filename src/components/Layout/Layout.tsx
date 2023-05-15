import Footer from "@Component/Footer"
import Header from "@Component/Header"

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;
