import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import KhalimatusPage from '@/pages/KhalimatusPage'
import SalsabilaPage from '@/pages/SalsabilaPage'
import FajarPage from '@/pages/FajarPage'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/khalimatus-saharani-pramudyah" replace />} />
          <Route path="/khalimatus-saharani-pramudyah" element={<KhalimatusPage />} />
          <Route path="/salsabila-khairunnisa-lumbantobing" element={<SalsabilaPage />} />
          <Route path="/fajar-arrizki" element={<FajarPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
