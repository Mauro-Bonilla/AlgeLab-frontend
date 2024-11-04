import { AlertProvider } from "./AlertContext/AlertContext";
import { AuthProvider } from "./AuthContext/AuthContext";
import { LessonsProvider } from "./LessonsContext/LessonsContext";
import PropTypes from "prop-types";

const AppProviders = ({ children }) => {
  return (
    <AlertProvider>
      <AuthProvider>
        <LessonsProvider>
          {children}
        </LessonsProvider>
      </AuthProvider>
    </AlertProvider>
  );
};

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProviders;