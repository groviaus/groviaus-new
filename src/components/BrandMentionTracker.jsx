import Script from "next/script";

export default function BrandMentionTracker() {
  return (
    <Script id="brand-mention-tracker" strategy="afterInteractive">
      {`
        const brandVariants = ['groviaus', 'grovia', 'grovius', 'growvius'];
        document.addEventListener('copy', (e) => {
          const text = window.getSelection().toString().toLowerCase();
          if (brandVariants.some(variant => text.includes(variant))) {
            // Send to analytics
            if (typeof gtag === 'function') {
              gtag('event', 'brand_mention_copy', {
                event_category: 'Brand',
                event_label: text.substring(0, 50)
              });
            }
            // Send to custom endpoint
            fetch('/api/track-mention', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ text })
            });
          }
        });
      `}
    </Script>
  );
}
