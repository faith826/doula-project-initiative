import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Download, Printer, ArrowLeft, CheckSquare, Heart, RefreshCw, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';

const checklistData = [
  {
    title: "Items for Labour",
    items: [
      "Birth plan and NHS maternity notes (handheld green notes or maternity app)",
      "Comfortable, loose clothing (e.g., an old nightdress or oversized t-shirt)",
      "Slippers or comfortable indoor shoes",
      "Massage oil or lotion",
      "Lip balm and hair ties",
      "Snacks and drinks (isotonic drinks are great for energy)",
      "Any prescribed medication"
    ]
  },
  {
    title: "After Birth (For You)",
    items: [
      "Comfortable, front-opening clothes for nursing",
      "Nursing bras (2-3 pairs) and breast pads",
      "Maternity pads (at least 2 packs)",
      "Old or disposable underwear (at least 5-6 pairs)",
      "Toiletries (toothbrush, toothpaste, shower gel, shampoo, deodorant)",
      "A dark-coloured towel",
      "Comfortable outfit for going home"
    ]
  },
  {
    title: "Baby Essentials",
    items: [
      "Bodysuits and sleepsuits (3-4 of each)",
      "Newborn nappies (1 pack)",
      "Cotton wool or water wipes",
      "Baby blanket and cellular blanket",
      "Muslin squares (3-4)",
      "Socks, scratch mitts, and a hat",
      "An outfit for going home",
      "Car seat (essential for travelling home)"
    ]
  },
  {
    title: "Birth Partner Essentials",
    items: [
      "Comfortable clothes and shoes",
      "Snacks, drinks, and change for vending machines",
      "Phone charger or power bank",
      "Camera or phone for photos",
      "A book, tablet, or something to pass the time",
      "A spare toothbrush"
    ]
  }
];

