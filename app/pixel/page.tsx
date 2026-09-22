'use client';

import React, { useState } from 'react';

export default function PixelPage() {
  const [copied, setCopied] = useState(false);
  const [testResult, setTestResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const pixelScript = `<!-- Prosperus Custom Pixel Code -->
<script>
(function(w,d,s,e){
  function getQueryParam(p){
    var match = RegExp('[?&]' + p + '=([^&]*)').exec(w.location.search);
    return match && decodeURIComponent(match[1].replace(/\\+/g, ' '));
  }
  var vid = localStorage.getItem('prosperus_vid');
  if(!vid){
    vid = 'v_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
    localStorage.setItem('prosperus_vid', vid);
  }
  var payload = {
    client_id: 'prosperus_main',
    vid: vid,
    url: w.location.href,
    referrer: d.referrer,
    utm_source: getQueryParam('utm_source'),
    utm_medium: getQueryParam('utm_medium'),
    utm_campaign: getQueryParam('utm_campaign'),
    utm_content: getQueryParam('utm_content'),
    src: getQueryParam('src'),
    sck: getQueryParam('sck')
  };
  try {
    if(navigator.sendBeacon){
      navigator.sendBeacon(e, JSON.stringify(payload));
    } else {
      fetch(e, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload),
        keepalive: true
      });
    }
  } catch(err){}
})(window, document, 'script', 'https://www.prosperusif.com.br/api/track');
</script>
<!-- End Prosperus Custom Pixel Code -->`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixelScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const testEndpoint = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id: 'test_client',
          url: window.location.href,
          referrer: document.referrer || 'direct',
          utm_source: 'dashboard_test',
          utm_medium: 'cpc',
          utm_campaign: 'pixel_launch',
          vid: 'test_vid_123',
        }),
      });
      const data = await res.json();
      setTestResult(data);
    } catch (err: any) {
      setTestResult({ success: false, error: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 font-sans p-4 sm:p-8 selection:bg-emerald-500 selection:text-slate-950">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="border-b border-slate-800 pb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-400">
              PAINEL DE CONFIGURAÇÃO DE PIXEL
            </span>
          </div>
          <h1 className="text-3xl sm:text-3xl font-extrabold text-white">
            Pixel de Rastreamento do Sistema PROSPERUS
          </h1>
          <p className="text-slate-400 text-sm mt-2">
            Copie o script assíncrono leve para integrar na sua Landing Page e capturar visitas, sessões e conversões automaticamente no seu painel de performance.
          </p>
        </div>

        {/* Script Container Box */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 shadow-xl relative">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Script do Pixel Próprio (Inserir antes de &lt;/head&gt;)
            </h2>
            <button
              onClick={copyToClipboard}
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs px-4 py-2 rounded-xl transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] flex items-center gap-2 cursor-pointer"
            >
              {copied ? '✓ COPIADO COM SUCESSO!' : 'COPIAR SCRIPT DO PIXEL'}
            </button>
          </div>

          <pre className="bg-[#070A10] p-4 rounded-xl text-emerald-300 text-xs font-mono overflow-x-auto border border-slate-800/80 leading-relaxed">
            {pixelScript}
          </pre>
        </div>

        {/* Parameters Overview */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800">
            <h3 className="text-base font-bold text-white mb-3">Parâmetros Rastreados Automáticos</h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <strong>client_id:</strong> Identificador do cliente ou conta
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <strong>vid:</strong> Visitor ID único persistente via localStorage
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <strong>url & referrer:</strong> Endereço da página atual e origem
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <strong>UTMs:</strong> utm_source, utm_medium, utm_campaign, utm_content
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <strong>IDs de Origem:</strong> src, sck
              </li>
            </ul>
          </div>

          <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800">
            <h3 className="text-base font-bold text-white mb-3">Teste de Ingestão de API</h3>
            <p className="text-xs text-slate-400 mb-4">
              Clique no botão abaixo para simular o disparo de um evento de visita para a rota <code>/api/track</code>.
            </p>
            <button
              onClick={testEndpoint}
              disabled={loading}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs py-2.5 rounded-xl border border-slate-700 transition-colors"
            >
              {loading ? 'ENVIANDO TESTE...' : 'DISPARAR EVENTO DE TESTE (/api/track)'}
            </button>

            {testResult && (
              <div className="mt-4 p-3 bg-slate-950 rounded-xl border border-slate-800">
                <div className="text-[10px] font-mono text-emerald-400 mb-1">
                  RESPOSTA DA API ({testResult.success ? '200 OK' : 'ERRO'}):
                </div>
                <pre className="text-[11px] font-mono text-slate-300 overflow-x-auto">
                  {JSON.stringify(testResult, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
