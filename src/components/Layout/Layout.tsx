import Footer from "@Component/Footer"
import Navbar from "@Component/Navbar"
import ScrollToTopButton from "@Component/ScrollToTopButton";
import styles from "./Layout.module.css"
import PropTypes from "prop-types"


const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <Navbar/>
      <main className={styles.layout__main}>
        {children}
        <ScrollToTopButton />
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
