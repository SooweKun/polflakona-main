import { createFileRoute } from '@tanstack/react-router'
import { Sogl } from '../../../pages/sogl/sogl'
export const Route = createFileRoute('/_layoutmain/sogl/')({
  component: () => <Sogl />,
})
