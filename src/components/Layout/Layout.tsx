import Footer from "@Component/Footer"
import Header from "@Component/Header"
import ScrollToTopButton from "@Component/ScrollToTopButton";
import styles from "./Layout.module.css"

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <Header/>
      <main className={styles.layout__main}>
        {children}
        <ScrollToTopButton />
      </main>
      <Footer />
    </>
  )
}

export default Layout;
