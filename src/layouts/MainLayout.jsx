import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  {
    label: 'Khalimatus Saharani Pramudyah',
    path: '/khalimatus-saharani-pramudyah',
  },
  {
    label: 'Salsabila Khairunnisa Lumbantobing',
    path: '/salsabila-khairunnisa-lumbantobing',
  },
  {
    label: 'Fajar Arrizki',
    path: '/fajar-arrizki',
  },
]

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-950 text-white">
      <header className="border-b border-neutral-700 bg-black">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-5 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="flex items-center gap-3">
            <svg
              aria-hidden="true"
              viewBox="0 0 256 231"
              className="h-9 w-9 text-white"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M128 154.367C142.548 154.367 154.341 142.574 154.341 128.026C154.341 113.478 142.548 101.685 128 101.685C113.452 101.685 101.659 113.478 101.659 128.026C101.659 142.574 113.452 154.367 128 154.367Z"
                fill="currentColor"
              />
              <path
                d="M128 180.376C196.591 180.376 252.188 157.818 252.188 128C252.188 98.1824 196.591 75.624 128 75.624C59.4093 75.624 3.8125 98.1824 3.8125 128C3.8125 157.818 59.4093 180.376 128 180.376Z"
                stroke="currentColor"
                strokeWidth="8"
              />
              <path
                d="M71.0063 147.188C105.302 206.547 151.014 245.788 173.099 233.034C195.184 220.279 185.261 160.356 150.966 100.997C116.67 41.638 70.9578 2.39721 48.8729 15.1513C26.788 27.9055 36.7109 87.8285 71.0063 147.188Z"
                stroke="currentColor"
                strokeWidth="8"
              />
              <path
                d="M71.0062 108.813C36.7108 168.172 26.7879 228.095 48.8728 240.849C70.9577 253.603 116.67 214.362 150.965 155.003C185.261 95.644 195.184 35.721 173.099 22.9668C151.014 10.2127 105.302 49.4535 71.0062 108.813Z"
                stroke="currentColor"
                strokeWidth="8"
              />
            </svg>
            <h1 className="text-2xl font-bold text-white">Profile</h1>
          </div>

          <nav className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  [
                    'rounded-full border px-4 py-2 text-sm font-medium transition',
                    isActive
                      ? 'border-white bg-white text-black'
                      : 'border-neutral-600 bg-neutral-900 text-neutral-200 hover:border-neutral-400 hover:bg-neutral-800',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 md:px-6">
        <Outlet />
      </main>

      <footer className="border-t border-neutral-700 bg-black">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-5 text-sm text-neutral-400 md:flex-row md:items-center md:justify-between md:px-6">
          <p>Profile</p>
          <p>&copy; 2026 Personal Profile Project</p>
        </div>
      </footer>
    </div>
  )
}
