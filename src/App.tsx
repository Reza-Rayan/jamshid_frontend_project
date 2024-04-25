import { useEffect, useState } from "react";

import Preloader from "./components/Preloader";

// Custom
import AllRoutes from "./routes";

const App = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  useEffect(() => {
    // Hide the preloader after 3 seconds
    const timeout = setTimeout(() => {
      setShowPreloader(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Preloader show={showPreloader} />
      {!showPreloader && <AllRoutes />}
    </>
  );
};

export default App;
