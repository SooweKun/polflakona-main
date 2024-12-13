import { createFileRoute } from '@tanstack/react-router'
import { Carzina } from '../../../pages/carzina/carzina'
export const Route = createFileRoute('/_layoutmain/carzina/')({
  component: () => <Carzina />,
})
