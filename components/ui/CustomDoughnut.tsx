"use client";

import { TSkill } from '@/types/user';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import type { ChartData, ChartOptions } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutProps {
  options: ChartOptions<'doughnut'>;
  data: ChartData<'doughnut'>;
}

export default function CustomDoughnut(props: TSkill) {
    const {skill_name, proficiency, maximum_proficiency} = props
    const data: any = {
      labels: [],
      datasets: [
        {
          label: skill_name,
          data: [proficiency, maximum_proficiency - proficiency],
          backgroundColor: ["#ed810d", "#e6e6e6"],
          borderColor: ["white", "white"],
          borderWidth: 1,
          cutout: 60
        },
      ]
    }
    return <Doughnut data={data} />
}