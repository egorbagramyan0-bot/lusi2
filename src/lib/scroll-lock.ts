/**
 * Блокировка прокрутки под модальным окном.
 *
 * Просто выключить прокрутку недостаточно: вместе с ней пропадает полоса
 * прокрутки, страница становится шире и прыгает вбок — вместе с липкой
 * шапкой и кнопкой меню. Поэтому ширину полосы возвращаем полем справа.
 *
 * Ту же величину кладём в переменную --scrollbar-gap: модальное окно
 * лежит в верхнем слое и занимает всю ширину окна вместе с полосой,
 * поэтому его содержимое нужно отодвинуть на столько же, иначе оно не
 * совпадёт по вертикали с шапкой страницы.
 *
 * На телефонах полоса накладывается поверх содержимого и её ширина
 * равна нулю — там ничего не сдвигается.
 */
export function lockScroll() {
  const gap = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = "hidden";
  if (gap > 0) {
    document.body.style.paddingRight = `${gap}px`;
    document.documentElement.style.setProperty("--scrollbar-gap", `${gap}px`);
  }
}

export function unlockScroll() {
  document.body.style.overflow = "";
  document.body.style.paddingRight = "";
  document.documentElement.style.removeProperty("--scrollbar-gap");
}
