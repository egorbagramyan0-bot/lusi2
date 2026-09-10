/**
 * Типы для StaggeredMenu из реестра React Bits.
 *
 * Сам компонент поставляется на JavaScript, и TypeScript выводит типы
 * пропсов из значений по умолчанию: у items это `[]`, то есть `never[]`,
 * и передать в него что-либо невозможно. Описываем интерфейс рядом,
 * не трогая исходник, — тогда его можно обновить из реестра.
 */
import type { ComponentType, ReactNode } from "react";

export type StaggeredMenuItem = {
  label: string;
  link: string;
  ariaLabel?: string;
};

export type StaggeredMenuSocial = {
  label: string;
  link: string;
};

export type StaggeredMenuProps = {
  position?: "left" | "right";
  colors?: string[];
  items?: StaggeredMenuItem[];
  socialItems?: StaggeredMenuSocial[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  className?: string;
  logoUrl?: string;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  accentColor?: string;
  changeMenuColorOnOpen?: boolean;
  isFixed?: boolean;
  closeOnClickAway?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
  /** Наша вставка в низ панели — добавлена патчем, см. README. */
  panelFooter?: ReactNode;
  /** Адрес, куда ведёт логотип, — тоже добавлен патчем. */
  logoHref?: string;
};

export declare const StaggeredMenu: ComponentType<StaggeredMenuProps>;
declare const _default: ComponentType<StaggeredMenuProps>;
export default _default;
