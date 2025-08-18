"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Languages } from "lucide-react";

export function LanguageSelector() {
  const t = useTranslations("common");
  const locale = useLocale();
  const router = useRouter();
  const [currentLocale, setCurrentLocale] = useState(locale);

  const handleLocaleChange = (newLocale: string) => {
    setCurrentLocale(newLocale);
    router.push(`/${newLocale}`);
  };

  return (
    <div className="flex items-center gap-2">
      <Languages className="h-4 w-4" />
      <Select value={currentLocale} onValueChange={handleLocaleChange}>
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder={t("select_language")} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">{t("english")}</SelectItem>
          <SelectItem value="pt-BR">{t("portuguese")}</SelectItem>
          <SelectItem value="es">{t("spanish")}</SelectItem>
          <SelectItem value="zh">{t("chinese")}</SelectItem>
          <SelectItem value="ja">{t("japanese")}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
