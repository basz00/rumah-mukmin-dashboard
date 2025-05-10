import { Layout } from "@/common/ui/components";
import createApolloClient from "@/graphql";
import { Reservation } from "@/reservation/presentation/ui";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { useHostState } from "./features/common/config";

const App = () => {
  const { hostUrl } = useHostState();

  return (
    <ApolloProvider client={createApolloClient(hostUrl)}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Reservation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
