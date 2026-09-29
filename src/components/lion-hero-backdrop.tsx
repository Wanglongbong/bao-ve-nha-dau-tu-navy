import React from 'react';

/**
 * LionHeroBackdrop:
 * HÌNH TƯỢNG SƯ TỬ HOÀNG GIA BAN ĐẦU (The Original Heraldic Guardian Lion)
 * - Huy hiệu hoàng gia với vương miện, vòng nguyệt quế và nét viền cam (#F97316 / #EA580C)
 * - Ruột màu cam nhạt bán trong suốt tinh tế
 * - Hiệu ứng mix-blend-mode multiply giúp nền trắng tàng hình hoàn toàn trên nền kem sáng
 * - Vị trí căn phải thanh lịch, không đè lấn lên chữ, kết hợp vầng hào quang hổ phách
 */
export function LionHeroBackdrop() {
  return (
    <div className="lion-grand-backdrop" aria-hidden="true">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Huy hiệu Sư tử hoàng gia Midnight Navy: Vương miện, vòng nguyệt quế, viền navy đậm & ruột xanh saphia nhạt */}
        <img
          src="/guardian-lion-crest-navy.png"
          alt="Huy hiệu Sư tử bảo hộ hoàng gia Midnight Navy với vương miện, vòng nguyệt quế, nét viền xanh navy và ruột xanh saphia nhạt"
          className="lion-grand-backdrop-img drop-shadow-[0_0_20px_rgba(229,193,88,0.45)]"
          loading="eager"
        />
      </div>
    </div>
  );
}
