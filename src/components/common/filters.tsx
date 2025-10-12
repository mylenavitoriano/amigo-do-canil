"use client";

import { useState } from "react";
import { Badge } from "../ui/badge";

const Filters = () => {
  const [listFilters, setListFilters] = useState<string[]>([]);

  const filters = ["Cachorros", "Gatos", "Macho", "Fêmea"];

  const handleToggleFilter = (filter: string) => {
    setListFilters(
      (prev) =>
        prev.includes(filter)
          ? prev.filter((item) => item !== filter) // remove se já estiver
          : [...prev, filter] // adiciona se não estiver
    );
  };

  return (
    <div className="flex gap-2 flex-wrap">
      {filters.map((filter) => {
        const isActive = listFilters.includes(filter);
        return (
          <Badge
            key={filter}
            variant={isActive ? "default" : "outline"}
            className="text-sm md:text-lg cursor-pointer select-none"
            onClick={() => handleToggleFilter(filter)}
          >
            {filter}
          </Badge>
        );
      })}
    </div>
  );
};

export default Filters;
