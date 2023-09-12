import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Services from "./services";
import Air from "./services/transport/Air";
import Land from "./services/transport/Land";
import Sea from "./services/transport/Sea";
import Onboard from "./services/comprehensive/Onboard";
import Transloading from "./services/comprehensive/Transloading";
import Multimodal from "./services/comprehensive/Multimodal";
import Clearance from "./services/compliance/Clearance";
import Consultations from "./services/compliance/Consultations";
import Company from "./company";
import Careers from "./company/Careers";
import Connect from "./connect";
import TermsConditions from "./web/TermsConditions";
import PrivacyStatement from "./web/PrivacyStatement";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />

      <Route path="services" element={<Services />} />
      <Route path="services/air" element={<Air />} />
      <Route path="services/sea" element={<Sea />} />
      <Route path="services/land" element={<Land />} />

      <Route path="services/onboard" element={<Onboard />} />
      <Route path="services/transloading" element={<Transloading />} />
      <Route path="services/multimodal" element={<Multimodal />} />

      <Route path="services/clearance" element={<Clearance />} />
      <Route path="services/consultations" element={<Consultations />} />

      <Route path="company" element={<Company />} />
      <Route path="company/careers" element={<Careers />} />

      <Route path="connect" element={<Connect />} />

      <Route path="terms-conditions" element={<TermsConditions />} />
      <Route path="privacy-statement" element={<PrivacyStatement />} />
    </Routes>
  );
};

export default AppRoutes;
