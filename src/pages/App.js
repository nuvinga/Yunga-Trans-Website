import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </MantineProvider>
  );
};

export default App;
