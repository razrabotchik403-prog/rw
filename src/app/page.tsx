
const lime = "#CAFF00";

function RoadMark() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="h-10 w-10">
      <rect width="40" height="40" rx="13" fill={lime} />
      <path
        d="M12 29L17 11H23L28 29M14.5 22H25.5M18 17H22"
        stroke="#121026"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RouteVisual() {
  return (
    <div className="relative min-h-[370px] overflow-hidden rounded-[28px] border border-white/10 bg-[#17162e] sm:min-h-[440px]">
      <div className="absolute inset-0 opacity-30">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />
      </div>

      <div className="absolute left-[8%] top-[12%] h-32 w-32 rounded-full bg-[#CAFF00]/10 blur-3xl" />
      <div className="absolute right-[4%] top-[40%] h-40 w-40 rounded-full bg-violet-500/15 blur-3xl" />

      <svg
        viewBox="0 0 500 430"
        className="absolute inset-0 h-full w-full"
        fill="none"
        aria-label="Демонстрационная визуализация дорожного маршрута"
      >
        <path
          d="M-20 90C90 105 90 190 195 177S305 72 375 132 430 260 530 245"
          stroke="#32314b"
          strokeWidth="52"
          strokeLinecap="round"
        />
        <path
          d="M-20 90C90 105 90 190 195 177S305 72 375 132 430 260 530 245"
          stroke="#77758a"
          strokeWidth="2"
          strokeDasharray="9 12"
        />
        <path
          d="M25 350C115 310 120 260 200 280S320 365 390 315 440 285 510 300"
          stroke="#32314b"
          strokeWidth="40"
          strokeLinecap="round"
        />
        <path
          d="M25 350C115 310 120 260 200 280S320 365 390 315 440 285 510 300"
          stroke="#77758a"
          strokeWidth="2"
          strokeDasharray="8 10"
        />
        <path
          d="M-20 90C90 105 90 190 195 177S305 72 375 132 430 260 530 245"
          stroke={lime}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="3 11"
        />
        <circle cx="195" cy="177" r="15" fill={lime} fillOpacity=".13" />
        <circle cx="195" cy="177" r="6" fill={lime} />
        <circle cx="375" cy="132" r="15" fill={lime} fillOpacity=".13" />
        <circle cx="375" cy="132" r="6" fill={lime} />
        <circle cx="390" cy="315" r="6" fill="#A78BFA" />
      </svg>

      <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-[#121026]/85 px-3 py-2 text-xs text-white/75 backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-[#CAFF00]" />
        ДЕМО-КАРТА
      </div>

      <div className="absolute right-4 top-[27%] rounded-xl border border-white/10 bg-[#121026]/90 p-3 shadow-xl backdrop-blur">
        <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">
          Участок маршрута
        </p>
        <p className="mt-1 text-sm font-semibold text-white">RW · 001</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="h-1.5 w-12 rounded-full bg-[#CAFF00]" />
          <span className="h-1.5 w-5 rounded-full bg-white/15" />
          <span className="h-1.5 w-3 rounded-full bg-white/15" />
        </div>
      </div>

      <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-[#121026]/90 p-4 backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-auto sm:w-[260px]">
        <div className="flex items-center justify-between">
          <span className="text-xs text-white/55">Сигнал датчиков</span>
          <span className="rounded-full bg-[#CAFF00]/10 px-2 py-1 text-[10px] text-[#CAFF00]">
            DEMO
          </span>
        </div>
        <div className="mt-4 flex h-12 items-end gap-1">
          {[18, 27, 20, 34, 24, 42, 29, 19, 36, 47, 26, 32, 21, 40, 29, 44, 23, 34, 18, 28, 39, 24, 33, 19].map(
            (height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t-sm"
                style={{
                  height: `${height}px`,
                  backgroundColor: index === 9 || index === 15 ? lime : "rgba(202,255,0,.28)",
                }}
              />
            ),
          )}
        </div>
        <p className="mt-3 text-[11px] leading-5 text-white/45">
          Иллюстрация сигнала. Не реальные измерения.
        </p>
      </div>

      <div className="absolute bottom-6 right-5 hidden text-right sm:block">
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
          ROAD INTELLIGENCE
        </p>
        <p className="mt-1 text-sm font-medium text-white/75">
          Данные → Анализ → Инсайты
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#121026] text-white selection:bg-[#CAFF00] selection:text-[#121026]">
      <header className="relative z-10 border-b border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a href="#" className="flex items-center gap-3" aria-label="Road Wizard — главная">
            <RoadMark />
            <span className="text-lg font-bold tracking-tight">
              ROAD<span className="text-[#CAFF00]">WIZARD</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/65 md:flex">
            <a className="transition hover:text-[#CAFF00]" href="#platform">Платформа</a>
            <a className="transition hover:text-[#CAFF00]" href="#how-it-works">Как это работает</a>
            <a className="transition hover:text-[#CAFF00]" href="#technology">Технологии</a>
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden text-xs text-white/50 sm:inline">UZ / RU</span>
            <a
              href="#platform"
              className="rounded-full border border-white/15 px-4 py-2.5 text-xs font-semibold transition hover:border-[#CAFF00]/60 hover:text-[#CAFF00] sm:px-5 sm:text-sm"
            >
              Исследовать
              <span className="ml-2 text-[#CAFF00]">↗</span>
            </a>
          </div>
        </div>
      </header>

      <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1.05fr_.95fr] lg:gap-14 lg:px-12 lg:pb-28 lg:pt-24">
        <div className="pointer-events-none absolute -left-48 top-20 h-96 w-96 rounded-full bg-violet-700/10 blur-[120px]" />

        <div className="relative z-[1]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#CAFF00]/20 bg-[#CAFF00]/[0.06] px-3.5 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#CAFF00]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#CAFF00] sm:text-xs">
              Смарт-мониторинг дорог
            </span>
          </div>

          <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-[76px]">
            Дороги можно
            <br />
            измерять.
            <br />
            <span className="text-[#CAFF00]">Теперь — умнее.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
            Road Wizard превращает данные смартфона в информацию о состоянии
            дорожного покрытия — чтобы помогать замечать проблемные участки и
            принимать решения на основе данных.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#how-it-works"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#CAFF00] px-7 text-sm font-bold text-[#121026] transition hover:shadow-[0_0_35px_rgba(202,255,0,0.16)]"
            >
              Как это работает
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#platform"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/15 px-7 text-sm font-semibold text-white transition hover:border-white/35"
            >
              О платформе
              <span className="text-white/50">↗</span>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/45 sm:text-sm">
            <span className="flex items-center gap-2">
              <span className="text-[#CAFF00]">✓</span> Android MVP
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#CAFF00]">✓</span> GPS + датчики смартфона
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#CAFF00]">✓</span> Анализ данных
            </span>
          </div>
        </div>

        <div className="relative z-[1]">
          <div className="absolute -inset-5 rounded-[40px] bg-[#CAFF00]/[0.035] blur-2xl" />
          <RouteVisual />
          <div className="mt-4 flex items-start gap-3 px-1">
            <span className="mt-0.5 text-[#CAFF00]">ⓘ</span>
            <p className="max-w-lg text-xs leading-5 text-white/40">
              Визуализация интерфейса демонстрационная. Карта и график не
              представляют реальные дорожные измерения.
            </p>
          </div>
        </div>
      </section>

      <section id="platform" className="border-y border-white/[0.08] bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:grid-cols-3 sm:px-8 lg:px-12">
          <div>
            <p className="text-sm font-semibold text-white">Сбор данных</p>
            <p className="mt-2 text-sm leading-6 text-white/45">
              GPS и датчики Android-смартфона во время движения.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Обработка сигналов</p>
            <p className="mt-2 text-sm leading-6 text-white/45">
              Подготовка данных для анализа колебаний при движении по дороге.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Поиск проблемных участков</p>
            <p className="mt-2 text-sm leading-6 text-white/45">
              Подход к выявлению участков, требующих дополнительного внимания.
            </p>
          </div>
        </div>
      </section>

      <section
        id="solutions"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12"
      >
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CAFF00]">
            Для кого Road Wizard
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            Одни данные.
            <br />
            <span className="text-white/45">Разные возможности.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/55">
            Информация о дорожном покрытии может помогать государственным
            организациям, бизнесу и водителям принимать более обоснованные
            решения.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#CAFF00]/40">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#CAFF00]/10 text-2xl text-[#CAFF00]">
              ↗
            </div>
            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              01 / Инфраструктура
            </p>
            <h3 className="mt-3 text-xl font-semibold">Государство</h3>
            <p className="mt-4 text-sm leading-7 text-white/55">
              Данные о поездках могут помогать обнаруживать участки,
              требующие дополнительного обследования, и планировать
              обслуживание дорожной сети.
            </p>
            <div className="mt-6 border-t border-white/10 pt-5 text-sm text-[#CAFF00]">
              Аналитика дорожной сети →
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#CAFF00]/40">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#CAFF00]/10 text-2xl text-[#CAFF00]">
              ◈
            </div>
            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              02 / Бизнес-аналитика
            </p>
            <h3 className="mt-3 text-xl font-semibold">
              Страховые и компании
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/55">
              Потенциальная основа для исследования дорожных рисков,
              анализа маршрутов и разработки сервисов на основе
              агрегированных дорожных данных.
            </p>
            <div className="mt-6 border-t border-white/10 pt-5 text-sm text-[#CAFF00]">
              Данные для решений →
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#CAFF00]/40">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#CAFF00]/10 text-2xl text-[#CAFF00]">
              ◎
            </div>
            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              03 / Для водителей
            </p>
            <h3 className="mt-3 text-xl font-semibold">
              Пользователи дорог
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/55">
              В перспективе пользователи смогут получать полезную
              информацию о дорожных участках и специальные предложения
              от партнёров проекта.
            </p>
            <div className="mt-6 border-t border-white/10 pt-5 text-sm text-[#CAFF00]">
              Польза в каждой поездке →
            </div>
          </article>
        </div>
      </section>
      
      <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CAFF00]">
          Принцип работы
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          От движения автомобиля к данным о дороге.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Сбор",
              description: "Смартфон фиксирует данные датчиков и GPS во время поездки.",
            },
            {
              number: "02",
              title: "Анализ",
              description: "Собранные сигналы передаются для обработки и анализа.",
            },
            {
              number: "03",
              title: "Информация",
              description: "Результаты помогают исследовать состояние дорожных участков.",
            },
          ].map((item) => (
            <article
              key={item.number}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-[#CAFF00]/30"
            >
              <span className="text-sm font-semibold text-[#CAFF00]">{item.number}</span>
              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/50">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="technology" className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>© 2026 Road Wizard. Разумный подход к дорожным данным.</p>
          <p>Android · GPS · Анализ сигналов · Прототип ML</p>
        </div>
      </section>
    </main>
  );
}
