type Props = {
  children?: React.ReactNode;
};

export default async function LayoutStandard({ children }: Props) {
  return (
    <div className="flex h-screen">
        {children}
    </div>
  );
}
