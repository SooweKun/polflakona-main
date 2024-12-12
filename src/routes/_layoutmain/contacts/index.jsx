import { createFileRoute } from '@tanstack/react-router'
import { Contacts } from '../../../pages/contacts/contacts'
export const Route = createFileRoute('/_layoutmain/contacts/')({
  component: () => <Contacts />,
})
