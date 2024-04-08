import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ListItem } from "./list-item";
import { useTranslation } from "react-i18next";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "_about_me",
    href: "#about_me",
    description: "Find out a little bit more about me",
  },
  {
    title: "_portfolio",
    href: "#portfolio",
    description: "See a bit more of my work",
  },
  {
    title: "_skills",
    href: "#skills",
    description: "Here are my main hard and soft skills",
  },
  {
    title: "_career",
    href: "#career",
    description:
      "Take a look at some of my achievements that have brought me this far",
  },
  {
    title: "_contact",
    href: "#contact",
    description: "Let's talk about me for a moment. I have a lot to tell you",
  },
];

export const Menu = () => {
  const { t } = useTranslation();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="md:hidden">
          <NavigationMenuTrigger>{t('More')}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((item, index) => (
                <ListItem key={index} title={t(item.title)} href={item.href}>
                  {t(item.description)}.
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Desktop */}
        <div className="hidden md:flex w-full gap-5">
          {components.map((item, index) => (
            <NavigationMenuItem className="text-[#607B96] duration-150 hover:dark:text-white hover:text-[#011627]">
              <NavigationMenuLink key={index} href={item.href}>
                {t(item.title)}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
