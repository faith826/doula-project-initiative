import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import GetInvolvedModal from './GetInvolvedModal';

export default function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('Become a Doula');
  const location = useLocation();

  // Scroll to top on route change, unless hash is present
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ type: string }>;
      if (customEvent.detail && customEvent.detail.type) {
        setModalType(customEvent.detail.type);
      }
      setIsModalOpen(true);
    };

    window.addEventListener('open-get-involved', handleOpen as EventListener);
    return () => {
      window.removeEventListener('open-get-involved', handleOpen as EventListener);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      
      <GetInvolvedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialType={modalType}
      />
    </div>
  );
}

