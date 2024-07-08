import Header from "./Header";
import Footer from "./Footer/index.";

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
