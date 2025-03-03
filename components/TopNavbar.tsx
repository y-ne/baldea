// components/TopNavbar.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// Service items for dropdown
const serviceItems = [
    {
        title: "Gacha Game Boosting",
        href: "/gachapon",
        description: "Professional boosting services for gacha games.",
    },
];

// ListItem component for dropdown content
const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className,
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";

export function TopNavbar() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
            <div className="container flex h-16 items-center">
                {/* Logo section on the far left */}
                <div className="flex-shrink-0 mr-6">
                    <Link
                        href="/"
                        className="flex items-center justify-center h-16"
                    >
                        <div className="relative h-full overflow-hidden">
                            <Image
                                src="/baldea.jpg"
                                alt="Baldea Logo"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="h-full w-auto object-contain"
                                priority
                            />
                        </div>
                    </Link>
                </div>

                {/* Navigation Menu after the logo */}
                <NavigationMenu>
                    <NavigationMenuList>
                        {/* Home */}
                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink
                                    className={cn(
                                        navigationMenuTriggerStyle(),
                                        pathname === "/"
                                            ? "text-primary font-medium"
                                            : "text-muted-foreground",
                                    )}
                                >
                                    Home
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        {/* Team */}
                        <NavigationMenuItem>
                            <Link href="/team" legacyBehavior passHref>
                                <NavigationMenuLink
                                    className={cn(
                                        navigationMenuTriggerStyle(),
                                        pathname === "/team"
                                            ? "text-primary font-medium"
                                            : "text-muted-foreground",
                                    )}
                                >
                                    Team
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        {/* Services with dropdown */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger
                                className={cn(
                                    pathname?.startsWith("/gachapon")
                                        ? "text-primary font-medium"
                                        : "text-muted-foreground",
                                )}
                            >
                                Service
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4">
                                    {serviceItems.map((service) => (
                                        <ListItem
                                            key={service.title}
                                            title={service.title}
                                            href={service.href}
                                        >
                                            {service.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    );
}

export default TopNavbar;
