import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Download, Printer, ArrowLeft, FileText, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';

export default function MyBirthPlan() {
  const [isDownloading, setIsDownloading] = React.useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handlePrint = () => {
    window.print();
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
      doc.text("My Birth Plan Template", pageWidth / 2, 45, { align: "center" });
      
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      const subtitle = doc.splitTextToSize("A personal guide to communicate your preferences, support needs, and wishes for labour and delivery with your healthcare team and birth partners.", 170);
      doc.text(subtitle, pageWidth / 2, 53, { align: "center" });

      let yPos = 70;

      // Section 1: Personal Information
      doc.setFont("helvetica", "bold");
      doc.setFontSize(13);
      doc.setTextColor(239, 118, 106); // Coral color
      doc.text("1. Personal Information", 20, yPos);
      yPos += 8;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(50, 50, 50);

      const drawLineField = (label1: string, label2: string, y: number) => {
        doc.text(label1 + ": __________________________________", 20, y);
        doc.text(label2 + ": __________________________________", 110, y);
      };

      drawLineField("Full Name", "Due Date", yPos);
      yPos += 8;
      drawLineField("Birth Partner", "Partner Contact", yPos);
      yPos += 8;
      drawLineField("Doula Name", "Doula Contact", yPos);
      yPos += 8;
      drawLineField("Midwife/Doctor", "Hospital Name", yPos);
      yPos += 14;

      // Section 2: Labour Preferences
      doc.setFont("helvetica", "bold");
      doc.setFontSize(13);
      doc.setTextColor(239, 118, 106); // Coral color
      doc.text("2. Labour Preferences", 20, yPos);
      yPos += 8;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(50, 50, 50);

      const items2 = [
        "Preferred environment (e.g., dim lighting, personal music, quiet, aromatherapy)",
        "Preferences for remaining active, walking, changing positions, or using water",
        "Birthing tools preference (e.g., birth ball, pool, birthing stool, wall bars)",
        "Monitoring choices (e.g., intermittent monitoring preferred over continuous unless necessary)"
      ];

      items2.forEach((item) => {
        doc.setDrawColor(20, 115, 115);
        doc.rect(20, yPos - 4, 4, 4); // Draw empty checkbox
        const textLines = doc.splitTextToSize(item, 160);
        doc.text(textLines, 28, yPos);
        yPos += textLines.length * 5 + 2;
      });

      yPos += 4;

      // Section 3: Pain Relief Choices
      if (yPos > pageHeight - 40) {
        doc.addPage();
        addFooter();
        yPos = 25;
      }

      doc.setFont("helvetica", "bold");
      doc.setFontSize(13);
      doc.setTextColor(239, 118, 106); // Coral color
      doc.text("3. Pain Relief Choices", 20, yPos);
      yPos += 8;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(50, 50, 50);

      const items3 = [
        "Natural relief (e.g., massage, hot/cold packs, relaxation techniques, hydrotherapy)",
        "Medical pain relief (e.g., Gas & Air, Pethidine/Meptazinol, Epidural, Tens machine)",
        "Offer approach (e.g., I would like to request pain relief myself, please do not offer)"
      ];

      items3.forEach((item) => {
        doc.setDrawColor(20, 115, 115);
        doc.rect(20, yPos - 4, 4, 4); // Draw empty checkbox
        const textLines = doc.splitTextToSize(item, 160);
        doc.text(textLines, 28, yPos);
        yPos += textLines.length * 5 + 2;
      });

      yPos += 4;

      // Section 4: During Delivery
      if (yPos > pageHeight - 40) {
        doc.addPage();
        addFooter();
        yPos = 25;
      }

      doc.setFont("helvetica", "bold");
      doc.setFontSize(13);
      doc.setTextColor(239, 118, 106); // Coral color
      doc.text("4. During Delivery", 20, yPos);
      yPos += 8;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(50, 50, 50);

      const items4 = [
        "Preferred birthing positions (e.g., kneeling, squatting, side-lying, birthing stool)",
        "Delayed cord clamping (e.g., wait until the umbilical cord stops pulsating)",
        "Who will cut the umbilical cord (e.g., partner, doctor/midwife)",
        "Delivery of placenta preference (e.g., active management vs physiological delivery)"
      ];

      items4.forEach((item) => {
        doc.setDrawColor(20, 115, 115);
        doc.rect(20, yPos - 4, 4, 4); // Draw empty checkbox
        const textLines = doc.splitTextToSize(item, 160);
        doc.text(textLines, 28, yPos);
        yPos += textLines.length * 5 + 2;
      });

      yPos += 4;

      // Section 5: Immediately After Birth
      if (yPos > pageHeight - 40) {
        doc.addPage();
        addFooter();
        yPos = 25;
      }

      doc.setFont("helvetica", "bold");
      doc.setFontSize(13);
      doc.setTextColor(239, 118, 106); // Coral color
      doc.text("5. Immediately After Birth", 20, yPos);
      yPos += 8;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(50, 50, 50);

      const items5 = [
        "Skin-to-skin contact preferences (e.g., immediate uninterrupted contact for at least 1 hour)",
        "Feeding preferences (e.g., immediate breast support, hand expressing, formula)",
        "Vitamin K administration for the newborn (e.g., injection, oral, or decline)",
        "Cultural or religious traditions/customs to observe immediately following birth"
      ];

      items5.forEach((item) => {
        doc.setDrawColor(20, 115, 115);
        doc.rect(20, yPos - 4, 4, 4); // Draw empty checkbox
        const textLines = doc.splitTextToSize(item, 160);
        doc.text(textLines, 28, yPos);
        yPos += textLines.length * 5 + 2;
      });

      yPos += 10;

      if (yPos > pageHeight - 35) {
        doc.addPage();
        addFooter();
        yPos = 25;
      }

      // Notes block
      doc.setFillColor(245, 235, 224); // Creamy beige background
      doc.rect(20, yPos, 170, 20, "F");
      
      doc.setFont("helvetica", "italic");
      doc.setFontSize(8.5);
      doc.setTextColor(100, 100, 100);
      const noteText = doc.splitTextToSize("Remember, childbirth can be unpredictable. A birth plan is a statement of your preferences, but flexibility is important if medical circumstances change. Your healthcare team and doula will discuss any changes with you to ensure safety.", 160);
      doc.text(noteText, 25, yPos + 5);

      doc.save("My_Birth_Plan_Template.pdf");
    } catch (error) {
      console.error("PDF download failed:", error);
    } finally {
      setIsDownloading(false);
    }
  };

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
            <div className="inline-flex items-center gap-2 bg-peach/30 px-4 py-2 rounded-full text-coral font-medium text-sm mb-6">
              <FileText className="w-4 h-4" /> Template
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-charcoal mb-6">
              My Birth Plan
            </h1>
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed max-w-xl">
              A birth plan is a simple, clear way to communicate your preferences, pain relief choices, and personal wishes with your healthcare team. Use our template to feel empowered and heard during your labour and delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleDownloadPDF}
                disabled={isDownloading}
                className="bg-coral text-white px-8 py-4 rounded-lg font-semibold hover:bg-coral/90 transition-colors inline-flex items-center gap-2 shadow-sm cursor-pointer disabled:opacity-50"
              >
                <Download className="w-5 h-5" /> {isDownloading ? 'Downloading...' : 'Download PDF'}
              </button>
              <button 
                onClick={handlePrint}
                className="bg-white border-2 border-coral text-coral px-8 py-4 rounded-lg font-semibold hover:bg-coral hover:text-white transition-colors inline-flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <Printer className="w-5 h-5" /> Print Birth Plan
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1599580436976-799ff0a8d675?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="Healthcare professional talking with pregnant mother" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Birth Plan Content */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-beige"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-teal mb-4">Birth Plan Preview</h2>
            <p className="text-charcoal/70">
              Review the sections of our birth plan below to start thinking about your preferences.
              <br/>
              <span className="text-xs opacity-60">(Upload the official PDF to <code className="bg-gray-100 px-1 py-0.5 rounded">/public/resources/my-birth-plan.pdf</code> to enable the direct download.)</span>
            </p>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-teal pl-6 py-2">
              <h3 className="text-xl font-bold font-heading text-charcoal mb-2">1. Personal Information</h3>
              <ul className="space-y-2 text-charcoal/70 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sage" /> Your name & expected due date</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sage" /> Birth partner's name & contact info</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sage" /> Doula's name & contact info</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sage" /> Lead healthcare professional/midwife</li>
              </ul>
            </div>

            <div className="border-l-4 border-coral pl-6 py-2">
              <h3 className="text-xl font-bold font-heading text-charcoal mb-2">2. Labour Preferences</h3>
              <ul className="space-y-2 text-charcoal/70 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sage" /> Preferred environment (e.g., dim lighting, music, quiet)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sage" /> Preferences for moving around or staying active</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sage" /> Birthing equipment (e.g., birthing ball, pool, mat)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sage" /> Preferences regarding continuous monitoring</li>
              </ul>
            </div>

            <div className="border-l-4 border-gold pl-6 py-2">
              <h3 className="text-xl font-bold font-heading text-charcoal mb-2">3. Pain Relief Choices</h3>
              <ul className="space-y-2 text-charcoal/70 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sage" /> Natural methods (e.g., breathing techniques, massage, water)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sage" /> Medical pain relief (e.g., Gas and Air, Epidural, Pethidine)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sage" /> How and when you would like pain relief offered</li>
              </ul>
            </div>

            <div className="border-l-4 border-teal pl-6 py-2">
              <h3 className="text-xl font-bold font-heading text-charcoal mb-2">4. During Delivery</h3>
              <ul className="space-y-2 text-charcoal/70 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sage" /> Preferred birthing positions</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sage" /> Preferences for delayed cord clamping</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sage" /> Who will cut the umbilical cord</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sage" /> Preferences regarding the delivery of the placenta</li>
              </ul>
            </div>

            <div className="border-l-4 border-coral pl-6 py-2">
              <h3 className="text-xl font-bold font-heading text-charcoal mb-2">5. Immediately After Birth</h3>
              <ul className="space-y-2 text-charcoal/70 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sage" /> Skin-to-skin contact preferences</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sage" /> Feeding preferences (breastfeeding, formula, or both)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sage" /> Vitamin K administration for baby</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sage" /> Cultural or religious traditions to observe</li>
              </ul>
            </div>

            <div className="bg-sage/10 p-6 rounded-2xl mt-8">
              <p className="text-charcoal/80 text-sm leading-relaxed italic">
                Remember, childbirth can be unpredictable. A birth plan is a statement of your preferences, but flexibility is important if medical circumstances change. Your healthcare team and doula will discuss any changes with you to ensure you and your baby remain safe.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
