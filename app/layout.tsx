import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: 'PROSPERUS Inteligência Financeira - Checkup & Diagnóstico Bacen',
  description: 'Descubra o motivo real do seu crédito estar negado ou seu CNPJ travado. Diagnóstico técnico e individual do seu histórico no Banco Central por R$ 99,00.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${plusJakartaSans.variable} dark scroll-smooth`}>
      <head>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1107957032177054');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1107957032177054&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
        {/* Prosperus Custom Pixel Code */}
        <Script id="prosperus-pixel" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s);
              j.async=true;
              j.src='https://www.prosperusif.com.br/api/track?client_id='+encodeURIComponent(i)+'&url='+encodeURIComponent(w.location.href)+'&referrer='+encodeURIComponent(d.referrer);
              f.parentNode.insertBefore(j,f);
              try {
                var p = new URLSearchParams(w.location.search);
                var payload = {
                  client_id: i,
                  url: w.location.href,
                  referrer: d.referrer,
                  utm_source: p.get('utm_source'),
                  utm_medium: p.get('utm_medium'),
                  utm_campaign: p.get('utm_campaign'),
                  utm_content: p.get('utm_content'),
                  vid: p.get('vid'),
                  src: p.get('src'),
                  sck: p.get('sck')
                };
                if (navigator.sendBeacon) {
                  navigator.sendBeacon('https://www.prosperusif.com.br/api/track', JSON.stringify(payload));
                } else {
                  fetch('https://www.prosperusif.com.br/api/track', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                    keepalive: true
                  }).catch(function(){});
                }
              } catch(e) {}
            })(window, document, 'script', 'prosperusTrack', 'prosperus_main');
          `}
        </Script>
        {/* Microsoft Clarity Code */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "yme8rmsnp3");
          `}
        </Script>
        {/* End Microsoft Clarity Code */}
      </head>
      <body className="bg-[#0B0F19] text-slate-100 antialiased selection:bg-emerald-500 selection:text-slate-950 min-h-screen">
        {children}
      </body>
    </html>
  );
}
