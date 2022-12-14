function PageTemplate({ children, pageTitle }) {
  return (
    <main className="flex flex-col bg-gray-100 rounded-md h-full">
      <div className="flex justify-center items-center pt-2">
        <h1 className="text-3xl font-bold">{pageTitle}</h1>
      </div>
      <div className="h-full">{children}</div>
    </main>
  );
}

export default PageTemplate;
