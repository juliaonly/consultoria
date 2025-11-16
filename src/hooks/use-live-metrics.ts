"use client";

import { useEffect, useState } from "react";
import { Metric } from "@/types/content";

export function useLiveMetrics(period: "year" | "quarter") {
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchMetrics = async () => {
      try {
        const response = await fetch(`/api/metrics?period=${period}`);
        const data = await response.json();
        if (isMounted) {
          setMetrics(data.metrics ?? []);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    setLoading(true);
    fetchMetrics();
    const interval = setInterval(fetchMetrics, 15000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [period]);

  return { metrics, loading };
}
