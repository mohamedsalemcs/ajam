import { Link } from 'react-router-dom'
import { Button } from '../components/ui'
import { Headline, Body } from '../components/ui/Typography'
import { Container } from '../components/ui/Container'

export function NotFound() {
  return (
    <section className="surface-luxe-dark relative min-h-[70svh] overflow-hidden pt-[68px] text-white">
      <img src="/assets/Images/skyline-night.jpg" alt="" className="absolute inset-0 size-full object-cover opacity-25" />
      <Container className="relative grid min-h-[60svh] place-items-center text-center">
        <div>
          <span className="font-display text-display-1 text-gold-700">404</span>
          <Headline className="mt-2 text-white">الصفحة غير موجودة</Headline>
          <Body className="mx-auto mt-2 max-w-md text-stone-200/85">عذراً، الصفحة التي تبحث عنها غير متوفّرة أو تم نقلها.</Body>
          <div className="mt-6 flex justify-center gap-3">
            <Button as={Link} to="/" variant="gold" size="lg">العودة للرئيسية</Button>
            <Button as={Link} to="/projects" variant="outlineLight" size="lg">تصفّح المشاريع</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
