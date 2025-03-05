import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:username/*" element={<UserPage />}>
          <Route index element={<DetailPage detailKey="overview" />} />
          <Route path="overview" element={<DetailPage detailKey="overview" />} />
          <Route path="repos" element={<DetailPage detailKey="repos" />} />
          <Route path="followers" element={<DetailPage detailKey="followers" />} />
          <Route path="following" element={<DetailPage detailKey="following" />} />
          <Route path="gists" element={<DetailPage detailKey="gists" />} />
          <Route path="orgs" element={<DetailPage detailKey="orgs" />} />
          <Route path="events" element={<DetailPage detailKey="events" />} />
          <Route path="received_events" element={<DetailPage detailKey="received_events" />} />
          <Route path="starred" element={<DetailPage detailKey="starred" />} />
          <Route path="subscriptions" element={<DetailPage detailKey="subscriptions" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
