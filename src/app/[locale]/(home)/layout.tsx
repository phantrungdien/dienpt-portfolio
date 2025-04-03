type Props = {
  children?: React.ReactNode;
};

export default async function LayoutStandard({ children }: Props) {
  return (
    <div className="flex flex-col justify-center">
        {children}
    </div>
  );
}
