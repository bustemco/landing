import Image from 'next/image';

const navLinks = [
  {
    label: 'How It Works',
    href: '/',
  },
  {
    label: 'Features',
    href: '/features',
  },
  {
    label: 'FAQs',
    href: '/faqs',
  },
];

export default function Navbar() {
  return (
    <main className="fixed left-0 top-0 z-50 w-full bg-transparent p-4 shadow-sm">
      <div
        className="mx-auto flex h-16 w-[1073px] flex-row items-center justify-between gap-2.5 rounded-3xl px-8 py-3"
        style={{
          background:
            'linear-gradient(180deg, rgba(245, 246, 249, 0) 0%, rgba(245, 246, 249, 0.4) 100%), #FFFFFF',
          boxShadow:
            '0px 0px 0px 1px rgba(14, 63, 126, 0.06), 0px 1px 2px rgba(42, 51, 70, 0.05), 0px 2px 3px rgba(42, 51, 70, 0.03), 0px 2px 8px rgba(34, 42, 53, 0.04), 0px 12px 12px -6px rgba(42, 51, 70, 0.03)',
        }}
      >
        {/* Logo */}
        <div className="flex h-[34px] w-[34px] items-center rounded-[55px] p-[1px]">
          <div
            className="flex h-8 w-8 items-start rounded-[7.7px] bg-white"
            style={{
              boxShadow:
                'inset 0px 0.4px 1.1px rgba(0, 0, 0, 0.25), inset 0px 1.6px 3.3px rgba(0, 0, 0, 0.25)',
            }}
          >
            <div
              className="flex h-8 w-8 items-center justify-center rounded-[7.7px] p-[1.7px]"
              style={{
                background:
                  'linear-gradient(163.37deg, rgba(255, 255, 255, 0) 8.06%, rgba(255, 255, 255, 0.03) 91.94%), linear-gradient(195.09deg, #28344A -10.92%, #11121D 97.57%)',
                boxShadow: '0px 0.4px 0.4px rgba(0, 0, 0, 0.25)',
              }}
            >
              <Image
                src="/favicon_io/favicon.ico"
                alt="Bustem Logo"
                width={30}
                height={30}
                className="h-[16.4px] w-[22.7px]"
                style={{
                  filter: 'drop-shadow(0px 0.4px 0.5px rgba(5, 0, 17, 0.48))',
                }}
              />
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex h-5 flex-1 flex-row items-center justify-center gap-[60px]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-inter text-center text-base font-semibold text-[#333E5A]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Login Section */}
        <div className="flex h-10 items-center justify-end">
          <a
            href="/login"
            className="font-inter text-center text-base font-semibold text-[#333E5A]"
          >
            Login
          </a>
        </div>
      </div>
    </main>
  );
}
