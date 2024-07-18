import { FC } from "react";
import Cars from "./pages/Cars/Cars";
import { Layout } from "./shared/components/ui/Layout";

const App: FC = () => {
  return (
    <Layout>
      <Cars />
    </Layout>
  );
};

export default App;