export default function HospitalBagChecklist() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('hospitalBagChecklist');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to parse checklist from localStorage', e);
    }
    return {};
  });

  useEffect(() => {
    localStorage.setItem('hospitalBagChecklist', JSON.stringify(checkedItems));
  }, [checkedItems]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset your checklist?')) {
      setCheckedItems({});
    }
  };

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    try {
      const doc = new jsPDF();
      const pageHeight = doc.internal.pageSize.getHeight();
      const pageWidth = doc.internal.pageSize.getWidth();
      
      // Helper to add footer
      const addFooter = () => {
        doc.setFontSize(9);
        doc.setFont("helvetica", "italic");
        doc.setTextColor(150, 150, 150);
        doc.text(`Generated on ${new Date().toLocaleDateString()}`, 20, pageHeight - 10);
        doc.text("hello@doulaproject.org", pageWidth - 20, pageHeight - 10, { align: "right" });
      };

      // Helper to add logo and header on a page
      const addHeaderLogo = async () => {
        // Website email under logo
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(100, 100, 100);
        doc.text("hello@doulaproject.org", pageWidth / 2, 29, { align: "center" });

        await new Promise<void>((resolve) => {
          const img = new Image();
          img.crossOrigin = 'Anonymous';
          img.onload = () => {
            try {
              const canvas = document.createElement('canvas');
              canvas.width = img.width;
              canvas.height = img.height;
              const ctx = canvas.getContext('2d');
              if (ctx) {
                ctx.drawImage(img, 0, 0);
                const dataUrl = canvas.toDataURL('image/png');
                doc.addImage(dataUrl, 'PNG', (pageWidth - 24) / 2, 12, 24, 12);
              }
            } catch (e) {
              console.error('Failed to load logo image into canvas:', e);
              doc.setFont("helvetica", "bold");
              doc.setFontSize(12);
              doc.setTextColor(20, 115, 115);
              doc.text("THE DOULA PROJECT", pageWidth / 2, 18, { align: "center" });
            }
            resolve();
          };
          img.onerror = () => {
            doc.setFont("helvetica", "bold");
            doc.setFontSize(12);
            doc.setTextColor(20, 115, 115);
            doc.text("THE DOULA PROJECT", pageWidth / 2, 18, { align: "center" });
            resolve();
          };
          img.src = 'https://i.postimg.cc/k4PHWn40/doula.png';
        });
      };

      // Add logo on first page
      await addHeaderLogo();
      addFooter();

      // Title below logo and email
      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      doc.setTextColor(20, 115, 115); // Teal color
      doc.text("Hospital Bag Checklist", pageWidth / 2, 45, { align: "center" });
      
      let yPos = 60;
      
      for (const section of checklistData) {
        if (yPos > pageHeight - 30) {
          doc.addPage();
          addFooter();
          yPos = 20;
        }
        
        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.setTextColor(239, 118, 106); // Coral color
        doc.text(section.title, 20, yPos);
        yPos += 10;
        
        doc.setFont("helvetica", "normal");
        doc.setFontSize(11);
        doc.setTextColor(40, 40, 40); // Charcoal
        
        for (const item of section.items) {
          if (yPos > pageHeight - 20) {
            doc.addPage();
            addFooter();
            yPos = 20;
          }
          
          const isChecked = checkedItems[item];
          
          // Draw checkbox
          doc.setDrawColor(20, 115, 115);
          if (isChecked) {
            doc.setFillColor(20, 115, 115);
            doc.rect(20, yPos - 4, 4, 4, "FD"); // Filled rect
          } else {
            doc.rect(20, yPos - 4, 4, 4); // Outline rect
          }
          
          // Split text if it's too long
          const splitText = doc.splitTextToSize(item, 160);
          
          if (isChecked) {
            doc.setTextColor(150, 150, 150);
          } else {
            doc.setTextColor(40, 40, 40);
          }
          
          doc.text(splitText, 28, yPos);
          yPos += splitText.length * 6 + 2; // Adjust yPos based on lines
        }
        
        yPos += 8; // Space between sections
      }
      
      doc.save("Hospital_Bag_Checklist.pdf");
    } catch (error) {
      console.error("PDF download failed:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  const toggleItem = (item: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const CheckboxItem: React.FC<{ item: string }> = ({ item }) => (
    <li className="flex items-start gap-3 text-charcoal/80 group">
      <button 
        onClick={() => toggleItem(item)}
        className={`mt-1 flex-shrink-0 w-6 h-6 rounded flex items-center justify-center border-2 transition-all cursor-pointer ${checkedItems[item] ? 'bg-teal border-teal text-white' : 'border-teal/30 hover:border-teal/60 bg-white'}`}
        aria-label={checkedItems[item] ? `Uncheck ${item}` : `Check ${item}`}
      >
        {checkedItems[item] && <Check className="w-4 h-4" strokeWidth={3} />}
      </button>
      <span 
        className={`cursor-pointer select-none transition-all pt-0.5 ${checkedItems[item] ? 'line-through text-charcoal/40' : 'group-hover:text-teal'}`}
        onClick={() => toggleItem(item)}
      >
        {item}
      </span>
    </li>
  );

  return (
    <div className="pt-24 pb-20 bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-12 md:py-16 max-w-7xl mx-auto">
        <Link to="/resources" className="inline-flex items-center gap-2 text-teal font-medium hover:text-teal-dark mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Resources
        </Link>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 bg-sage/20 px-4 py-2 rounded-full text-teal font-medium text-sm mb-6">
              <CheckSquare className="w-4 h-4" /> Checklist
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-charcoal mb-6">
              Hospital Bag Checklist
            </h1>
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed max-w-xl">
              Preparing your hospital bag in advance helps you stay calm and focused when labour begins. Use this practical guide to ensure you, your birth partner, and your new baby have everything you need for a comfortable stay.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="African mother and newborn" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Checklist Content */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-beige"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-teal mb-4">What to Pack</h2>
            <p className="text-charcoal/70">
              We recommend packing your bag by week 36 of your pregnancy. 
            </p>
          </div>

          <div className="space-y-12">
            {checklistData.map((section, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-3 mb-6 pb-2 border-b-2 border-sage/30">
                  <Heart className="w-6 h-6 text-coral" fill="currentColor" />
                  <h3 className="text-2xl font-bold font-heading text-charcoal">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, i) => <CheckboxItem key={i} item={item} />)}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="mt-16 pt-8 border-t border-beige flex flex-wrap gap-4 justify-center">
            <button 
              onClick={handleDownloadPDF}
              disabled={isDownloading}
              className="bg-teal text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-dark transition-colors inline-flex items-center gap-2 shadow-sm text-sm cursor-pointer disabled:opacity-50"
            >
              <Download className="w-4 h-4" /> {isDownloading ? 'Downloading...' : 'Download My Checklist (PDF)'}
            </button>
            <button 
              onClick={handlePrint}
              className="bg-white border-2 border-teal text-teal px-6 py-3 rounded-lg font-semibold hover:bg-teal hover:text-white transition-colors inline-flex items-center gap-2 shadow-sm cursor-pointer text-sm"
            >
              <Printer className="w-4 h-4" /> Print My Checklist
            </button>
            <button 
              onClick={handleReset}
              className="bg-white border-2 border-coral text-coral px-6 py-3 rounded-lg font-semibold hover:bg-coral hover:text-white transition-colors inline-flex items-center gap-2 shadow-sm cursor-pointer text-sm"
            >
              <RefreshCw className="w-4 h-4" /> Reset Checklist
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

