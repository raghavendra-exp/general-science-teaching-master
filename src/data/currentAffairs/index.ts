import { CurrentAffairsItem } from '../../types';
import { generalCurrentAffairs } from './generalCurrentAffairs';
import { educationNews } from './educationNews';

export const allCurrentAffairs: CurrentAffairsItem[] = [
  ...generalCurrentAffairs,
  ...educationNews
];

export const filterCurrentAffairs = (
  timeframe: 'all' | 'daily' | 'weekly' | 'monthly' | '6month' | '12month',
  category: string,
  isEducationOnly = false
): CurrentAffairsItem[] => {
  return allCurrentAffairs.filter(item => {
    if (isEducationOnly && !item.isEducationLab) {
      return false;
    }
    if (category !== 'all' && item.category.toLowerCase() !== category.toLowerCase()) {
      return false;
    }
    // Timeframe filtering based on mock reference date 2026-10-05
    const itemDate = new Date(item.date).getTime();
    const refDate = new Date('2026-10-05').getTime();
    const diffDays = (refDate - itemDate) / (1000 * 3600 * 24);

    if (timeframe === 'daily' && diffDays > 7) return false;
    if (timeframe === 'weekly' && diffDays > 14) return false;
    if (timeframe === 'monthly' && diffDays > 35) return false;
    if (timeframe === '6month' && diffDays > 185) return false;
    if (timeframe === '12month' && diffDays > 370) return false;

    return true;
  });
};
