import Footer from "@Component/Footer"

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <nav>Este es el navbar</nav>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;