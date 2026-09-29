import React, { useEffect, useState } from 'react';
import { Menu, Shield, Sparkles, Volume2, VolumeX, X } from 'lucide-react';
import { useRouter, Link } from '@/router';
import { soundFx } from '@/lib/audio-effects';

interface SiteHeaderProps {
  onOpenAi: () => void;
  onOpenViewer?: () => void;
  activeSection?: string;
}

const navItems = [
  { href: '/ban-word', label: 'Bản Word' },
  { href: '/doi-ngu', label: 'Thành viên' },
  { href: '/dien-dan', label: 'Cộng đồng' },
  { href: '/nen-tang-ai', label: 'Nền tảng AI' },
  { href: '/tin-tuc', label: 'Tin tức' },
];

export function SiteHeader({ onOpenAi }: SiteHeaderProps) {
  const [soundActive, setSoundActive] = useState(() => soundFx.isEnabled());
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => setMobileOpen(false), [pathname]);

  const handleToggleSound = () => setSoundActive(soundFx.toggle());
  const handleAiClick = () => { soundFx.playChime(); onOpenAi(); };

  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <Link href="/" className="brand" aria-label="Về trang chủ" onClick={() => soundFx.playTap()}>
          <div className="brand-mark overflow-hidden rounded-full border border-[#E5C158]/60 shadow-[0_0_10px_rgba(229,193,88,0.35)] bg-[#071120] p-0.5">
            <img src="/guardian-lion-clean-navy.jpg" alt="Vương Huy Sư Tử Navy" className="w-7 h-7 rounded-full object-cover scale-110" />
          </div>
          <span><strong>BẢO VỆ NHÀ ĐẦU TƯ</strong><small className="text-[#E5C158]">SỔ NHẬT KÝ HOÀNG GIA · KHOA LUẬT HVNH</small></span>
        </Link>
        <span className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-serif font-bold bg-[#0A1C38] text-[#F5D061] border border-[#E5C158]/60 shadow-[0_0_12px_rgba(229,193,88,0.25)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] animate-pulse"></span>
          📘 Sổ Nhật Ký Navy & Vàng Kim
        </span>

        <nav className="desktop-nav" aria-label="Điều hướng chính">
          {navItems.map((item) => <Link key={item.href} href={item.href} className={pathname === item.href ? 'is-active' : ''} onClick={() => soundFx.playTap()}>{item.label}</Link>)}
        </nav>

        <div className="header-actions">
          <button onClick={handleToggleSound} className="header-icon-button" title={soundActive ? 'Tắt âm thanh' : 'Bật âm thanh'} aria-label={soundActive ? 'Tắt âm thanh' : 'Bật âm thanh'}>
            {soundActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
          <button onClick={handleAiClick} className="orange-button header-ai-button"><Sparkles className="w-4 h-4" /><span>Hỏi AI</span></button>
          <button onClick={() => setMobileOpen((open) => !open)} className="mobile-menu-button" aria-label="Mở điều hướng" aria-expanded={mobileOpen}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && <nav className="mobile-nav" aria-label="Điều hướng di động">
        <div className="site-shell">{navItems.map((item) => <Link key={item.href} href={item.href} className={pathname === item.href ? 'is-active' : ''}>{item.label}</Link>)}</div>
      </nav>}
    </header>
  );
}
