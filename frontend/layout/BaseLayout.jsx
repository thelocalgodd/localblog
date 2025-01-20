import PropTypes from "prop-types";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

function BaseLayout({ children }) {
  return (
    <main className="mx-4 max-h-screen md:min-h-screen">
      <Header />
      {children}
      <Footer />
    </main>
  );
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
