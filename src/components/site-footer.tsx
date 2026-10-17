
"use client";
import Image from "next/image";

export function SiteFooter() {
  const socialItems = [
    { name: "LinkedIn", icon: "in" },
    { name: "X", icon: "X" },
    { name: "Instagram", icon: "instagram" },
    { name: "Telegram", icon: "telegram" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#0B0D1B] text-white">
      {/* TOP: APP DOWNLOAD BANNER */}
      <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">
        {/* Decorative background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-12 h-72 w-72 rounded-full bg-[#CCFF00]/[0.06] blur-3xl"
        />

        <div className="relative z-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#CCFF00]/20 bg-white/[0.04] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#CCFF00]">
            <span className="h-2 w-2 rounded-full bg-[#CCFF00]" />
            Road Wizard Mobile
          </div>

          <h2 className="max-w-xl text-4xl font-black leading-[1.05] tracking-tight text-[#CCFF00] sm:text-5xl lg:text-[56px]">
            Скачайте
            <br />
            приложение
          </h2>

          <p className="mt-5 max-w-md text-base leading-7 text-white/75 sm:text-lg">
            Наведите камеру на QR-код, чтобы перейти к загрузке Road Wizard.
            Измеряйте состояние дорог прямо во время поездок.
          </p>

          <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            
{/* Real Road Wizard QR code */}
<div className="h-[180px] w-[180px] shrink-0 rounded-2xl border-2 border-[#CCFF00] bg-[#0B0D1B] p-2 shadow-[0_0_28px_rgba(204,255,0,0.12)]">
  <Image
    src="/images/road-wizard-qr.png"
    alt="QR-код для загрузки приложения Road Wizard"
    width={164}
    height={164}
    priority
    className="h-full w-full rounded-xl object-contain"
  />
</div>


            <div className="max-w-xs">
              <p className="text-sm leading-6 text-white/65">
                Для Android доступно мобильное приложение.
                Версия для iPhone — в разработке.
              </p>

              <div className="mt-4 flex items-center gap-2 text-xs font-medium text-white/40">
                <svg
                  viewBox="0 0 20 20"
                  className="h-4 w-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <rect x="5" y="2" width="10" height="16" rx="2" />
                  <path d="M8 5h4M9 15h2" />
                </svg>
                Сканируйте камерой смартфона
              </div>
            </div>
          </div>
        </div>

        
{/* PHONE MOCKUP: real app screenshot */}
<div className="relative mx-auto flex w-full max-w-md items-center justify-center lg:justify-end">
  <div
    aria-hidden="true"
    className="absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#CCFF00]/[0.08] blur-3xl"
  />

  {/* Smartphone frame */}
  <div className="relative w-[260px] rotate-[3deg] rounded-[42px] border border-white/20 bg-[#191B28] p-[9px] shadow-[0_35px_100px_rgba(0,0,0,0.55)] transition-transform duration-500 hover:rotate-0">
    <div className="relative h-[490px] overflow-hidden rounded-[34px] bg-[#101321]">
      <Image
        src="/images/road-wizard-app.png"
        alt="Главный экран приложения Road Wizard"
        fill
        sizes="242px"
        priority
        className="object-cover object-top"
      />

      {/* Phone speaker / camera cutout */}
      <div className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
    </div>
  </div>

  <div className="absolute -bottom-3 left-0 hidden rounded-2xl border border-white/10 bg-[#171A28] px-4 py-3 shadow-xl sm:block">
    <div className="flex items-center gap-2 text-xs font-medium text-white/75">
      <span className="h-2 w-2 rounded-full bg-[#CCFF00]" />
      Road Wizard Mobile
    </div>
  </div>
</div>

      </section>

      {/* BOTTOM: LIME FOOTER PANEL */}
      <div className="relative overflow-hidden rounded-t-[40px] bg-[#CCFF00] text-[#121212] sm:rounded-t-[52px]">
        {/* Oversized wordmark watermark */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-6 select-none overflow-hidden whitespace-nowrap text-center text-[17vw] font-black leading-none tracking-[-0.09em] text-[#A9D400]/45 sm:top-8 sm:text-[15vw] lg:text-[13.5vw]"
        >
          ROAD WIZARD
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-16 lg:px-12 lg:pt-20">
          {/* Upper row */}
          <div className="flex flex-col gap-7 border-b border-black/15 pb-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Language display — connect to actual translations when available */}
            <div className="inline-flex w-fit items-center gap-3 rounded-xl bg-[#121212] px-4 py-3 text-sm font-semibold text-white">
              Рус
              <svg
                viewBox="0 0 16 16"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="m4 6 4 4 4-4" />
              </svg>
            </div>

            <nav
              aria-label="Навигация в подвале"
              className="flex flex-col gap-4 text-sm font-semibold sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3 sm:text-base"
            >
              <a
                href="#how-it-works"
                className="w-fit transition-opacity hover:opacity-55"
              >
                О проекте
              </a>
              <a
                href="/roadmap"
                className="w-fit transition-opacity hover:opacity-55"
              >
                Достижения
              </a>
              <a
                href="https://github.com/razrabotchik403-prog/rw"
                target="_blank"
                rel="noreferrer"
                className="w-fit transition-opacity hover:opacity-55"
              >
                Связь с разработчиком
                <span className="ml-1.5" aria-hidden="true">↗</span>
              </a>
            </nav>

            {/* Social icon placeholders: add official profile URLs when available */}
            <div className="flex items-center gap-2.5">
              {socialItems.map((item) => (
                <span
                  key={item.name}
                  title={`${item.name} — ссылка на профиль будет добавлена`}
                  aria-label={item.name}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#121212] text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-1"
                >
                  {item.icon === "instagram" ? (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.8" r="0.8" fill="currentColor" />
                    </svg>
                  ) : item.icon === "telegram" ? (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M21.4 4.7 18.2 20c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.6.6-1.1.6l.4-5.1 9.2-8.3c.4-.3-.1-.5-.6-.2L6.3 13.6l-4.9-1.5c-1.1-.3-1.1-1 .2-1.5l19-7.3c.9-.3 1.6.2 1.3 1.4Z" />
                    </svg>
                  ) : (
                    item.icon
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Lower row */}
          <div className="flex flex-col gap-5 pt-6 sm:flex-row sm:items-center sm:justify-between sm:pt-8">
            <div className="max-w-2xl text-xs leading-6 text-black/70 sm:text-sm">
              © 2026 Road Wizard. Разумный подход к дорожным данным.
            </div>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              aria-label="Вернуться наверх"
              className="grid h-12 w-12 shrink-0 place-items-center self-start rounded-full bg-[#121212] text-white transition-transform duration-200 hover:-translate-y-1 sm:self-auto"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
