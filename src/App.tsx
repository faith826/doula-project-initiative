/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import WhatIsADoula from './pages/WhatIsADoula';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import HospitalBagChecklist from './pages/HospitalBagChecklist';
import MyBirthPlan from './pages/MyBirthPlan';
import PregnancySupport from './pages/PregnancySupport';
import BirthSupport from './pages/BirthSupport';
import PostnatalSupport from './pages/PostnatalSupport';
import FamilyEducation from './pages/FamilyEducation';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="what-is-a-doula" element={<WhatIsADoula />} />
          <Route path="resources" element={<Resources />} />
          <Route path="resources/hospital-bag-checklist" element={<HospitalBagChecklist />} />
          <Route path="resources/my-birth-plan" element={<MyBirthPlan />} />
          <Route path="services/pregnancy-support" element={<PregnancySupport />} />
          <Route path="services/birth-support" element={<BirthSupport />} />
          <Route path="services/postnatal-support" element={<PostnatalSupport />} />
          <Route path="services/family-education" element={<FamilyEducation />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-use" element={<TermsOfUse />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

