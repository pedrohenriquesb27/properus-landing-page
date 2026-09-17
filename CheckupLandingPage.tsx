'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Zap,
  ArrowRight,
  Lock,
  ChevronDown,
  CheckCircle2,
  HelpCircle,
  FileText,
  Building2,
  UserCheck,
} from 'lucide-react';

interface CheckupLandingPageProps {
  checkoutUrl?: string;
}

export default function CheckupLandingPage({
  checkoutUrl = 'https://payfast.greenn.com.br/27s9n8q?b_id_1=9ujy5kr&src=251fe2fa6aca41a0a33fd893ea936f29&sck=251fe2fa6aca41a0a33fd893ea936f29&vid=251fe2fa6anca41a0a33fd893ea936f29',
}: CheckupLandingPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

      {/* 2. HEADER - Logo com Destaque Emblemático + Navegação Mapeada */}
      <header className="py-3.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-[#0B0F19]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo Oficial Destaque com Container Limpo */}
          <div className="flex items-center shrink-0">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-900 border border-emerald-500/40 p-1.5 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)] group-hover:border-emerald-400 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all">
                <img src="images/logo.png" alt="PROSPERUS Emblem" className="w-full h-full object-contain filter drop-shadow" />
              </div>
              <div className="flex flex-col text-left justify-center">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white leading-none group-hover:text-emerald-300 transition-colors">
                  PROSPERUS
                </span>
                <span className="text-[9px] sm:text-[10px] font-extrabold tracking-[0.18em] text-emerald-400 uppercase mt-1 leading-none">
                  INTELIGÊNCIA FINANCEIRA
                </span>
              </div>
            </a>
          </div>

          {/* Âncoras do Menu Mapeadas */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#como-funciona" className="text-sm font-semibold text-slate-300 hover:text-emerald-400 transition-colors">
              Como Funciona
            </a>
            <a href="#o-que-e-analisado" className="text-sm font-semibold text-slate-300 hover:text-emerald-400 transition-colors">
              O que é Analisado
            </a>
            <a href="#duvidas-frequentes" className="text-sm font-semibold text-slate-300 hover:text-emerald-400 transition-colors">
              Dúvidas Frequentes
            </a>
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-extrabold px-5 py-2.5 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] text-sm flex items-center gap-2"
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

      {/* 4. SEÇÃO COMO FUNCIONA (id="como-funciona") */}
      <section id="como-funciona" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-950/70 border-y border-slate-800/80">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-emerald-400 mb-2">COMO FUNCIONA O DIAGNÓSTICO</h2>
            <p className="text-2xl sm:text-4xl font-bold text-white mb-4">Você paga as contas em dia, mas o banco recusa seu crédito?</p>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">Isso acontece porque os bancos utilizam dados do Banco Central e sistemas de score interno que você nem imagina que existem.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 font-bold text-xl mb-4">01</div>
              <h3 className="text-lg font-bold text-white mb-2">Prejuízo Registrado no Bacen (Prejuízo SCR)</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Mesmo após quitar uma dívida com desconto, a instituição financeira pode manter o valor remanescente anotado como prejuízo no Registrato.</p>
            </div>

            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
              <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-400 font-bold text-xl mb-4">02</div>
              <h3 className="text-lg font-bold text-white mb-2">Restrições Internas nos Bancos</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Cada grande banco possui uma lista interna restritiva. Um problema antigo em uma instituição pode bloquear seu crédito em várias outras.</p>
            </div>

            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 font-bold text-xl mb-4">03</div>
              <h3 className="text-lg font-bold text-white mb-2">Rating de Crédito Baixo</h3>
              <p className="text-slate-400 text-sm leading-relaxed">O Score do Serasa é apenas a ponta do iceberg. O seu Rating no Banco Central é o verdadeiro indicador que autoriza ou nega empréstimos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO O QUE É ANALISADO (id="o-que-e-analisado") */}
      <section id="o-que-e-analisado" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-950/80 border-y border-slate-800/80">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-emerald-400 mb-2">TUDO O QUE VOCÊ RECEBE NO SEU CHECKUP</h2>
            <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">O Que é Analisado no Seu Relatório</p>
            <p className="text-slate-400 text-sm sm:text-base mt-3">Análise minuciosa conduzida por especialistas em inteligência financeira</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold shrink-0">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Mapeamento SCR (Registrato Bacen)</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Varredura completa de todas as suas operações de crédito ativas, vencidas ou anotadas como prejuízo.</p>
              </div>
            </div>

            <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold shrink-0">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Identificação de apontamentos ocultos</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Descubra se bancos mantêm restrições internas contra seu CPF/CNPJ após negociações antigas.</p>
              </div>
            </div>

            <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold shrink-0">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Relatório Simplificado em PDF</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Receba um diagnóstico claro, sem "juridiquês", explicando exatamente por que o seu crédito está bloqueado.</p>
              </div>
            </div>

            <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold shrink-0">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Plano de Ação Personalizado</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Instruções práticas sobre como proceder para limpar seu histórico e recuperar o poder de financiamento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OFERTA / CHECKOUT (id="checkout") */}
      <section id="checkout" className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-xl mx-auto bg-gradient-to-b from-slate-900 to-[#0F172A] rounded-3xl p-6 sm:p-10 border-2 border-emerald-500/40 shadow-[0_0_50px_rgba(16,185,129,0.15)] relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full">
            Oferta por Tempo Limitado
          </div>

          <div className="text-center mb-8 pt-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Checkup Financeiro Completo</h2>
            <p className="text-slate-400 text-sm">Receba um raio-x detalhado do seu perfil de crédito diretamente no WhatsApp</p>
            
            <div className="mt-6 flex items-baseline justify-center gap-3">
              <span className="text-slate-500 line-through text-lg">De R$ 197,00</span>
              <span class="text-4xl sm:text-5xl font-extrabold text-emerald-400">R$ 99,00</span>
              <span className="text-slate-400 text-sm font-medium">à vista</span>
            </div>
          </div>

          <ul className="space-y-3 mb-8 text-sm text-slate-300">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span>Análise detalhada do Registrato (SCR / Banco Central)</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span>Identificação de apontamentos de Prejuízo e Restrições</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span>Relatório em PDF com linguagem simples e explicativa</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span>Plano de ação recomendado por especialistas</span>
            </li>
          </ul>

          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-lg py-4 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-[0_0_30px_rgba(16,185,129,0.4)]"
          >
            <span>SOLICITAR DIAGNÓSTICO • R$ 99,00</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </a>

          <div className="mt-4 text-center">
            <span className="text-xs text-slate-400">Atendimento 100% Digital • Seguro & Confidencial</span>
          </div>
        </div>
      </section>

      {/* 7. DÚVIDAS FREQUENTES (id="duvidas-frequentes") */}
      <section id="duvidas-frequentes" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-950/90 border-t border-slate-800/80">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-emerald-400 mb-2">TIRA-DÚVIDAS</h2>
            <p className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">Perguntas Frequentes</p>
            <p className="text-slate-400 text-sm sm:text-base mt-3">Esclareça suas dúvidas antes de solicitar seu Checkup Financeiro</p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqList.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-emerald-500/40"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-white text-base sm:text-lg focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-400 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
