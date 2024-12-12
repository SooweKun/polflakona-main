import { createFileRoute } from '@tanstack/react-router'
import { Oferta } from '../../../pages/oferta/oferta'
export const Route = createFileRoute('/_layoutmain/oferta/')({
  component: () => <Oferta />,
})
