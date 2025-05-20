// QRScanner.jsx
import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const QRScanner = ({ onScanSuccess }) => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("qr-reader", {
      fps: 10,
      qrbox: { width: 250, height: 250 }
    });

    scanner.render(
      (decodedText) => {
        onScanSuccess(decodedText);
        scanner.clear(); // Optional: stop scanning after first result
      },
      (error) => {
        // Handle scan errors (optional)
        console.warn(error);
      }
    );

    return () => {
      scanner.clear().catch(error => console.error("Failed to clear scanner", error));
    };
  }, [onScanSuccess]);

  return <div id="qr-reader" />;
};

export default QRScanner;
