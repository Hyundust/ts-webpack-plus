// Importing necessary dependencies and modules
import { Mods, classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleViewSelector.module.scss";
import { useTranslation } from "react-i18next";
import { ArticleView } from "entyes/Article/model/types/article";
import ListIcon from "shared/assets/icons/list-24-24.svg";
import TiledIcon from "shared/assets/icons/tiled-24-24.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";

// Defining the props interface for the ArticleViewSelector component
export interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewChange?: (view: ArticleView) => void;
}

export const ArticleViewSelector = ({ className, view, onViewChange }: ArticleViewSelectorProps) => {
  const { t } = useTranslation();

  // Function to handle the onClick event for changing the view
  const onClick = (newView: ArticleView) => () => {
    // Calling the onViewChange function if available, passing the newView as an argument
    onViewChange?.(newView);
  };


  // Array of objects representing different view types with their corresponding icons
  const viewType = [
    {
     
      view: ArticleView.SMALL,
      icon: ListIcon,
    },
    {
      view: ArticleView.BIG,
      icon: TiledIcon,
    },
  ];
  const mods: Mods = {
    [cls.notSelected]: viewType.some(type => type.view !== view),
  };
  
  // Rendering the component
  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {/* Mapping over the viewType array and rendering a Button component for each view type */}
      {viewType.map((type) => (
        <Button theme={ThemeButton.CLEAR} onClick={onClick(type.view)}>
          <Icon Svg={type.icon} className={classNames("", mods, [className])} />
        </Button>
      ))}
    </div>
  );
};
