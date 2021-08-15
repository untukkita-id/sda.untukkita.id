export default function SectionGrub({ children, title }) {
  //  const { children } = props;
  // const { title } = props;
  return (
    <div className="py-4 px-8">
      <h2 className="text-2xl font-bold">{title}</h2>
      {children}
    </div>
  );
}
