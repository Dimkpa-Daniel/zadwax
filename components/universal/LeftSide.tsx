import Image from "next/image";
import React, { useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoClose, IoSettingsOutline } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { TbClockHour3 } from "react-icons/tb";
import { FaRegStar, FaRegFolder } from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";

interface LeftSideProps {
  toggleSidebar: () => void;
  showSidebar: boolean;
  setShowSidebar: (show: boolean) => void;
}

const NAV_ITEMS = [
  { href: "/", label: "Home", Icon: GoHomeFill },
  { href: "/#", label: "Recents", Icon: TbClockHour3 },
  { href: "/#", label: "Starred", Icon: FaRegStar },
  { href: "/#", label: "Projects", Icon: FaRegFolder },
];

const BOTTOM_NAV_ITEMS = [
  { href: "/#", label: "Support", Icon: GrCircleInformation },
  { href: "/#", label: "Settings", Icon: IoSettingsOutline },
];

const NavItem = ({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: React.ElementType;
}) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-4 px-4 py-3 ${
        isActive ? "bg-primary50 rounded-[5px]" : "bg-transparent"
      }`}
    >
      <Icon
        size={24}
        className={isActive ? "text-primary700" : "text-gray-700"}
      />
      <h1
        className={`text-sm font-medium ${
          isActive ? "text-primary700" : "text-gray700"
        }`}
      >
        {label}
      </h1>
    </Link>
  );
};

const LeftSide: React.FC<LeftSideProps> = ({
  toggleSidebar,
  showSidebar,
  setShowSidebar,
}) => {
  const router = useRouter();

  useEffect(() => {
    setShowSidebar(false);
  }, [router.pathname]);

  const renderNavItems = useMemo(
    () =>
      NAV_ITEMS.map((item) => (
        <div
          key={item.href}
          className={item.label === "Starred" ? "border-b border-gray-200 pb-2 mb-2" : ""}
        >
          <NavItem {...item} />
        </div>
      )),
    []
  );
  
  const renderBottomNavItems = useMemo(
    () => BOTTOM_NAV_ITEMS.map((item) => <NavItem key={item.href} {...item} />),
    []
  );

  return (
    <div className="h-auto">
      <div
        className={`${
          showSidebar
            ? "lg:w-[300px] w-full fixed left-0 top-0 overflow-y-auto z-50 transition-transform"
            : "hidden lg:block lg:w-[300px]"
        } bg-white shadow-lg h-full`}
      >
        <div className="flex h-full">
          {/* Left side */}
          <div className="bg-primary600 w-[68px] pt-4 flex flex-col items-center gap-6">
            {[
              "/linkedin-logo.svg",
              "/figma-logo.svg",
              "/figma-logo.svg",
              "/add-icon.svg",
            ].map((src, index) => (
              <Image key={index} src={src} width={36} height={40} alt="icon" />
            ))}
          </div>

          {/* Right side */}
          <div className="pt-4 w-full px-4 h-full bg-white shadow-2xl border-r border-gray-200">
            <div className="flex items-center justify-between ">
              <Image src="/logo.svg" width={152} height={20} alt="logo" />
              <IoClose
                size={40}
                onClick={toggleSidebar}
                className="lg:hidden cursor-pointer"
              />
            </div>

            <div className="mb-4 mt-8 ">{renderNavItems}</div>

            <div className="lg:absolute lg:bottom-0">
              {renderBottomNavItems}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
