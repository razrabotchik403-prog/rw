"use client";

import { useState } from "react";
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

function AppScreenshots() {
  const [active, setActive] = useState(0);

  const screens = [
    {
      title: "Мониторинг поездки",
      description: "Сбор данных во время движения",
      icon: "⌁",
      metric: "GPS + SENSOR",
      color: "#CAFF00",
    },
    {
      title: "Карта маршрута",
      description: "Визуализация дорожных участков",
      icon: "⌖",
      metric: "ROUTE TRACKING",
      color: "#A78BFA",
    },
    {
      title: "Анализ покрытия",
      description: "Обработка сигналов смартфона",
      icon: "⌁",
      metric: "ROAD ANALYTICS",
      color: "#60A5FA",
    },
  ];

  const screen = screens[active];

  return (
    <div className="mb-5 overflow-hidden rounded-[28px] border border-white/10 bg-[#17162e] p-5 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#CAFF00]">
            ROAD WIZARD · APP PREVIEW
          </p>
          <h3 className="mt-2 text-lg font-semibold text-white">
            Приложение в действии
          </h3>
        </div>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50">
          0{active + 1} / 03
        </span>
      </div>

      <div className="mt-5 flex justify-center">
        <div className="w-full max-w-[230px] rounded-[32px] border border-white/15 bg-[#0d0c1b] p-2 shadow-2xl">
          <div className="overflow-hidden rounded-[25px] bg-[#121026]">
            <div className="mx-auto mt-2 h-1.5 w-16 rounded-full bg-white/15" />

            <div className="px-4 pb-5 pt-5">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#CAFF00] font-bold text-[#121026]">
                  RW
                </div>
                <div>
                  <p className="text-xs font-bold text-white">ROAD WIZARD</p>
                  <p className="text-[9px] text-white/40">SMART ROAD MONITORING</p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                <p className="text-[9px] uppercase tracking-wider text-white/40">
                  {screen.metric}
                </p>
                <div className="mt-3 flex h-20 items-center justify-center rounded-xl bg-white/[0.03]">
                  <span
                    className="text-5xl"
                    style={{ color: screen.color }}
                  >
                    {screen.icon}
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-white">
                  {screen.title}
                </p>
                <p className="mt-1 text-[10px] leading-4 text-white/45">
                  {screen.description}
                </p>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="rounded-xl bg-white/[0.04] p-3">
                  <p className="text-[9px] text-white/40">Платформа</p>
                  <p className="mt-1 text-xs font-semibold text-white">Android</p>
                </div>
                <div className="rounded-xl bg-white/[0.04] p-3">
                  <p className="text-[9px] text-white/40">Режим</p>
                  <p className="mt-1 text-xs font-semibold text-white">Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {screens.map((item, index) => (
          <button
            key={item.title}
            type="button"
            aria-label={`Экран ${index + 1}: ${item.title}`}
            aria-pressed={active === index}
            onClick={() => setActive(index)}
            className={`h-2 rounded-full transition-all ${
              active === index
                ? "w-8 bg-[#CAFF00]"
                : "w-2 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      <p className="mt-4 text-center text-[10px] leading-5 text-white/35">
        Демонстрационный макет. Не является скриншотом реального приложения.
      </p>
    </div>
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <main className="min-h-screen overflow-hidden bg-[#121026] text-white selection:bg-[#CAFF00] selection:text-[#121026]">
      
<header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#121026]/90 backdrop-blur-xl">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
    <a
      href="#"
      onClick={() => setMenuOpen(false)}
      className="flex items-center gap-3"
      aria-label="Road Wizard — главная"
    >
      <RoadMark />
      <span className="text-lg font-bold tracking-tight">
        ROAD<span className="text-[#CAFF00]">WIZARD</span>
      </span>
    </a>

    {/* Навигация для компьютеров */}
    <nav className="hidden items-center gap-8 text-sm text-white/65 md:flex">
      <a className="transition hover:text-[#CAFF00]" href="#platform">
        Платформа
      </a>
      <a className="transition hover:text-[#CAFF00]" href="#how-it-works">
        Как это работает
      </a>
      <a className="transition hover:text-[#CAFF00]" href="#technology">
        Технологии
      </a>
    </nav>

    <div className="flex items-center gap-3">
      <a
        href="#solutions"
        className="hidden rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold transition hover:border-[#CAFF00]/60 hover:text-[#CAFF00] sm:inline-flex"
      >
        Исследовать <span className="ml-2 text-[#CAFF00]">↗</span>
      </a>

      {/* Кнопка бургера для мобильных */}
      <button
        type="button"
        className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-xl border border-white/10 bg-white/[0.04] transition hover:border-[#CAFF00]/50 md:hidden"
        aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span
          className={`h-0.5 w-5 rounded-full bg-[#CAFF00] transition-all duration-300 ${
            menuOpen ? "translate-y-[7px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-0.5 w-5 rounded-full bg-[#CAFF00] transition-all duration-300 ${
            menuOpen ? "scale-x-0 opacity-0" : ""
          }`}
        />
        <span
          className={`h-0.5 w-5 rounded-full bg-[#CAFF00] transition-all duration-300 ${
            menuOpen ? "-translate-y-[7px] -rotate-45" : ""
          }`}
        />
      </button>
    </div>
  </div>

  {/* Выпадающее мобильное меню */}
  <div
    id="mobile-navigation"
    aria-hidden={!menuOpen}
    className={`grid overflow-hidden border-t border-white/[0.08] transition-[grid-template-rows,opacity] duration-300 ease-in-out md:hidden ${
      menuOpen
        ? "grid-rows-[1fr] opacity-100"
        : "pointer-events-none grid-rows-[0fr] opacity-0"
    }`}
  >
    <nav className="min-h-0 overflow-hidden">
      <div className="mx-auto flex max-w-7xl flex-col px-5 pb-5 pt-3 sm:px-8">
        {[
          { label: "Платформа", href: "#platform" },
          { label: "Для кого Road Wizard", href: "#solutions" },
          { label: "Как это работает", href: "#how-it-works" },
          { label: "Технологии", href: "#technology" },
        ].map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-between border-b border-white/[0.07] py-4 text-sm font-medium text-white/75 transition hover:text-[#CAFF00]"
          >
            {item.label}
            <span className="text-[#CAFF00]">↗</span>
          </a>
        ))}

        
<a
  href="https://t.me/roadwizarduz"
  target="_blank"
  rel="noopener noreferrer"
  tabIndex={menuOpen ? 0 : -1}
  onClick={() => setMenuOpen(false)}
  className="mt-5 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#CAFF00] px-5 text-sm font-bold text-[#121026] transition duration-300 hover:bg-[#dcff52] hover:shadow-[0_0_25px_rgba(202,255,0,0.18)]"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M21.8 4.2 18.6 19.3c-.24 1.07-.87 1.33-1.76.83l-4.87-3.59-2.35 2.26c-.26.26-.48.48-.98.48l.35-4.96 9.03-8.16c.39-.35-.08-.55-.6-.2L6.26 13.1 1.5 11.6c-1.03-.32-1.05-1.03.22-1.53L20.3 2.9c.85-.31 1.6.2 1.5 1.3Z" />
  </svg>
  Скачать приложение
  <span aria-hidden="true">↗</span>
</a>

      </div>
    </nav>
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
          <AppScreenshots />
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

      
      <section
        id="technology"
        className="relative overflow-hidden border-t border-white/[0.08] bg-[#17162e]/50"
      >
        <div className="pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full bg-[#CAFF00]/[0.06] blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CAFF00]">
              Технологическая основа
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              Смартфон — инструмент
              <br className="hidden sm:block" /> для изучения дорог.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              Road Wizard использует данные GPS и датчиков смартфона,
              чтобы собирать информацию во время движения и исследовать
              характеристики дорожных участков.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <article className="group rounded-3xl border border-white/10 bg-[#121026]/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#CAFF00]/30 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#CAFF00]/20 bg-[#CAFF00]/[0.08] text-xl text-[#CAFF00]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M12 2v3M22 12h-3M12 22v-3M2 12h3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
                01 / Сбор
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                Данные в движении
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/55">
                GPS и датчики смартфона помогают фиксировать данные
                поездки и связывать наблюдения с участками маршрута.
              </p>
            </article>

            <article className="group rounded-3xl border border-white/10 bg-[#121026]/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#CAFF00]/30 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#CAFF00]/20 bg-[#CAFF00]/[0.08] text-xl text-[#CAFF00]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M3 17l5-5 4 3 8-9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 6h5v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
                02 / Обработка
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                Анализ сигналов
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/55">
                Обработка данных помогает исследовать колебания во время
                поездки и искать признаки, требующие внимания.
              </p>
            </article>

            <article className="group rounded-3xl border border-white/10 bg-[#121026]/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#CAFF00]/30 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#CAFF00]/20 bg-[#CAFF00]/[0.08] text-xl text-[#CAFF00]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M8 9h8M8 12h5M8 15h7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
                03 / Развитие
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                Интеллектуальная аналитика
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/55">
                Проект развивается в направлении интеллектуального анализа
                дорожных данных. Модель машинного обучения представлена
                прототипом.
              </p>
            </article>
          </div>

          <div className="mt-16 overflow-hidden rounded-3xl border border-[#CAFF00]/20 bg-[#CAFF00]/[0.045] p-7 sm:p-10 lg:p-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CAFF00]">
                  ROAD WIZARD
                </p>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-4xl">
                  Делаем дорожные данные полезнее.
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/55 sm:text-base">
                  Изучите возможности платформы и сценарии применения
                  технологии для дорожной инфраструктуры, бизнеса и водителей.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col">
                <a
                  href="#solutions"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#CAFF00] px-6 text-sm font-bold text-[#121026] transition hover:bg-[#dcff52]"
                >
                  Сценарии применения
                  <span aria-hidden="true">→</span>
                </a>

                <a
                  href="#how-it-works"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/15 px-6 text-sm font-semibold text-white transition hover:border-white/35"
                >
                  Принцип работы
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <a
            href="#"
            className="flex items-center gap-3"
            aria-label="Road Wizard — наверх"
          >
            <RoadMark />
            <span className="text-sm font-bold tracking-tight">
              ROAD<span className="text-[#CAFF00]">WIZARD</span>
            </span>
          </a>

          <p className="text-xs leading-6 text-white/40">
            © 2026 Road Wizard. Разумный подход к дорожным данным.
          </p>

          <a
            href="#"
            className="text-sm text-white/55 transition hover:text-[#CAFF00]"
          >
            Наверх ↑
          </a>
        </div>
      </footer>

    </main>
  );
}
