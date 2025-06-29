import Script from "next/script";

export default function BrandMentionTracker() {
  return (
    <Script id="brand-mention-tracker" strategy="afterInteractive">
      {`
        document.addEventListener('copy', function(event) {
          const selectedText = window.getSelection().toString().toLowerCase();
          const brandVariants = [
            'groviaus', 'grovia', 'grovius', 'growvius', 'grociaus'
          ];
          
          if (brandVariants.some(variant => selectedText.includes(variant))) {
            // Send to Google Analytics
            if (typeof gtag === 'function') {
              gtag('event', 'brand_mention_copy', {
                'event_category': 'Brand',
                'event_label': selectedText.substring(0, 100)
              });
            }
            
            // Send to your backend
            fetch('/api/track-mention', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ text: selectedText })
            });
          }
        });
      `}
    </Script>
  );
}
