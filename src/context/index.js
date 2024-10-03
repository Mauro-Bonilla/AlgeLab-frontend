import { AlertProvider } from "./AlertContext/AlertContext";
import { AuthProvider } from "./AuthContext/AuthContext";
import PropTypes from "prop-types";

const AppProviders = ({ children }) => {
  return (
    <AlertProvider>
      <AuthProvider>{children}</AuthProvider>
    </AlertProvider>
  );
};

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProviders;
