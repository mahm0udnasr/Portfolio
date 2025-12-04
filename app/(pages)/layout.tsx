export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 py-20 sm:px-8 lg:px-12">
      {children}
    </div>
  );
}
