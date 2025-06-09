
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { QrCode, Download, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';

const QRCodeSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            QR Kode til Hjemmeside
          </h2>
          <div className="w-24 h-1 bg-conservative-green mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground">
            Perfekt til valgbrochurer og kampagnemateriale
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card className="border-conservative-green/20">
            <CardContent className="p-8 text-center">
              <div className="mb-8">
                <div className="w-64 h-64 mx-auto bg-white border-4 border-conservative-green rounded-lg flex items-center justify-center shadow-lg">
                  {/* QR Code placeholder - in real implementation, this would be generated */}
                  <div className="w-48 h-48 bg-gradient-to-br from-conservative-green to-conservative-light-green rounded flex items-center justify-center">
                    <QrCode className="w-24 h-24 text-white" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Scan for at besøge hjemmesiden
              </h3>
              <p className="text-muted-foreground mb-6">
                Denne QR kode kan bruges på alle dine valgmaterialer, så vælgerne nemt kan finde din hjemmeside og læse mere om dit program.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-conservative-green hover:bg-conservative-green/90"
                  onClick={() => {
                    // In real implementation, this would download the QR code image
                    alert('QR kode download - denne funktion ville være implementeret i en rigtig applikation');
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download QR Kode
                </Button>
                <Button 
                  variant="outline" 
                  className="border-conservative-green text-conservative-green hover:bg-conservative-green hover:text-white"
                  onClick={() => {
                    window.print();
                  }}
                >
                  <Printer className="w-4 h-4 mr-2" />
                  Print Side
                </Button>
              </div>

              <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Tip:</strong> QR koden kan placeres på visitkort, flyers, bannere og alle andre kampagnematerialer for nem adgang til hjemmesiden.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default QRCodeSection;
