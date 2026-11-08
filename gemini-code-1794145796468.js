import React, { useState, useEffect } from 'react';
import { 
  Film, BookOpen, Compass, Search, Menu, X, ArrowRight, Download, 
  ExternalLink, Share2, Youtube, Instagram, Send, MessageSquare, 
  Layers, Lightbulb, Award, Bookmark, Play, CheckCircle
} from 'lucide-react';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  
  // Кадр зертханасының күйлері
  const [labFilter, setLabFilter] = useState('normal');
  const [showGrid, setShowGrid] = useState(true);

  // Практикалық тапсырма жауабы
  const [practiceAnswer, setPracticeAnswer] = useState('');
  const [practiceSubmitted, setPracticeSubmitted] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path) => {
    window.location.hash = path;
    setCurrentPath(path);
    setMobileMenuOpen(false);
  };

  // Суретті жүктеп алу функциясы
  const handleDownloadImage = (imgUrl, title) => {
    const link = document.createElement('a');
    link.href = imgUrl;
    link.download = `${title || 'kadr-artyndagi-magyna'}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const movies = [
    {
      id: 'truman',
      title: 'The Truman Show',
      kazTitle: 'Шоу Трумана',
      year: 1998,
      director: 'Питер Уир',
      rating: 9.3,
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000&auto=format&fit=crop',
      genre: 'Драма / Сатира',
      summary: 'Бүкіл өмірі шынайы уақытта телешоу ретінде көрсетілетін адам туралы философтық драма.',
      analysis: {
        coreIdea: 'Жалған әлемнен шынайы еркіндікке ұмтылу.',
        conflict: 'Индивидтің ерік-жігері мен жүйенің толық бақылауы арасындағы қақтығыс.',
        visuals: 'Күмбез тәрізді камералар, бақылау нүктелері және жасанды көк аспан символикасы.',
        sound: 'Моцарт музыкасының драмалық және эмоциялық тұрғыдан қайта өрлеуі.',
        questions: ['Труманның соңғы есіктен шығуы нені білдіреді?', 'Біздің де өмірімізде жасанды «күмбездер» бар ма?']
      }
    },
    {
      id: 'parasite',
      title: 'Parasite',
      kazTitle: 'Паразиттер',
      year: 2019,
      director: 'Пон Джун Хо',
      rating: 8.6,
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000&auto=format&fit=crop',
      genre: 'Триллер / Қара комедия',
      summary: 'Екі түрлі әлеуметтік таптағы отбасылардың өзара тоғысуы мен қатыгез шындық.',
      analysis: {
        coreIdea: 'Капитализм мен әлеуметтік теңсіздіктің кеңістік арқылы берілуі.',
        conflict: 'Байлар мен кедейлердің вертикальды қақтығысы (сатылар мен иіс метафорасы).',
        visuals: 'Жоғарыда орналасқан сәулетті үй мен төмендегі дымқыл жартылай төлелер.',
        sound: 'Классикалық скрипка мен тынышсыздық тудыратын басс ырғақтары.',
        questions: ['Фильмдегі басты паразит кім — кедейлер ме, әлде жүйе ме?', 'Иіс метафорасы әлеуметтік статусқа қалай әсер етеді?']
      }
    },
    {
      id: 'inception',
      title: 'Inception',
      kazTitle: 'Бастау',
      year: 2010,
      director: 'Кристофер Нолан',
      rating: 8.8,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop',
      genre: 'Ғылыми фантастика / Триллер',
      summary: 'Түс арқылы санаға идея егумен айналысатын кәсіби ұрылардың командасы.',
      analysis: {
        coreIdea: 'Сана мен шындықтың шекарасы, кінә сезімінің сәулеті.',
        conflict: 'Коббтың өткен өміріндегі өкініші мен мақсаты арасындағы ішкі арпалыс.',
        visuals: 'Қаланың айналуы, қабаттасқан түс әлемдері және тотем символы.',
        sound: 'Ханс Циммердің атышулы «Time» композициясы мен терең брасс дыбыстары.',
        questions: ['Соңында юла тоқтады ма, әлде Кобб әлі де түсте ме?', 'Идея адам санасында қалай өседі?']
      }
    },
    {
      id: 'godfather',
      title: 'The Godfather',
      kazTitle: 'Өкіл әке',
      year: 1972,
      director: 'Фрэнсис Форд Коппола',
      rating: 9.2,
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop',
      genre: 'Криминалдық драма',
      summary: 'Корлеоне мафиялық кланының билік үшін күресі және Майклдың моральдық құлдырауы.',
      analysis: {
        coreIdea: 'Отбасылық құндылықтар мен биліктің шірітуші күші.',
        conflict: 'Адамгершілік пен қылмыстық әлемнің заңдары арасындағы таңдау.',
        visuals: 'Қараңғы кабинеттер, жарық пен көлеңкенің контрасты (көздердің көрінбеуі).',
        sound: 'Нино Ротаның итальяндық мотивтегі қайғылы әрі салтанатты әуені.',
        questions: ['Майкл Корлеоне қашан түбегейлі өзгерді?', 'Билік адамды қалай өзгертеді?']
      }
    },
    {
      id: 'memento',
      title: 'Memento',
      kazTitle: 'Есте сақта',
      year: 2000,
      director: 'Кристофер Нолан',
      rating: 8.4,
      image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1000&auto=format&fit=crop',
      genre: 'Психологиялық детектив',
      summary: 'Қысқа мерзімді жадынан айырылған әйелінің өлтірушісін іздеген кейіпкер туралы.',
      analysis: {
        coreIdea: 'Шындықтың субъективтілігі және адамның өз жадын алдауы.',
        conflict: 'Леонардтың шындықты білуге деген ұмтылысы мен өзіне жасаған өтіріктері.',
        visuals: 'Кері бағытта дамып отыратын хронологиялық құрылым.',
        sound: 'Тынышссыз және қайталанатын минималистік әуендер.',
        questions: ['Леонард өзінің жадын саналы түрде басқара ма?', 'Өткенді ұмыту адамды еркін ете ме?']
      }
    }
  ];

  const glossaryTerms = [
    { term: 'Мізансцена', def: 'Актерлер мен заттардың кадр ішінде орналасу тәртібі.', example: '«Өкіл әке» фильміндегі басты кейіпкердің қараңғы бұрышта отырып басқаруы.' },
    { term: 'Макгафин (MacGuffin)', def: 'Сюжетті алға жылжытатын, бірақ өзіндік маңызы аз зат немесе мақсат.', example: '«Палл Пьюджен» немесе барлық кейіпкер іздейтін құпия чемодан.' },
    { term: 'Монтаж (Kuleshov effect)', def: 'Екі кадрды қатар қою арқылы жаңа мағына тудыру тәсілі.', example: 'Кейіпкердің жүзі + тамақ суреті = аштық сезімі.' },
    { term: 'Арка (Character Arc)', def: 'Кейіпкердің фильм басынан соңына дейінгі ішкі рухани эволюциясы.', example: '«Дьявол носить Prada» фильміндегі Эндидің өзгерісі.' },
    { term: 'Plot Twist', def: 'Көрермен күтпеген жерден сюжеттің мүлде басқа арнаға бұрылуы.', example: '«Шестой чувство» немесе «Fight Club» фильмдеріндегі шешімдер.' }
  ];

  const filteredGlossary = glossaryTerms.filter(item => 
    item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.def.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0f1115] text-stone-100 font-sans selection:bg-amber-500 selection:text-black">
      
      {/* Навигация панелі */}
      <header className="sticky top-0 z-50 bg-[#0f1115]/90 backdrop-blur-md border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('#/')}>
            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-black font-black text-xl shadow-lg shadow-amber-500/20">
              ҚА
            </div>
            <div>
              <span className="font-bold text-lg tracking-wide block leading-tight text-white">Кадр артындағы мағына</span>
              <span className="text-xs text-amber-500 font-medium tracking-wider">Кино. Драматургия. Режиссура.</span>
            </div>
          </div>

          {/* Десктоп меню */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-300">
            <button onClick={() => navigate('#/')} className={`hover:text-amber-400 transition ${currentPath === '#/' ? 'text-amber-500 font-bold' : ''}`}>Басты бет</button>
            <button onClick={() => navigate('#/directing')} className={`hover:text-amber-400 transition ${currentPath === '#/directing' ? 'text-amber-500 font-bold' : ''}`}>Режиссура</button>
            <button onClick={() => navigate('#/dramaturgy')} className={`hover:text-amber-400 transition ${currentPath === '#/dramaturgy' ? 'text-amber-500 font-bold' : ''}`}>Драматургия</button>
            <button onClick={() => navigate('#/cinema-analysis')} className={`hover:text-amber-400 transition ${currentPath === '#/cinema-analysis' ? 'text-amber-500 font-bold' : ''}`}>Киноталдау</button>
            <button onClick={() => navigate('#/podcast-analysis')} className={`hover:text-amber-400 transition ${currentPath === '#/podcast-analysis' ? 'text-amber-500 font-bold' : ''}`}>Подкаст</button>
            <button onClick={() => navigate('#/character-psychology')} className={`hover:text-amber-400 transition ${currentPath === '#/character-psychology' ? 'text-amber-500 font-bold' : ''}`}>Психология</button>
            <button onClick={() => navigate('#/cinema-glossary')} className={`hover:text-amber-400 transition ${currentPath === '#/cinema-glossary' ? 'text-amber-500 font-bold' : ''}`}>Сөздік</button>
            <button onClick={() => navigate('#/frame-lab')} className={`hover:text-amber-400 transition ${currentPath === '#/frame-lab' ? 'text-amber-500 font-bold' : ''}`}>Зертхана</button>
            <button onClick={() => navigate('#/comparative-analysis')} className={`hover:text-amber-400 transition ${currentPath === '#/comparative-analysis' ? 'text-amber-500 font-bold' : ''}`}>Салыстыру</button>
            <button onClick={() => navigate('#/practice')} className={`hover:text-amber-400 transition ${currentPath === '#/practice' ? 'text-amber-500 font-bold' : ''}`}>Практика</button>
            <button onClick={() => navigate('#/research')} className={`hover:text-amber-400 transition ${currentPath === '#/research' ? 'text-amber-500 font-bold' : ''}`}>Зерттеулер</button>
            <button onClick={() => navigate('#/social-media')} className={`hover:text-amber-400 transition text-amber-400 flex items-center gap-1 ${currentPath === '#/social-media' ? 'font-bold' : ''}`}>
              <Share2 size={16}/> Желілер
            </button>
          </nav>

          {/* Мобильді мәзір батырмасы */}
          <button className="lg:hidden text-stone-300 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Мобильді панель */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#161920] border-b border-stone-800 px-4 py-6 space-y-3">
            <button onClick={() => navigate('#/')} className="block w-full text-left py-2 text-stone-300 hover:text-amber-400 font-medium">Басты бет</button>
            <button onClick={() => navigate('#/directing')} className="block w-full text-left py-2 text-stone-300 hover:text-amber-400 font-medium">Режиссура және визуалды тіл</button>
            <button onClick={() => navigate('#/dramaturgy')} className="block w-full text-left py-2 text-stone-300 hover:text-amber-400 font-medium">Драматургия және нарратив</button>
            <button onClick={() => navigate('#/cinema-analysis')} className="block w-full text-left py-2 text-stone-300 hover:text-amber-400 font-medium">Киноталдау</button>
            <button onClick={() => navigate('#/podcast-analysis')} className="block w-full text-left py-2 text-stone-300 hover:text-amber-400 font-medium">Подкаст және медианарратив</button>
            <button onClick={() => navigate('#/character-psychology')} className="block w-full text-left py-2 text-stone-300 hover:text-amber-400 font-medium">Кейіпкер психологиясы</button>
            <button onClick={() => navigate('#/cinema-glossary')} className="block w-full text-left py-2 text-stone-300 hover:text-amber-400 font-medium">Киносөздік</button>
            <button onClick={() => navigate('#/frame-lab')} className="block w-full text-left py-2 text-stone-300 hover:text-amber-400 font-medium">Кадр зертханасы</button>
            <button onClick={() => navigate('#/comparative-analysis')} className="block w-full text-left py-2 text-stone-300 hover:text-amber-400 font-medium">Салыстырмалы талдау</button>
            <button onClick={() => navigate('#/practice')} className="block w-full text-left py-2 text-stone-300 hover:text-amber-400 font-medium">Практикалық тапсырмалар</button>
            <button onClick={() => navigate('#/research')} className="block w-full text-left py-2 text-stone-300 hover:text-amber-400 font-medium">Зерттеулер</button>
            <button onClick={() => navigate('#/social-media')} className="block w-full text-left py-2 text-amber-400 font-bold">Әлеуметтік желілер және Ресурстар</button>
          </div>
        )}
      </header>

      {/* Негізгі Контент (Маршрутизатор) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* 1. БАСТЫ БЕТ (#/) */}
        {currentPath === '#/' && (
          <div className="space-y-16">
            {/* Hero бөлім */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 to-[#1a1f2c] border border-stone-800 p-8 sm:p-14 shadow-2xl">
              <div className="absolute right-0 top-0 w-1/2 h-full opacity-30 hidden lg:block pointer-events-none">
                <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000&auto=format&fit=crop" alt="Hero background" className="w-full h-full object-cover"/>
              </div>
              <div className="relative z-10 max-w-2xl space-y-6">
                <span className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full text-xs font-semibold tracking-wider uppercase">
                  Кино. Драматургия. Режиссура. Нарратив.
                </span>
                <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
                  Кадр артындағы <span className="text-amber-500">мағына</span>
                </h1>
                <p className="text-stone-300 text-lg leading-relaxed">
                  Біз өнерді тек тамашалап қана қоймаймыз. Біз оның қалай жасалғанын, көрерменге қалай әсер ететінін және әр кадрдың астында қандай терең мағына жатқанын зерттейміз.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button onClick={() => navigate('#/directing')} className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl transition flex items-center gap-2 shadow-lg shadow-amber-500/20">
                    Зерттеуді бастау <ArrowRight size={18}/>
                  </button>
                  <button onClick={() => navigate('#/social-media')} className="px-6 py-3.5 bg-stone-800 hover:bg-stone-700 text-white font-bold rounded-xl transition border border-stone-700 flex items-center gap-2">
                    <Share2 size={18} className="text-amber-500"/> Әлеуметтік желілер
                  </button>
                </div>
              </div>
            </div>

            {/* Карточкалар бөлімі */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Режиссура және визуалды тіл', desc: 'Симметрия, жарық, түс пен камера қозғалысының сыры.', path: '#/directing', icon: Film },
                { title: 'Драматургия және нарратив', desc: 'Конфликт, үш актілі құрылым және сюжеттік бұрылыстар.', path: '#/dramaturgy', icon: BookOpen },
                { title: 'Киноталдау', desc: 'Әлемдік шедеврлерді терең академиялық сараптау.', path: '#/cinema-analysis', icon: Compass },
                { title: 'Подкаст және медианарратив', desc: 'Аудио мен дауыс ырғағының драматургияға әсері.', path: '#/podcast-analysis', icon: MessageSquare },
                { title: 'Кейіпкер психологиясы', desc: 'Мотивация, ішкі конфликт және кейіпкер аркасы.', path: '#/character-psychology', icon: Lightbulb },
                { title: 'Әлеуметтік желілер & Ресурстар', desc: 'YouTube арналар, Telegram қауымдастықтар және зерттеу сілтемелері.', path: '#/social-media', icon: Share2 }
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} onClick={() => navigate(item.path)} className="group bg-[#161920] border border-stone-800 hover:border-amber-500/50 p-6 rounded-2xl cursor-pointer transition duration-300 hover:shadow-xl hover:shadow-amber-500/5 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-4 group-hover:scale-110 transition">
                        <IconComponent size={24}/>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition">{item.title}</h3>
                      <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="mt-6 flex items-center text-amber-400 text-sm font-semibold gap-1 group-hover:gap-2 transition-all">
                      Толығырақ <ArrowRight size={16}/>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Танымал фильмдер */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black text-white flex items-center gap-3">
                  <span className="w-2 h-8 bg-amber-500 rounded-full inline-block"></span>
                  Танымал фильмдер каталогы
                </h2>
                <button onClick={() => navigate('#/cinema-analysis')} className="text-sm font-semibold text-amber-400 hover:underline">Барлығын көру →</button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {movies.map((mov) => (
                  <div key={mov.id} onClick={() => { setSelectedMovie(mov); navigate('#/cinema-analysis'); }} className="group bg-[#161920] border border-stone-800 rounded-2xl overflow-hidden cursor-pointer hover:border-amber-500/50 transition">
                    <div className="relative h-64 overflow-hidden">
                      <img src={mov.image} alt={mov.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500"/>
                      <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold text-amber-400 flex items-center gap-1">
                        ★ {mov.rating}
                      </div>
                      <button onClick={(e) => { e.stopPropagation(); handleDownloadImage(mov.image, mov.title); }} className="absolute bottom-3 right-3 p-2 bg-black/70 hover:bg-amber-500 hover:text-black text-white rounded-lg transition" title="Суретті жүктеу">
                        <Download size={16}/>
                      </button>
                    </div>
                    <div className="p-4">
                      <span className="text-xs text-amber-500 font-semibold">{mov.genre}</span>
                      <h4 className="font-bold text-white text-base mt-1 group-hover:text-amber-400 transition">{mov.kazTitle}</h4>
                      <p className="text-xs text-stone-400 mt-1">{mov.director} ({mov.year})</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 2. РЕЖИССУРА ЖӘНЕ ВИЗУАЛДЫ ТІЛ (#/directing) */}
        {currentPath === '#/directing' && (
          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="border-b border-stone-800 pb-6">
              <span className="text-amber-500 text-xs font-bold uppercase tracking-wider">Визуалды эстетика</span>
              <h1 className="text-3xl sm:text-4xl font-black text-white mt-2">Режиссура және визуалды тіл</h1>
              <p className="text-stone-300 mt-2">Кадр композициясы, жарық пен көлеңке және камера қозғалысының философиясы.</p>
            </div>

            <div className="space-y-8">
              {[
                { title: 'Симметрия және композиция', film: 'The Grand Budapest Hotel (Уэс Андерсон)', q1: 'Бұл шешім не үшін қолданылған?', a1: 'Кадрдың мінсіз симметриясы көрерменге театртанулық шарттылық пен ертегілік атмосфераны сездіреді.', q2: 'Көрерменге қалай әсер етеді?', a2: 'Ішкі тыныштық, үйлесімділік және эстетикалық ләззат сыйлайды.' },
                { title: 'Түстің драматургиялық қызметі', film: 'Schindler’s List (Стивен Спилберг)', q1: 'Бұл шешім не үшін қолданылған?', a1: 'Ақ-қара фон арасындағы жалғыз қызыл пальто — үміт пен жансыздық қарама-қайшылығын көрсету үшін.', q2: 'Көрерменге қалай әсер етеді?', a2: 'Эмоционалды шок тудырып, трагедияның ауқымын тереңірек сездіреді.' },
                { title: 'Камера қозғалысы және үздіксіздік әсері', film: '1917 (Сэм Мендес)', q1: 'Бұл шешім не үшін қолданылған?', a1: 'Бір ғана үзіліссіз кадр (one-shot) арқылы көрерменді соғыс алаңына толықтай ендіру.', q2: 'Көрерменге қалай әсер етеді?', a2: 'Шынайы уақыттағы қатысу сезімі мен үнемі үрейлі күйде болуды тудырады.' },
                { title: 'Жарық пен көлеңке (Кьяроскуро)', film: 'The Godfather (Фрэнсис Форд Коппола)', q1: 'Бұл шешім не үшін қолданылған?', a1: 'Кейіпкерлердің екіұшты моралін, жасырын ойлары мен қылмыстық әлемінің сырын көрсету.', q2: 'Көрерменге қалай әсер етеді?', a2: 'Жұмбақ, қауіпті және ауыр психологиялық атмосфера қалыптастырады.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#161920] border border-stone-800 p-6 rounded-2xl space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <span className="text-xs px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20">{item.film}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="bg-stone-900/60 p-4 rounded-xl border border-stone-800/60">
                      <h4 className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-1">Бұл шешім не үшін қолданылған?</h4>
                      <p className="text-stone-300 text-sm">{item.a1}</p>
                    </div>
                    <div className="bg-stone-900/60 p-4 rounded-xl border border-stone-800/60">
                      <h4 className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-1">Көрерменге қалай әсер етеді?</h4>
                      <p className="text-stone-300 text-sm">{item.a2}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-500/10 border border-amber-500/30 p-6 rounded-2xl">
              <h3 className="font-bold text-amber-400 text-lg mb-2">Өзіндік талдау сұрағы:</h3>
              <p className="text-stone-300 text-sm">Сіздің сүйікті фильміңізде қандай түс гаммасы басым және ол кейіпкердің ішкі күйін қалай ашады?</p>
            </div>
          </div>
        )}

        {/* 3. ДРАМАТУРГИЯ ЖӘНЕ НАРРАТИВ (#/dramaturgy) */}
        {currentPath === '#/dramaturgy' && (
          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="border-b border-stone-800 pb-6">
              <span className="text-amber-500 text-xs font-bold uppercase tracking-wider">Оқиға құрылымы</span>
              <h1 className="text-3xl sm:text-4xl font-black text-white mt-2">Драматургия және нарратив</h1>
              <p className="text-stone-300 mt-2">Конфликт, үш актілі құрылым, кейіпкер аркасы және сюжеттік шиеленістер.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Экспозиция және Конфликт', desc: 'Бастапқы жағдай мен кейіпкердің мақсатына жеткізбейтін кедергілер тізбегі.', example: 'The Truman Show — еркіндік пен бақылау конфликті.' },
                { title: 'Шарықтау шегі (Climax)', desc: 'Оқиғаның ең жоғары шиеленіскен, шешуші сәті.', example: 'Parasite — үйдің төменгі қабатындағы қанды қақтығыс.' },
                { title: 'Уақыт пен Кеңістік (Non-linear)', desc: 'Оқиға реттілігін әдейі бұзу арқылы сананы шатастыру және қызығушылық ояту.', example: 'Memento — оқиғаның кері ретпен берілуі.' },
                { title: 'Кейіпкердің өзгеруі (Character Arc)', desc: 'Ішкі мотивация мен сыртқы әрекеттің қайшылығынан туындайтын эволюция.', example: 'The Devil Wears Prada — Эндидің құндылықтарының өзгеруі.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#161920] border border-stone-800 p-6 rounded-2xl space-y-3">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-stone-300 text-sm leading-relaxed">{item.desc}</p>
                  <div className="pt-2 text-xs font-semibold text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20 inline-block">
                    Мысал: {item.example}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#161920] border border-stone-800 p-6 rounded-2xl space-y-4">
              <h3 className="text-xl font-bold text-white">Үш актілі құрылым үлгісі</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="bg-stone-900 p-4 rounded-xl border border-stone-800">
                  <span className="text-amber-500 font-bold text-sm">I Акт</span>
                  <h4 className="font-bold text-white mt-1">Экспозиция</h4>
                  <p className="text-xs text-stone-400 mt-2">Кейіпкермен танысу және басты инцидент.</p>
                </div>
                <div className="bg-stone-900 p-4 rounded-xl border border-stone-800">
                  <span className="text-amber-500 font-bold text-sm">II Акт</span>
                  <h4 className="font-bold text-white mt-1">Шиеленіс</h4>
                  <p className="text-xs text-stone-400 mt-2">Кедергілер, күрес және шарықтау алдындағы дағдарыс.</p>
                </div>
                <div className="bg-stone-900 p-4 rounded-xl border border-stone-800">
                  <span className="text-amber-500 font-bold text-sm">III Акт</span>
                  <h4 className="font-bold text-white mt-1">Шешім (Resolution)</h4>
                  <p className="text-xs text-stone-400 mt-2">Кульминация және жаңа тепе-теңдікке келу.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. КИНОТАЛДАУ (#/cinema-analysis) */}
        {currentPath === '#/cinema-analysis' && (
          <div className="space-y-12">
            <div className="border-b border-stone-800 pb-6">
              <span className="text-amber-500 text-xs font-bold uppercase tracking-wider">Академиялық сараптама</span>
              <h1 className="text-3xl sm:text-4xl font-black text-white mt-2">Киноталдау базасы</h1>
              <p className="text-stone-300 mt-2">Әлемдік шедевр фильмдерді режиссерлік, визуалды және драматургиялық тұрғыдан терең талдау.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {movies.map((mov) => (
                <div key={mov.id} onClick={() => setSelectedMovie(mov)} className="bg-[#161920] border border-stone-800 hover:border-amber-500/50 rounded-2xl overflow-hidden cursor-pointer transition flex flex-col justify-between">
                  <div>
                    <div className="relative h-56 overflow-hidden">
                      <img src={mov.image} alt={mov.title} className="w-full h-full object-cover"/>
                      <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold text-amber-400">
                        ★ {mov.rating}
                      </div>
                    </div>
                    <div className="p-6 space-y-3">
                      <span className="text-xs font-semibold text-amber-500">{mov.genre}</span>
                      <h3 className="text-xl font-bold text-white">{mov.kazTitle} ({mov.title})</h3>
                      <p className="text-stone-400 text-sm line-clamp-2">{mov.summary}</p>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <button className="w-full py-2.5 bg-amber-500/10 hover:bg-amber-500 hover:text-black text-amber-400 font-bold rounded-xl transition border border-amber-500/30 text-sm">
                      Толық талдауды оқу →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Таңдалған фильм модальді терезесі */}
            {selectedMovie && (
              <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-[#161920] border border-stone-800 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 space-y-6 relative">
                  <button onClick={() => setSelectedMovie(null)} className="absolute top-6 right-6 p-2 bg-stone-800 hover:bg-stone-700 text-white rounded-full">
                    <X size={20}/>
                  </button>

                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <img src={selectedMovie.image} alt={selectedMovie.title} className="w-full sm:w-48 h-64 object-cover rounded-2xl"/>
                    <div className="space-y-3">
                      <span className="text-xs font-bold text-amber-500 px-3 py-1 bg-amber-500/10 rounded-full border border-amber-500/20">{selectedMovie.genre}</span>
                      <h2 className="text-2xl sm:text-3xl font-black text-white">{selectedMovie.kazTitle} <span className="text-stone-400 text-lg">({selectedMovie.year})</span></h2>
                      <p className="text-stone-300 text-sm">Режиссер: <strong className="text-white">{selectedMovie.director}</strong></p>
                      <p className="text-stone-400 text-sm leading-relaxed">{selectedMovie.summary}</p>
                    </div>
                  </div>

                  <div className="border-t border-stone-800 pt-6 space-y-4">
                    <h3 className="text-lg font-bold text-amber-400">Академиялық талдау құрылымы:</h3>
                    <div className="space-y-3 text-sm">
                      <div className="bg-stone-900 p-4 rounded-xl border border-stone-800">
                        <strong className="text-white block mb-1">Негізгі идея:</strong>
                        <span className="text-stone-300">{selectedMovie.analysis.coreIdea}</span>
                      </div>
                      <div className="bg-stone-900 p-4 rounded-xl border border-stone-800">
                        <strong className="text-white block mb-1">Конфликт:</strong>
                        <span className="text-stone-300">{selectedMovie.analysis.conflict}</span>
                      </div>
                      <div className="bg-stone-900 p-4 rounded-xl border border-stone-800">
                        <strong className="text-white block mb-1">Визуалды шешімдер:</strong>
                        <span className="text-stone-300">{selectedMovie.analysis.visuals}</span>
                      </div>
                      <div className="bg-stone-900 p-4 rounded-xl border border-stone-800">
                        <strong className="text-white block mb-1">Дыбыс пен музыка:</strong>
                        <span className="text-stone-300">{selectedMovie.analysis.sound}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-stone-800 pt-6">
                    <h4 className="font-bold text-white mb-3">Талқылауға арналған сұрақтар:</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm text-stone-300">
                      {selectedMovie.analysis.questions.map((q, i) => (
                        <li key={i}>{q}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-end gap-3 pt-4">
                    <button onClick={() => handleDownloadImage(selectedMovie.image, selectedMovie.title)} className="px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-white font-bold rounded-xl text-sm flex items-center gap-2">
                      <Download size={16}/> Постерді жүктеу
                    </button>
                    <button onClick={() => setSelectedMovie(null)} className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl text-sm">
                      Жабу
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 5. ПОДКАСТ ЖӘНЕ МЕДИАНАРРАТИВ (#/podcast-analysis) */}
        {currentPath === '#/podcast-analysis' && (
          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="border-b border-stone-800 pb-6">
              <span className="text-amber-500 text-xs font-bold uppercase tracking-wider">Аудио нарратив</span>
              <h1 className="text-3xl sm:text-4xl font-black text-white mt-2">Подкаст және медианарратив</h1>
              <p className="text-stone-300 mt-2">Подкасттағы әңгіме құрылымы, жүргізуші рөлі, дауыс ырғағы мен аудитория байланысы.</p>
            </div>

            <div className="bg-[#161920] border border-stone-800 p-8 rounded-3xl space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs bg-amber-500/10 text-amber-400 px-3 py-1 rounded-full border border-amber-500/20 font-semibold">Талдау үлгісі</span>
                  <h2 className="text-2xl font-black text-white mt-2">«Замандас» подкастының кейсі</h2>
                </div>
                <Youtube className="text-red-500" size={32}/>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="bg-stone-900 p-4 rounded-xl border border-stone-800">
                  <span className="text-stone-400 block text-xs">Тақырып:</span>
                  <strong className="text-white">Заманауи кино және жастар шығармашылығы</strong>
                </div>
                <div className="bg-stone-900 p-4 rounded-xl border border-stone-800">
                  <span className="text-stone-400 block text-xs">Жүргізуші тәсілі:</span>
                  <strong className="text-white">Ашық сұрақтар қою және эмоциялық паузалар</strong>
                </div>
              </div>

              <div className="space-y-3 text-stone-300 text-sm leading-relaxed">
                <h4 className="font-bold text-white">Талдау қорытындысы:</h4>
                <p>Подкаст форматтарындағы басты бағдар — қонақтың шынайы позициясын ашу және көрерменмен сенімді диалог орнату. Жүргізушінің дауыс ырғағы мен сұрақтардың логикалық реті тыңдарманды соңына дейін ұстап тұрады.</p>
              </div>
            </div>
          </div>
        )}

        {/* 6. КЕЙІПКЕР ПСИХОЛОГИЯСЫ (#/character-psychology) */}
        {currentPath === '#/character-psychology' && (
          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="border-b border-stone-800 pb-6">
              <span className="text-amber-500 text-xs font-bold uppercase tracking-wider">Ішкі әлем</span>
              <h1 className="text-3xl sm:text-4xl font-black text-white mt-2">Кейіпкер психологиясы</h1>
              <p className="text-stone-300 mt-2">Мақсат, қорқыныш, ішкі конфликт және сыртқы мінез-құлық арасындағы байланыс.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { name: 'Артур Флек (Joker)', goal: 'Қоғамға өзін көрінетіндей ету, махаббат табу', fear: 'Эмпатиясыз жүйенің құрбаны болу', conflict: 'Ішкі жалғыздық пен сыртқы агрессивті күлкі' },
                { name: 'Нина Сайерс (Black Swan)', goal: 'Мінсіздікке қол жеткізу (Ақ аққу болу)', fear: 'Кемелсіз болу және бақылауды жоғалту', conflict: 'Перфекционизм мен өз ішіндегі қараңғылықтың соқтығысуы' },
                { name: 'Миранда Пристли (The Devil Wears Prada)', goal: 'Билік пен сән индустриясындағы абсолютті үстемдік', fear: 'Әлсіз болып көріну және билікті жоғалту', conflict: 'Кәсіби қатыгездік пен жеке өмірдің жалғыздығы' }
              ].map((char, idx) => (
                <div key={idx} className="bg-[#161920] border border-stone-800 p-6 rounded-2xl space-y-4">
                  <h3 className="text-xl font-bold text-white">{char.name}</h3>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="bg-stone-900 p-3 rounded-xl border border-stone-800">
                      <span className="text-amber-500 font-bold">Мақсаты:</span> <span className="text-stone-300">{char.goal}</span>
                    </div>
                    <div className="bg-stone-900 p-3 rounded-xl border border-stone-800">
                      <span className="text-amber-500 font-bold">Қорқынышы:</span> <span className="text-stone-300">{char.fear}</span>
                    </div>
                    <div className="bg-stone-900 p-3 rounded-xl border border-stone-800">
                      <span className="text-amber-500 font-bold">Ішкі конфликт:</span> <span className="text-stone-300">{char.conflict}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 7. КИНОСӨЗДІК (#/cinema-glossary) */}
        {currentPath === '#/cinema-glossary' && (
          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="border-b border-stone-800 pb-6">
              <span className="text-amber-500 text-xs font-bold uppercase tracking-wider">Терминология</span>
              <h1 className="text-3xl sm:text-4xl font-black text-white mt-2">Киносөздік</h1>
              <p className="text-stone-300 mt-2">Кино өнерінің негізгі терминдері мен олардың қазақша түсіндірмелері.</p>
            </div>

            <div className="relative">
              <Search className="absolute left-4 top-3.5 text-stone-400" size={20}/>
              <input 
                type="text" 
                placeholder="Терминді іздеу (мысалы: мізансцена, монтаж)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#161920] border border-stone-800 focus:border-amber-500 text-white pl-12 pr-4 py-3 rounded-2xl outline-none transition"
              />
            </div>

            <div className="space-y-4">
              {filteredGlossary.length > 0 ? (
                filteredGlossary.map((item, idx) => (
                  <div key={idx} className="bg-[#161920] border border-stone-800 p-6 rounded-2xl space-y-2">
                    <h3 className="text-xl font-bold text-amber-400">{item.term}</h3>
                    <p className="text-stone-200 text-sm">{item.def}</p>
                    <div className="pt-2 text-xs text-stone-400 bg-stone-900 p-3 rounded-xl border border-stone-800">
                      <strong className="text-white">Мысал:</strong> {item.example}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-stone-400 py-10">Ешқандай термин табылмады.</p>
              )}
            </div>
          </div>
        )}

        {/* 8. КАДР ЗЕРТХАНАСЫ (#/frame-lab) */}
        {currentPath === '#/frame-lab' && (
          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="border-b border-stone-800 pb-6">
              <span className="text-amber-500 text-xs font-bold uppercase tracking-wider">Интерактивті симулятор</span>
              <h1 className="text-3xl sm:text-4xl font-black text-white mt-2">Кадр зертханасы</h1>
              <p className="text-stone-300 mt-2">Кадр композициясы, түс пен жарықты талдау және визуалды симуляция.</p>
            </div>

            <div className="bg-[#161920] border border-stone-800 p-6 sm:p-8 rounded-3xl space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex gap-2">
                  <button onClick={() => setLabFilter('normal')} className={`px-4 py-2 rounded-xl text-xs font-bold transition ${labFilter === 'normal' ? 'bg-amber-500 text-black' : 'bg-stone-800 text-stone-300'}`}>Нормальды</button>
                  <button onClick={() => setLabFilter('grayscale')} className={`px-4 py-2 rounded-xl text-xs font-bold transition ${labFilter === 'grayscale' ? 'bg-amber-500 text-black' : 'bg-stone-800 text-stone-300'}`}>Ақ-қара</button>
                  <button onClick={() => setLabFilter('sepia')} className={`px-4 py-2 rounded-xl text-xs font-bold transition ${labFilter === 'sepia' ? 'bg-amber-500 text-black' : 'bg-stone-800 text-stone-300'}`}>Сепия</button>
                  <button onClick={() => setLabFilter('contrast')} className={`px-4 py-2 rounded-xl text-xs font-bold transition ${labFilter === 'contrast' ? 'bg-amber-500 text-black' : 'bg-stone-800 text-stone-300'}`}>Контраст</button>
                </div>
                <button onClick={() => setShowGrid(!showGrid)} className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-white rounded-xl text-xs font-bold transition">
                  {showGrid ? 'Торды жасыру' : 'Үштен бір торын қосу'}
                </button>
              </div>

              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-stone-800">
                <img 
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop" 
                  alt="Lab frame" 
                  className={`w-full h-full object-cover transition duration-300 
                    ${labFilter === 'grayscale' ? 'grayscale' : ''}
                    ${labFilter === 'sepia' ? 'sepia' : ''}
                    ${labFilter === 'contrast' ? 'contrast-150 brightness-110' : ''}
                  `}
                />
                
                {/* Rule of Thirds Grid */}
                {showGrid && (
                  <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none">
                    <div className="border-r border-b border-white/30"></div>
                    <div className="border-r border-b border-white/30"></div>
                    <div className="border-b border-white/30"></div>
                    <div className="border-r border-b border-white/30"></div>
                    <div className="border-r border-b border-white/30"></div>
                    <div className="border-b border-white/30"></div>
                    <div className="border-r border-white/30"></div>
                    <div className="border-r border-white/30"></div>
                    <div></div>
                  </div>
                )}
                
                <button onClick={() => handleDownloadImage('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop', 'kadr-zertkhanasy')} className="absolute bottom-4 right-4 p-3 bg-black/80 hover:bg-amber-500 hover:text-black text-white rounded-xl transition flex items-center gap-2 text-xs font-bold">
                  <Download size={16}/> Кадрды сақтау
                </button>
              </div>
              <p className="text-xs text-stone-400">«Үштен бір» ережесі (Rule of Thirds) композицияның үйлесімділігін сақтау үшін қолданылады.</p>
            </div>
          </div>
        )}

        {/* 9. САЛЫСТЫРМАЛЫ ТАЛДАУ (#/comparative-analysis) */}
        {currentPath === '#/comparative-analysis' && (
          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="border-b border-stone-800 pb-6">
              <span className="text-amber-500 text-xs font-bold uppercase tracking-wider">Параллель сараптама</span>
              <h1 className="text-3xl sm:text-4xl font-black text-white mt-2">Салыстырмалы талдау</h1>
              <p className="text-stone-300 mt-2">Екі фильмді визуалды тілі, конфлікті және финалы бойынша қатар салыстыру.</p>
            </div>

            <div className="bg-[#161920] border border-stone-800 rounded-3xl overflow-hidden">
              <div className="grid grid-cols-3 bg-stone-900 p-4 border-b border-stone-800 text-xs sm:text-sm font-bold text-stone-300 text-center">
                <div>Өлшем</div>
                <div className="text-amber-500">The Truman Show</div>
                <div className="text-amber-500">Inception</div>
              </div>
              {[
                { label: 'Басты конфликт', col1: 'Индивид пен бақылау жүйесі', col2: 'Сана мен өткен өмірдің өкініші' },
                { label: 'Жанр', col1: 'Сатирик драма / Сатирик', col2: 'Ғылыми фантастикалық триллер' },
                { label: 'Визуалды тіл', col1: 'Күмбезді панорамалар мен телекамера ракурстары', col2: 'Геометриялық өзгерістер мен қаланың қайырылуы' },
                { label: 'Финал мағынасы', col1: 'Ашық финал: Труманның өз таңдауы', col2: 'Белгісіздік: Юла тоқтады ма, жоқ па?' }
              ].map((row, idx) => (
                <div key={idx} className="grid grid-cols-3 p-4 border-b border-stone-800/60 text-xs sm:text-sm items-center text-center">
                  <div className="font-bold text-stone-300 text-left">{row.label}</div>
                  <div className="text-stone-300 px-2">{row.col1}</div>
                  <div className="text-stone-300 px-2">{row.col2}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 10. ПРАКТИКАЛЫҚ ТАПСЫРМАЛАР (#/practice) */}
        {currentPath === '#/practice' && (
          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="border-b border-stone-800 pb-6">
              <span className="text-amber-500 text-xs font-bold uppercase tracking-wider">Интерактивті лагерь</span>
              <h1 className="text-3xl sm:text-4xl font-black text-white mt-2">Практикалық тапсырмалар</h1>
              <p className="text-stone-300 mt-2">Сценарий эскизін жазу, кадр талдау және альтернативті финал ойлап табу тапсырмалары.</p>
            </div>

            <div className="bg-[#161920] border border-stone-800 p-6 sm:p-8 rounded-3xl space-y-6">
              <h3 className="text-xl font-bold text-white">Тапсырма: Қысқаша сценарий немесе альтернативті финал жазу</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Өзіңіз білетін фильмге (мысалы, Inception немесе Truman Show) өз нұсқаңыз бойынша альтернативті финал немесе шағын шарықтау сәтін жазып көріңіз.
              </p>

              <textarea 
                rows="5"
                placeholder="Сценарий эскизін немесе талдауыңызды мұнда жазыңыз..."
                value={practiceAnswer}
                onChange={(e) => setPracticeAnswer(e.target.value)}
                className="w-full bg-stone-900 border border-stone-800 focus:border-amber-500 text-white p-4 rounded-2xl outline-none transition text-sm"
              ></textarea>

              <div className="flex justify-between items-center">
                <span className="text-xs text-stone-400">Бағалау критерийі: Логика, драмалық шиеленіс, авторлық көзқарас.</span>
                <button onClick={() => setPracticeSubmitted(true)} className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl transition text-sm">
                  Жіберу / Тексеру
                </button>
              </div>

              {practiceSubmitted && (
                <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-2xl flex items-center gap-3 text-amber-400 text-sm">
                  <CheckCircle size={20}/> Тапсырмаңыз сәтті қабылданды! Сараптамалық пікір жақын арада қосылады.
                </div>
              )}
            </div>
          </div>
        )}

        {/* 11. ЗЕРТТЕУЛЕР (#/research) */}
        {currentPath === '#/research' && (
          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="border-b border-stone-800 pb-6">
              <span className="text-amber-500 text-xs font-bold uppercase tracking-wider">Ғылыми мақалалар</span>
              <h1 className="text-3xl sm:text-4xl font-black text-white mt-2">Зерттеулер</h1>
              <p className="text-stone-300 mt-2">Кино тарихы, визуализм мен заманауи медианарратив бойынша теориялық еңбектер.</p>
            </div>

            <div className="space-y-6">
              {[
                { title: 'Қазіргі кинодағы визуалды кодтар және олардың көрерменге әсері', date: 'Сәуір, 2026', author: 'Кадр артындағы мағына редакторы' },
                { title: 'Үш актілі драматургияның postmodern дәуіріндегі трансформациясы', date: 'Мамыр, 2026', author: 'Академиялық топ' },
                { title: 'Кейіпкер психологиясы және ішкі конфликтілердің кинематографиялық көрінісі', date: 'Маусым, 2026', author: 'Медиа зертханасы' }
              ].map((res, idx) => (
                <div key={idx} className="bg-[#161920] border border-stone-800 p-6 rounded-2xl space-y-3 hover:border-amber-500/50 transition cursor-pointer">
                  <div className="flex items-center justify-between text-xs text-stone-400">
                    <span>{res.date}</span>
                    <span className="text-amber-500 font-semibold">{res.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white hover:text-amber-400 transition">{res.title}</h3>
                  <p className="text-xs text-stone-400">Мақаланы толық оқу үшін басыңыз →</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 12. ӘЛЕУМЕТТІК ЖЕЛІЛЕР ЖӘНЕ ТЕРЕҢ ЗЕРТТЕУ РЕСУРСТАРЫ (#/social-media) */}
        {currentPath === '#/social-media' && (
          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="border-b border-stone-800 pb-6">
              <span className="text-amber-500 text-xs font-bold uppercase tracking-wider">Комьюнити & Ресурстар</span>
              <h1 className="text-3xl sm:text-4xl font-black text-white mt-2">Әлеуметтік желілер және Терең зерттеу</h1>
              <p className="text-stone-300 mt-2">Сайттың ресми әлеуметтік желілері, YouTube арналар мен киноны терең зерттеуге арналған авторлық ресурстар.</p>
            </div>

            {/* Әлеуметтік желілер сілтемелері */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-[#161920] border border-stone-800 hover:border-pink-500 p-6 rounded-2xl flex flex-col items-center text-center gap-3 transition group">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-500 flex items-center justify-center group-hover:scale-110 transition">
                  <Instagram size={24}/>
                </div>
                <div>
                  <h3 className="font-bold text-white">Instagram</h3>
                  <p className="text-xs text-stone-400 mt-1">Кадрлар мен сторис талдаулар</p>
                </div>
              </a>

              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="bg-[#161920] border border-stone-800 hover:border-blue-500 p-6 rounded-2xl flex flex-col items-center text-center gap-3 transition group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center group-hover:scale-110 transition">
                  <Send size={24}/>
                </div>
                <div>
                  <h3 className="font-bold text-white">Telegram Арна</h3>
                  <p className="text-xs text-stone-400 mt-1">Жедел мақалалар мен талқылау</p>
                </div>
              </a>

              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-[#161920] border border-stone-800 hover:border-red-500 p-6 rounded-2xl flex flex-col items-center text-center gap-3 transition group">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center group-hover:scale-110 transition">
                  <Youtube size={24}/>
                </div>
                <div>
                  <h3 className="font-bold text-white">YouTube</h3>
                  <p className="text-xs text-stone-400 mt-1">Видео-эсселер мен подкасттар</p>
                </div>
              </a>

              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="bg-[#161920] border border-stone-800 hover:border-stone-400 p-6 rounded-2xl flex flex-col items-center text-center gap-3 transition group">
                <div className="w-12 h-12 rounded-xl bg-stone-800 text-white flex items-center justify-center group-hover:scale-110 transition">
                  <Play size={24}/>
                </div>
                <div>
                  <h3 className="font-bold text-white">TikTok</h3>
                  <p className="text-xs text-stone-400 mt-1">Қысқа кинофактілер</p>
                </div>
              </a>
            </div>

            {/* YouTube талдаулар мен зерттеу ресурс рубрикасы */}
            <div className="space-y-6 pt-6">
              <h2 className="text-2xl font-black text-white flex items-center gap-3">
                <span className="w-2 h-8 bg-amber-500 rounded-full inline-block"></span>
                YouTube видео-талдаулар және Терең зерттеу ресурстары
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#161920] border border-stone-800 p-6 rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-amber-400 text-sm font-bold">
                    <Youtube size={20}/> Ресми видео-эссе рубрикасы
                  </div>
                  <h3 className="text-xl font-bold text-white">«Кадр артындағы сырлар» шоуы</h3>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    YouTube арнамызда әр фильмнің визуалды қателері, режиссерлік табыстары және жасырын символдары 15 минуттық видео-эсселер түрінде талданады.
                  </p>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:underline pt-2">
                    Видеоларды көру <ExternalLink size={14}/>
                  </a>
                </div>

                <div className="bg-[#161920] border border-stone-800 p-6 rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-amber-400 text-sm font-bold">
                    <BookOpen size={20}/> Академиялық дереккөздер
                  </div>
                  <h3 className="text-xl font-bold text-white">Кітапхана және Зерттеу базасы</h3>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    Кино драматургиясы мен режиссурасын терең оқып үйренуге арналған ұсынылатын кітаптар тізімі, сценаристтерге арналған үлгілер және әлемдік кітапхана сілтемелері.
                  </p>
                  <span className="inline-block text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/20">
                    PDF кітаптар базасы қолжетімді
                  </span>
                </div>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* Футер */}
      <footer className="border-t border-stone-800 mt-20 bg-[#0b0d10] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="font-bold text-white text-base">Кадр артындағы мағына</span>
            <p className="text-xs text-stone-500 mt-1">© 2026 Барлық құқықтар қорғалған. Киноны академиялық зерттеу платформасы.</p>
          </div>
          <div className="flex items-center gap-4 text-stone-400 text-sm">
            <button onClick={() => navigate('#/social-media')} className="hover:text-amber-400 transition">Әлеуметтік желілер</button>
            <button onClick={() => navigate('#/cinema-glossary')} className="hover:text-amber-400 transition">Киносөздік</button>
            <button onClick={() => navigate('#/practice')} className="hover:text-amber-400 transition">Практика</button>
          </div>
        </div>
      </footer>

    </div>
  );
}