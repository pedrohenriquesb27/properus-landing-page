'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  AlertOctagon,
  TrendingDown,
  EyeOff,
  CheckCircle2,
  Star,
  ArrowRight,
  Lock,
  ChevronDown,
  FileCheck,
  Clock,
  Sparkles,
  Award,
  Zap,
} from 'lucide-react';

interface CheckupLandingPageProps {
  checkoutUrl?: string;
  logoSrc?: string;
}

export default function CheckupLandingPage({
  checkoutUrl = 'https://payfast.greenn.com.br/27s9n8q?b_id_1=9ujy5kr&src=251fe2fa6aca41a0a33fd893ea936f29&sck=251fe2fa6aca41a0a33fd893ea936f29&vid=251fe2fa6anca41a0a33fd893ea936f29',
  logoSrc = '/images/logo.png',
}: CheckupLandingPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [logoError, setLogoError] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqList = [
    {
      question: 'Preciso informar minha senha do banco ou do gov.br?',
      answer:
        'NÃO! Jamais pediremos suas senhas pessoais ou bancárias. O relatório é gerado com base nas orientações de emissão pública e segura autorizada pelo titular conforme a LGPD.',
    },
    {
      question: 'O Checkup serve tanto para CPF quanto para CNPJ?',
      answer:
        'Sim! Atendemos pessoas físicas que desejam aprovar financiamentos (imóveis, veículos, cartões de crédito) e empresários/PJ que precisam destravar linhas de crédito e capital de giro nos bancos.',
    },
    {
      question: 'Em quanto tempo recebo meu diagnóstico?',
      answer:
        'O processamento do seu relatório em PDF é enviado em poucos minutos diretamente no seu WhatsApp após a confirmação no checkout.',
    },
    {
      question: 'O que acontece depois de receber o relatório?',
      answer:
        'Você terá acesso direto ao nosso canal exclusivo no WhatsApp com especialista. Analisaremos seu caso e mostraremos a melhor estratégia para regularizar seu histórico de crédito.',
    },
  ];

  return (
    <div className="bg-[#0B0F19] text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-white min-h-screen pb-24 md:pb-0">
      
      {/* 1. TOP URGENCY BANNER */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-600 to-emerald-950 text-white text-xs md:text-sm font-semibold py-2.5 px-4 text-center border-b border-emerald-500/30 flex items-center justify-center gap-2 shadow-lg">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
        </span>
        <span>
          OFERTA ESPECIAL DE LANÇAMENTO: Restam apenas{' '}
          <strong className="text-emerald-200 underline">14 vagas</strong> para análise manual hoje!
        </span>
      </div>

      {/* 2. HEADER */}
      <header className="py-4 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-[#0B0F19]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
          
          <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
            {!logoError ? (
              <img
                src={logoSrc}
                alt="PROSPERUS Inteligência Financeira"
                onError={() => setLogoError(true)}
                className="h-[45px] md:h-[55px] w-auto object-contain max-h-[55px] filter drop-shadow-md"
              />
            ) : (
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <ShieldCheck className="w-6 h-6 text-slate-950 stroke-[2.5]" />
                </div>
                <div className="text-left">
                  <span className="font-extrabold text-lg tracking-tight text-white block leading-none">
                    PROSPERUS<span className="text-emerald-400"> • FINANÇAS</span>
                  </span>
                  <span className="text-[10px] text-slate-400 tracking-wider font-semibold uppercase block mt-0.5">
                    Inteligência Financeira
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#como-funciona" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">
              Como Funciona
            </a>
            <a href="#beneficios" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">
              O que é Analisado
            </a>
            <a href="#faq" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">
              Dúvidas Frequentes
            </a>
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] text-sm flex items-center gap-2"
            >
              <span>CHECKUP POR R$ 99,00</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-950/20 via-[#0B0F19] to-[#0B0F19]">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold mb-6">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span>PROSPERUS • Raio-X Completo no Banco Central</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Descubra o que está{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              bloqueando seu crédito
            </span>{' '}
            e volte a ter aprovação dos bancos
          </h1>

          <p className="text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto mb-8">
            Identifique restrições ocultas no <strong className="text-white">Registrato (SCR)</strong>, apontamentos que queimam seu Score e entenda exatamente o motivo de ter financiamentos e cartões recusados.
          </p>

          <div className="max-w-md mx-auto mb-8">
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-extrabold text-lg sm:text-xl py-4 sm:py-5 px-6 rounded-2xl flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-[0_0_35px_rgba(16,185,129,0.35)]"
            >
              <span>QUERO MEU CHECKUP • R$ 99,00</span>
              <ArrowRight className="w-6 h-6 stroke-[3] group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-xs text-slate-400 mt-3 flex items-center justify-center gap-2">
              <Lock className="w-4 h-4 text-emerald-400" />
              Análise Individualizada • Relatório em formato PDF no seu WhatsApp
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
