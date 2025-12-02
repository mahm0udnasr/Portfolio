


export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div
      className={`h-full w-full relative flex flex-col items-start gap-5 overflow-hidden pt-24 pb-4 px-40 mx-md:p-4 max-sm:pt-20`}
    >
      {children}
    </div>
  );
}
