import { useState } from 'react';

interface Message {
  from: 'ai' | 'user';
  text: string;
}

const quickQuestions = [
  'Was kostet Stage 1 Chiptuning?',
  'Welche Fahrzeuge tunt ihr?',
  'Termin vereinbaren',
  'Adresse & Öffnungszeiten',
];

const aiReplies: Record<string, string> = {
  'Was kostet Stage 1 Chiptuning?':
    'Stage 1 Chiptuning beginnt bei uns ab 379 €. Der Preis variiert je nach Fahrzeug und gewünschter Leistungsstufe. Schreib uns dein Fahrzeug und wir erstellen ein individuelles Angebot!',
  'Welche Fahrzeuge tunt ihr?':
    'Wir tun praktisch alle modernen Fahrzeuge mit Benzin- oder Dieselmotor – von VW Golf GTI über BMW M bis hin zu Mercedes AMG und Audi RS. Frage einfach nach deinem Modell!',
  'Termin vereinbaren':
    'Super! Du kannst direkt online einen Termin buchen oder uns per WhatsApp schreiben. Wir melden uns schnellstmöglich bei dir.',
  'Adresse & Öffnungszeiten':
    'Unser Standort: Ferdinand-Porsche-Straße 6, 63500 Seligenstadt. Termine nach Vereinbarung – am besten direkt online buchen!',
};

export default function AIAgentSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      from: 'ai',
      text: 'Hey! Ich bin dein 63-Performance Assistent. Frag mich nach Preisen, Öffnungszeiten, unseren Leistungen oder vereinbare direkt einen Termin. Wie kann ich dir helfen?',
    },
  ]);
  const [input, setInput] = useState('');

  const handleQuickQuestion = (q: string) => {
    setMessages((prev) => [
      ...prev,
      { from: 'user', text: q },
      { from: 'ai', text: aiReplies[q] || 'Toll! Für mehr Details melde dich gerne per WhatsApp oder buche direkt einen Termin online.' },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { from: 'user', text: input },
      { from: 'ai', text: 'Danke für deine Nachricht! Unser Team meldet sich bei dir. Du kannst uns auch direkt per WhatsApp erreichen: 0175 9601217' },
    ]);
    setInput('');
  };

  return (
    <section className="relative bg-background-900 py-12 md:py-14 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-primary-400/5 blur-[120px]" />
      <div className="absolute bottom-0 right-[20%] w-[300px] h-[150px] rounded-full bg-primary-400/3 blur-[100px]" />
      <div className="relative w-full px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-5 md:mb-6">
          <div>
            <span className="inline-block text-primary-400 text-[10px] tracking-[0.2em] uppercase font-semibold mb-1.5 px-2.5 py-0.5 rounded-full border border-primary-400/20">
              <i className="ri-sparkling-2-line mr-1" />
              KI-Assistent
            </span>
            <h2 className="text-white text-lg font-semibold tracking-tight">Frag uns einfach</h2>
          </div>
          <p className="text-foreground-700 text-[11px] leading-relaxed hidden md:block">
            Preise, Öffnungszeiten, Terminbuchung – direkt im Chat
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-background-300/30 bg-background-700/80">
          {/* Chat header */}
          <div className="flex items-center gap-3 px-4 py-2.5 border-b border-background-300/20 relative overflow-hidden">
            <div className="absolute bottom-0 left-4 right-4 h-px bg-primary-400/10" />
            <div className="relative flex-shrink-0">
              <div className="w-8 h-8 rounded-lg bg-primary-400/15 flex items-center justify-center border border-primary-400/20">
                <i className="ri-robot-2-line text-base text-primary-400" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-background-700 whatsapp-dot" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-semibold text-xs tracking-wider leading-none">63-Performance AI</h3>
              <p className="text-[10px] leading-none mt-1 text-foreground-700">Online · Preise, Termine & Leistungen</p>
            </div>
          </div>

          {/* Messages */}
          <div className="px-3 md:px-4 py-2.5 h-[220px] md:h-[260px] overflow-y-auto flex flex-col gap-2">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.from === 'ai' && (
                  <div className="w-7 h-7 flex-shrink-0 rounded-lg bg-primary-400/15 flex items-center justify-center mr-1.5">
                    <i className="ri-robot-2-line text-[10px] text-primary-400" />
                  </div>
                )}
                <div className={`max-w-[82%] rounded-2xl px-3 py-2 ${
                  msg.from === 'user'
                    ? 'rounded-br-sm bg-primary-400/20 border border-primary-400/20'
                    : 'rounded-bl-sm bg-background-600 border border-background-300/30'
                }`}>
                  <p className="text-xs leading-relaxed whitespace-pre-wrap text-foreground-200">
                    {msg.text}
                  </p>
                  {msg.from === 'ai' && i === 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2 pt-2">
                      {quickQuestions.map((q) => (
                        <button
                          key={q}
                          onClick={() => handleQuickQuestion(q)}
                          className="whitespace-nowrap text-[10px] px-2.5 py-1 rounded-full border border-primary-400/30 text-primary-400 hover:bg-primary-400/10 transition-all duration-200 cursor-pointer"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="px-3 md:px-4 py-2 relative">
            <div className="flex gap-2 items-center">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Schreib deine Frage ..."
                className="flex-1 rounded-full px-3.5 py-2 text-xs outline-none transition-all duration-300 bg-background-600 border border-background-300/30 text-white placeholder:text-foreground-700 focus:border-primary-400/50 font-sans"
              />
              <button
                type="submit"
                className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-primary-400 hover:bg-primary-300 transition-all duration-300 cursor-pointer"
              >
                <i className="ri-send-plane-fill text-white text-xs" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}