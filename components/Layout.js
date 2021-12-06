import Navi from "./Navi";

function Layout({ children }) {
  return (
    <div>
      <Navi />
      <main>{children}</main>
      <footer>
          desing by mehmet
      </footer>
    </div>
  );
}
export default Layout;
