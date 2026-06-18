import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import GetInvolvedModal from './GetInvolvedModal';

export default function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('Become a Doula');

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

