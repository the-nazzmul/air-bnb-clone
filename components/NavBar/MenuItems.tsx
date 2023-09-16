"use client";

interface MenuItemProps {
  OnClick: () => void;
  label: string;
}

const MenuItems: React.FC<MenuItemProps> = ({ OnClick, label }) => {
  return (
    <div
      className="px-4 py-3 hover:bg-neutral-100 transiton font-semibold"
      onClick={OnClick}
    >
      {label}
    </div>
  );
};

export default MenuItems;
