const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <nav>Este es el navbar</nav>
      <main>{children}</main>
      <footer>Este es el footer</footer>
    </>
  )
}

export default Layout