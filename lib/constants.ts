
export interface Filter {
  title: string;
  name: string;
  color: string;
  items: { [key: string]: string }[];
}

const filtersEn: Filter[] = [
  {
    title: 'Categories',
    name: 'categories_names',
    color: 'green',
    items: []
  },
  {
    title: 'Level',
    name: 'level',
    color: 'red',
    items: [
      { bigener: 'Beginner' },
      { intermediate: 'Intermediate' },
      { advanced: 'Advanced' }
    ]
  },
  {
    title: 'Price',
    name: 'free_or_paid',
    color: 'blue',
    items: [
      { all: 'All' },
      { free: 'Free' },
      { paid: 'Paid' }
    ]
  },
  {
    title: 'Duration',
    name: 'duration',
    color: 'yellow',
    items: [
      { f0t1: '0-1 hour' },
      { f1t3: '1-3 hours' },
      { f3t6: '3-6 hours' },
      { f6t12: '6-12 hours' },
      { f12t50: '12+ hours' }
    ]
  },
  {
    title: 'Language',
    name: 'language',
    color: 'purple',
    items: [
      { en: 'English' },
      { ar: 'Arabic' },
      { fr: 'French' },
      { sp: 'Spanish' }
    ]
  }
];

// Define Arabic translations
const filtersAr: Filter[] = [
  {
    title: 'الفئات',
    name: 'categories_names',
    color: 'green',
    items: []
  },
  {
    title: 'المستوى',
    name: 'level',
    color: 'red',
    items: [
      { bigener: 'مبتدئ' },
      { intermediate: 'متوسط' },
      { advanced: 'متقدم' }
    ]
  },
  {
    title: 'السعر',
    name: 'free_or_paid',
    color: 'blue',
    items: [
      { all: 'الكل' },
      { free: 'مجاني' },
      { paid: 'مدفوع' }
    ]
  },
  {
    title: 'المدة',
    name: 'duration',
    color: 'yellow',
    items: [
      { f0t1: '0-1 ساعة' },
      { f1t3: '1-3 ساعات' },
      { f3t6: '3-6 ساعات' },
      { f6t12: '6-12 ساعة' },
      { f12t50: '12+ ساعة' }
    ]
  },
  {
    title: 'اللغة',
    name: 'language',
    color: 'purple',
    items: [
      { en: 'الإنجليزية' },
      { ar: 'العربية' },
      { fr: 'الفرنسية' },
      { sp: 'الإسبانية' }
    ]
  }
];

const getLocaleFromCookie = (): string => {
  const cookies = document.cookie.split('; ');
  const localeCookie = cookies.find((cookie) => cookie.startsWith('NEXT_LOCALE='));
  return localeCookie ? localeCookie.split('=')[1] : 'en'; 
};

export const filtersInit: Filter[] = getLocaleFromCookie() === 'ar' ? filtersAr : filtersEn;