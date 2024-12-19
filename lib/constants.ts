
export interface Filter {
  title: string;
  name: string;
  color: string;
  items: { [key: string]: string }[];
}

export const filtersInit: Filter[] = [
  {
    title: 'categories',
    name: 'categories_names',
    color: 'green',
    items: []
  },
  {
    title: 'level',
    name: 'level',
    color: 'red',
    items: [
      {beginer: "beginner"}, 
      {medium: "intermediate"}, 
      {advanced: "advanced"}
    ],
  },
  {
    title: 'price',
    name: 'free_or_paid',
    color: 'blue',
    items: [
      {all: 'all'}, 
      {free: 'free'}, 
      {paid: 'paid'}
    ]
  },
  {
    title: 'duration',
    name: 'duration',
    color: 'yellow',
    items: [
      {f0t1: '0-1 hour'}, 
      {f1t3: '1-3 hours'}, 
      {f3t6: '3-6 hours'}, 
      {f6t12: '6-12 hours'}, 
      {f12t50: '12+ hour'}
    ]
  },
  {
    title: 'language',
    name: 'language',
    color: 'purple',
    items: [
      {en: 'English'}, 
      {ar: 'Arabic'}, 
      {fr: 'French'}, 
      {sp: 'Spanish'}
    ]
  }
]