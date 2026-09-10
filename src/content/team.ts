import type { MediaSlot } from "@/content/media";
import { typo, typoDeep } from "@/lib/typography";

/**
 * Команда проекта.
 *
 * Тексты ролей взяты с присланного макета — это данные заказчика.
 * Фотографий пока нет: у каждого слота src === null, и на его месте
 * стоит заглушка с именем файла, который её заменит.
 */

export type Member = {
  id: string;
  role: string;
  description: string;
  photo: MediaSlot;
};

export const teamTitle = typo("Одна свадьба — большая команда");

export const teamLead = typo("Каждая деталь проекта имеет своего ответственного.");

export const teamNote = typo(
  "Вы общаетесь с одной командой, а над вашей свадьбой одновременно работают специалисты разных направлений.",
);

/** Портреты вертикальные: так лицо занимает кадр, а не теряется в нём. */
function portrait(file: string, label: string): MediaSlot {
  return { src: null, file: `images/team/${file}`, label, ratio: "4 / 5" };
}

export const team: Member[] = typoDeep([
  {
    id: "manager",
    role: "Проектный менеджер",
    description: "Ведёт подготовку и соединяет все процессы проекта.",
    photo: portrait("01-manager.jpg", "Портрет проектного менеджера"),
  },
  {
    id: "decorators",
    role: "Декораторы и архитекторы",
    description: "Разрабатывают пространство, конструкции и визуальные решения.",
    photo: portrait("02-decorators.jpg", "Портрет декоратора команды"),
  },
  {
    id: "coordinators",
    role: "Координаторы",
    description: "Работают на площадке и отвечают за отдельные зоны события.",
    photo: portrait("03-coordinators.jpg", "Портрет координатора на площадке"),
  },
  {
    id: "designer",
    role: "Графический дизайнер",
    description:
      "Создаёт визуальные детали свадьбы — от полиграфии до элементов концепции.",
    photo: portrait("04-designer.jpg", "Портрет графического дизайнера"),
  },
  {
    id: "media",
    role: "Фото, видео и reels",
    description: "Сохраняют атмосферу и эмоции события.",
    photo: portrait("05-media.jpg", "Портрет фотографа команды"),
  },
]);
