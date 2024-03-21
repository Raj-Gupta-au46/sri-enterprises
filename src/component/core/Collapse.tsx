const Collapse = ({
  open,
  children,
}: {
  open: boolean;
  children?: JSX.Element | JSX.Element[];
}) => {
  return (
    <div
      className={`grid transition-all duration-200 ease-linear ${
        open ? "grid-rows-[1fr] " : "grid-rows-[0fr] "
      }`}
    >
      <div className="overflow-hidden">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Collapse;
