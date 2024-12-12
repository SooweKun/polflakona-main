import { Header } from '/src/components/Header/header.jsx'
import { createFileRoute } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'
import { Footer } from '../components/Footer/footer'

export const Route = createFileRoute('/_layoutmain')({
  component: () => (
    <div>
      <Header />
      <Outlet />
    </div>
  ),
})