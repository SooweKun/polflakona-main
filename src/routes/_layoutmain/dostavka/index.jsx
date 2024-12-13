import { createFileRoute } from '@tanstack/react-router'
import { Dostavka } from '../../../pages/dostavka/dostavka'
export const Route = createFileRoute('/_layoutmain/dostavka/')({
  component: () => <Dostavka />,
})
