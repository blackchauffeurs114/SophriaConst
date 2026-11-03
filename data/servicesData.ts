import flooringData from './flooringServices.json';
import renovationData from './renovationServices.json';

export interface ServiceDetail {
  slug: string;
  category: 'flooring' | 'renovation';
  categoryLabel: string;
  title: string;
  lead: string;
  image: string;
  paras: string[];
  specs: { label: string; value: string }[];
  bestFor: string[];
}

export const flooringServices: Record<string, ServiceDetail> = Object.fromEntries(
  Object.entries(flooringData).map(([key, item]) => [
    key,
    {
      ...item,
      category: 'flooring',
      categoryLabel: 'Flooring System',
    } as ServiceDetail,
  ])
);

export const renovationServices: Record<string, ServiceDetail> = Object.fromEntries(
  Object.entries(renovationData).map(([key, item]) => [
    key,
    {
      ...item,
      category: 'renovation',
      categoryLabel: 'Architectural Renovation',
    } as ServiceDetail,
  ])
);

export const allServices: Record<string, ServiceDetail> = {
  ...flooringServices,
  ...renovationServices,
};

export const flooringList = Object.values(flooringServices);
export const renovationList = Object.values(renovationServices);
export const allServicesList = Object.values(allServices);
