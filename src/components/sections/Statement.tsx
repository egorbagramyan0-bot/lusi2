import { Container } from "@/components/ui/Container";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { media } from "@/content/media";
import { statement } from "@/content/site";
import { Typo } from "@/components/ui/Typo";

/**
 * Заявление агентства на винном фоне.
 *
 * Стол вырезан и лежит на прозрачном фоне, поэтому растворять его
 * градиентом не нужно — он просто стоит на винной плоскости и уходит
 * за правый край секции.
 *
 * На телефоне он тоже стоит, а не висит: кадр вынесен из контейнера
 * на всю ширину окна, а нижнее поле секции убрано, чтобы скатерть
 * доходила до её границы. Внутри контейнера стол оказывался в рамке
 * из боковых полей и отступа снизу и выглядел криво обрезанным.
 */
export function Statement() {
  return (
    <section id="about" className="relative overflow-hidden bg-wine">
      <div className="absolute -right-[5%] bottom-0 hidden h-[92%] w-[58%] lg:block">
        <MediaFrame slot={media.statement} fill sizes="58vw" />
      </div>

      <Container className="relative pt-(--section-y) lg:py-(--section-y)">
        <Reveal className="lg:max-w-[46%]">
          <h2 className="font-serif text-[clamp(2rem,7vw,3.5rem)] leading-[1.22] text-cream">
            {statement.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <span aria-hidden className="hairline mt-10 w-20" />

          <p className="mt-8 max-w-[42ch] text-lead text-cream/60">
            <Typo>{statement.body}</Typo>
          </p>
        </Reveal>
      </Container>

      <Reveal className="mt-12 lg:hidden" delay={120}>
        <MediaFrame slot={media.statement} sizes="100vw" />
      </Reveal>
    </section>
  );
}
