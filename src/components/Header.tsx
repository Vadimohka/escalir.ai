"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent, type PointerEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Bot,
  ChevronDown,
  Compass,
  HeartPulse,
  Landmark,
  Menu,
  Network,
  Plane,
  Radio,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { headerNavigation, type HeaderNavigationGroup } from "@/lib/header-navigation";
import TelegramLink from "./TelegramLink";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { LOCALE } from "@/lib/locale";
import styles from "./Header.module.css";

const menuIcons = {
  "/platform/": Blocks,
  "/agents/": Bot,
  "/systems/": Workflow,
  "/ai-gateway/": Network,
  "/deployment/": Rocket,
  "/ai-transformation/": Compass,
  "/industries/banking/": Landmark,
  "/industries/telecommunication/": Radio,
  "/industries/utilities/": Zap,
  "/industries/healthcare/": HeartPulse,
  "/industries/retail/": ShoppingBag,
  "/industries/insurance/": ShieldCheck,
  "/industries/airlines/": Plane,
};

function GroupContent({ group }: { group: HeaderNavigationGroup }) {
  return (
    <div className={styles.groupContent + " " + styles[group.id]}>
      <div className={styles.brandRail} aria-hidden="true">
        <img src="/brand/escalir-symbol.svg" alt="" width={30} height={38} />
        <span>{group.id === "platform" ? "01" : "02"}</span>
        <i />
      </div>
      <div className={styles.linkGrid}>
        {group.links.map(link => {
          const Icon = menuIcons[link.href as keyof typeof menuIcons] ?? ArrowRight;
          return (
            <a href={link.href} className={styles.menuLink} key={link.href}>
              <span className={styles.menuIcon}><Icon size={19} strokeWidth={1.5} aria-hidden="true" /></span>
              <span className={styles.menuCopy}>
                <span>{link.title}</span>
                {link.description && <small>{link.description}</small>}
              </span>
              <ArrowUpRight className={styles.menuArrow} size={17} strokeWidth={1.5} aria-hidden="true" />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default function Header({ variant = "overlay", showAnnouncement = true }: { variant?: "overlay" | "light"; showAnnouncement?: boolean }) {
  const header = useRef<HTMLElement>(null);
  const announcement = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoverOpened = useRef<HTMLDetailsElement | null>(null);
  const keyboardInput = useRef(false);
  const [scrolled, setScrolled] = useState(false);

  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }

  function closeMenus() {
    cancelClose();
    header.current?.querySelectorAll<HTMLDetailsElement>("details[open]").forEach(menu => { menu.open = false; });
    hoverOpened.current = null;
  }

  useEffect(() => {
    const root = header.current;
    if (!root) return;
    const onScroll = () => {
      const announcementHeight = announcement.current?.offsetHeight ?? 0;
      root.style.setProperty("--visible-announcement-height", Math.max(0, announcementHeight - window.scrollY) + "px");
      setScrolled(window.scrollY > announcementHeight);
    };
    const onPointerDown = (event: globalThis.PointerEvent) => {
      keyboardInput.current = false;
      if (!root.contains(event.target as Node)) closeMenus();
    };
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      keyboardInput.current = true;
      if (event.key !== "Escape") return;
      const open = Array.from(root.querySelectorAll<HTMLDetailsElement>("[data-header-disclosure][open]"));
      if (!open.length) return;
      const active = open.find(menu => menu.contains(document.activeElement)) ?? open[0];
      closeMenus();
      active.querySelector<HTMLElement>(":scope > summary")?.focus();
      event.preventDefault();
    };
    const onFocusOut = (event: FocusEvent) => {
      // During a native Tab transition activeElement can briefly be BODY.
      // relatedTarget identifies the next control without closing its panel.
      if (event.relatedTarget instanceof Node) {
        if (!root.contains(event.relatedTarget)) closeMenus();
        return;
      }
      window.requestAnimationFrame(() => {
        if (!root.contains(document.activeElement)) closeMenus();
      });
    };
    const breakpoint = window.matchMedia("(max-width: 879px)");
    const onBreakpoint = () => { closeMenus(); onScroll(); };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    root.addEventListener("focusout", onFocusOut);
    breakpoint.addEventListener("change", onBreakpoint);
    return () => {
      cancelClose();
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      root.removeEventListener("focusout", onFocusOut);
      breakpoint.removeEventListener("change", onBreakpoint);
    };
  }, []);

  function openOnHover(event: PointerEvent<HTMLDetailsElement>) {
    if (event.pointerType !== "mouse" || !window.matchMedia("(hover: hover)").matches) return;
    cancelClose();
    const menu = event.currentTarget;
    const focused = header.current?.querySelector<HTMLDetailsElement>("[data-desktop-menu][open]:focus-within");
    if (keyboardInput.current && focused && focused !== menu) return;
    if (!menu.open) {
      header.current?.querySelectorAll<HTMLDetailsElement>("[data-header-disclosure][open]").forEach(other => { other.open = false; });
      menu.open = true;
      hoverOpened.current = menu;
    }
  }

  function closeAfterHover(event: PointerEvent<HTMLDetailsElement>) {
    if (event.pointerType !== "mouse") return;
    const menu = event.currentTarget;
    cancelClose();
    closeTimer.current = setTimeout(() => {
      if (keyboardInput.current && menu.contains(document.activeElement)) return;
      menu.open = false;
      if (hoverOpened.current === menu) hoverOpened.current = null;
    }, 160);
  }

  function onSummaryClick(event: MouseEvent<HTMLElement>) {
    const menu = event.currentTarget.parentElement as HTMLDetailsElement;
    // Pointer entry opens the panel before the click arrives. The first click
    // should keep that panel open; subsequent clicks retain native toggling.
    if (event.detail > 0 && hoverOpened.current === menu && menu.open) {
      event.preventDefault();
      hoverOpened.current = null;
    }
  }

  function onSummaryKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    cancelClose();
    const menu = event.currentTarget.parentElement as HTMLDetailsElement;
    menu.open = true;
    const links = menu.querySelectorAll<HTMLAnchorElement>("a[href]");
    (event.key === "ArrowDown" ? links[0] : links[links.length - 1])?.focus();
  }

  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    {showAnnouncement && <div ref={announcement} className={styles.announcement}>
      <span>Enterprise AI, from request to reviewed result</span>
      <a href="/deployment/">See how deployment works<ArrowRight size={14} aria-hidden="true" /></a>
    </div>}
    <header
      ref={header}
      data-site-header
      className={[styles.header, variant === "light" ? styles.light : "", showAnnouncement ? styles.withAnnouncement : "", scrolled ? styles.scrolled : ""].filter(Boolean).join(" ")}
      onClick={event => { if ((event.target as Element).closest("a[href]")) closeMenus(); }}
    >
      <div className={styles.bar}>
        <a className={styles.brand} href="/" aria-label="Escalir home">
          <img className={styles.whiteLogo} src="/brand/escalir-logo-white.svg" alt="Escalir" width={1431} height={341} />
          <img className={styles.blackLogo} src="/brand/escalir-logo.svg" alt="" width={1431} height={341} />
        </a>
        <nav className={styles.desktop} aria-label="Main navigation">
          {headerNavigation.map(group => (
            <details
              className={styles.dropdown}
              name="desktop-navigation"
              data-header-disclosure
              data-desktop-menu
              key={group.id}
              onPointerEnter={openOnHover}
              onPointerLeave={closeAfterHover}
            >
              <summary onClick={onSummaryClick} onKeyDown={onSummaryKeyDown}>{group.label}</summary>
              <div className={styles.panel}><div className={styles.panelInner}><GroupContent group={group} /></div></div>
            </details>
          ))}
        </nav>
        <div className={styles.actions}>
          <LanguageSwitcher locale={LOCALE} />
          <TelegramLink className={styles.contact}>Get in touch</TelegramLink>
          <details className={styles.mobile} name="desktop-navigation" data-header-disclosure data-mobile-navigation>
            <summary aria-label="Navigation menu">
              <Menu className={styles.menuIcon} size={24} strokeWidth={1.5} aria-hidden="true" />
              <X className={styles.closeIcon} size={24} strokeWidth={1.5} aria-hidden="true" />
            </summary>
            <nav aria-label="Mobile navigation" className={styles.mobilePanel}>
              {headerNavigation.map(group => (
                <details className={styles.mobileGroup} key={group.id} name="mobile-navigation-group">
                  <summary>{group.label}<ChevronDown size={20} strokeWidth={1.5} aria-hidden="true" /></summary>
                  <GroupContent group={group} />
                </details>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
    {variant === "light" && <div className={styles.spacer} aria-hidden="true" />}
  </>;
}

