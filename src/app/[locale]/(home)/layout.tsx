type Props = {
  children?: React.ReactNode;
};

export default async function LayoutStandard({ children }: Props) {
  return (
    <div className="flex h-screen">
      <div
        className="md:flex flex-1 flex-col bg-white overflow-x-hidden relative"
        id="layout-content"
      >
        {children}
      </div>
    </div>
  );
}
