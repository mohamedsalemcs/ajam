import { Link } from 'react-router-dom'
import { Button, Icon } from '../components/ui'
import { Headline, Body } from '../components/ui/Typography'
import { Section, Container } from '../components/ui/Container'
import { PageHeader, Accordion } from '../components/common/Bits'
import { FAQS } from '../data/content'
import { whatsappHref } from '../lib/links'
import { cn } from '../lib/cn'

// FAQ — categorized accordions (Phase 4 §6.9).
export function Faq() {
  return (
    <>
      <PageHeader
        eyebrow="الأسئلة الشائعة"
        title="إجابات لأكثر ما يهمّك"
        subtitle="كل ما تحتاج معرفته عن الحجز، الدفع، الوحدات، الضمانات، والتسليم."
        image="/assets/Images/interior-kitchen.jpg"
      />

      <Section surface="white">
        <Container className="max-w-3xl">
          <div className="space-y-10">
            {FAQS.map((group, i) => (
              <div key={group.category}>
                <Headline level={2} as="h2" className="mb-4 flex items-center gap-2">
                  <span className={cn('h-5 w-1 rounded', ['bg-heritage-700', 'bg-teal-700', 'bg-gold-700', 'bg-mint-700'][i % 4])} />
                  {group.category}
                </Headline>
                <Accordion items={group.items} />
              </div>
            ))}
          </div>

          <div className="surface-luxe-heritage mt-12 rounded-brand-lg border-t-2 border-t-gold-700 p-8 text-center text-white">
            <Headline className="text-white">لم تجد إجابتك؟</Headline>
            <Body className="mx-auto mt-2 max-w-md text-stone-200/85">
              فريق المبيعات جاهز للإجابة على كل استفساراتك مباشرة.
            </Body>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Button as="a" href={whatsappHref('لدي سؤال لم أجد إجابته في الأسئلة الشائعة')} target="_blank" rel="noreferrer" variant="gold" size="lg">
                <Icon name="whatsapp" size={18} /> اسأل عبر واتساب
              </Button>
              <Button as={Link} to="/contact" variant="secondary" size="lg" className="border-white/40 text-white hover:bg-white/10">
                نموذج التواصل
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
