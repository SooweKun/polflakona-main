import { createFileRoute } from '@tanstack/react-router'
import { Catalog } from '../../../pages/catalog/catalog'
export const Route = createFileRoute('/_layoutmain/catalog/')({
  component: () => <Catalog />,
})
