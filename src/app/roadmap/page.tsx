"use client";

import Link from "next/link";

const phases = [
  {
    number: "01",
    title: "Уже реализовано",
    status: "completed",
    items: [
      "Android-приложение Road Wizard",
      "Сбор данных акселерометра и GPS в фоновом режиме",
      "Карта участков дорог с оценкой относительного IRI",
      "Прототип модели искусственного интеллекта",
    ],
  },
  {
    number: "02",
    title: "Следующий этап",
    status: "planned",
    items: [
      "Калибровка и проверка оценок по эталонным измерениям",
      "Полевые испытания на реальных дорожных участках",
      "Веб-панель аналитики для государственных организаций",
      "Развитие модели ИИ и повышение надёжности оценок",
    ],
  },
  {
    number: "03",
    title: "Масштабирование",
    status: "planned",
    items: [
      "Подготовка версии приложения для iOS",
      "Пилотное внедрение с потенциальными заказчиками",
      "Расширение карты дорожных участков",
      "Публичный запуск платформы",
    ],
  },
];

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-[#121026] px-5 py-16 text-[#F5F5F7] sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#AAA8BC] transition hover:text-[#CAFF00]"
        >
          <span aria-hidden="true">←</span> На главную
        </Link>

        <header className="mb-12 mt-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#CAFF00]">
            ROAD WIZARD / ROADMAP
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
            От измерения дорог — к интеллектуальному управлению
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#AAA8BC] sm:text-lg">
            План развития Road Wizard: от работающего Android-MVP к
            проверенной аналитической платформе мониторинга состояния дорог.
          </p>
        </header>

        <div className="space-y-5">
          {phases.map((phase) => (
            <section
              key={phase.number}
              className="rounded-2xl border border-[#34314D] bg-[#1C1A35] p-6 sm:p-8"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:gap-8">
                <div className="shrink-0">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-xl text-lg font-bold ${
                      phase.status === "completed"
                        ? "bg-[#CAFF00]/10 text-[#CAFF00]"
                        : "bg-white/5 text-[#AAA8BC]"
                    }`}
                  >
                    {phase.number}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <h2 className="text-xl font-bold sm:text-2xl">
                      {phase.title}
                    </h2>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        phase.status === "completed"
                          ? "bg-[#CAFF00]/10 text-[#CAFF00]"
                          : "bg-white/5 text-[#AAA8BC]"
                      }`}
                    >
                      {phase.status === "completed"
                        ? "Реализовано"
                        : "В планах"}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-[#AAA8BC] sm:text-base"
                      >
                        <span
                          className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                            phase.status === "completed"
                              ? "bg-[#CAFF00]"
                              : "bg-[#6B6688]"
                          }`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-12 rounded-2xl border border-[#CAFF00]/25 bg-[#CAFF00]/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold">
            Цель Road Wizard
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-[#AAA8BC]">
            Сделать мониторинг дорожного покрытия более доступным с помощью
            смартфонов, геоданных и искусственного интеллекта. Следующий
            ключевой шаг — проверка результатов и подтверждение качества
            измерений в реальных условиях.
          </p>
        </footer>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-[#CAFF00] px-5 py-3 font-semibold text-[#121026] transition hover:brightness-95"
          >
            Вернуться на главную <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}