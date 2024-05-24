export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="flex w-full min-h-screen  items-center overscroll-none">
    <div className="max-md:hidden  h-screen flex w-[60%] bg-[#D9D9D9]  sticky top-0 bottom-0 left-0 items-center justify-center" >
        {/* image */}
        <p>Fast Shop</p>
    </div>
    {children}
  </main>;
}
