import Header from '../components1/Header.jsx'
import { Outlet } from 'react-router-dom'
import Footer from '../components1/Footer.jsx'

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
       <Footer />
    </>
  )
}

export default MainLayout