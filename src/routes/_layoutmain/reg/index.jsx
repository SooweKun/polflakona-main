import { createFileRoute } from '@tanstack/react-router'
import { Reg } from '../../../pages/reg/reg'
export const Route = createFileRoute('/_layoutmain/reg/')({
  component: () => <Reg />,
})
