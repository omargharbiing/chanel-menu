import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
} from "react";
import "./chanel-menu.css";
import Menu from "./components/menu";

const ChanelMenu = ({ menuData }) => {
  const [menuHistory, setMenuHistory] = useState([menuData]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerHeight, setContainerHeight] = useState(100);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationTimeoutRef = useRef(null);

  useEffect(() => {
    const menuContainers = document.querySelectorAll(".menu-container");
    const activeMenu = menuContainers[activeIndex];

    if (activeMenu) {
      setContainerHeight(activeMenu.scrollHeight);
    }
  }, [activeIndex]);

  const handleMenuClick = useCallback(
    (menuItem) => {
      if (menuItem.children && !isAnimating) {
        setIsAnimating(true);
        setMenuHistory([...menuHistory, menuItem.children]);
        animationTimeoutRef.current = setTimeout(() => {
          setActiveIndex((prev) => prev + 1);
          setIsAnimating(false);
        }, 0);
      }
    },
    [isAnimating]
  );

  const goBack = useCallback(() => {
    if (menuHistory.length > 1 && !isAnimating) {
      setIsAnimating(true);
      setActiveIndex(activeIndex - 1);
      animationTimeoutRef.current = setTimeout(() => {
        setMenuHistory((prev) => prev.slice(0, -1));
        setIsAnimating(false);
      }, 300);
    }
  }, [isAnimating, menuHistory]);

  useEffect(() => {
    return () => {
      clearTimeout(animationTimeoutRef.current);
    };
  }, []);

  const renderedMenus = useMemo(() => {
    return menuHistory.map((menuData, index) => (
      <Menu
        key={index}
        data={menuData}
        hasPrevious={index > 0}
        handleMenuClick={handleMenuClick}
        goBack={goBack}
        position={
          index < activeIndex
            ? "left"
            : index > activeIndex
            ? "right"
            : "active"
        }
        role="menu"
      />
    ));
  }, [menuHistory, activeIndex, handleMenuClick, goBack]);

  return (
    <div
      className="animated-menu-container"
      style={{ height: `${containerHeight}px` }}
    >
      {renderedMenus}
    </div>
  );
};

export default ChanelMenu;
