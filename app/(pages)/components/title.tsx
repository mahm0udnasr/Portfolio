export default function Title({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      {children ? (
        <h1 className="mt-2.5 font-bold text-3xl text-secondary flex items-center">
          <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-6.5 after:h-1 after:bg-orange-500">
            {children}
          </span>
          {title}
        </h1>
      ) : (
        <h1 className="mt-2.5 font-bold text-3xl text-secondary relative after:content-[''] after:absolute after:left-0 after:-bottom-3 after:w-20 after:h-2 after:bg-orange-500">
          {title}
        </h1>
      )}
    </>
  );
}
