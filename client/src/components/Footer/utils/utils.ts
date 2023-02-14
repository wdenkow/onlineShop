import {
    HistoryToggleOff,
    Map,
    PeopleAlt,
    Public,
    SupportAgent,
    SvgIconComponent,
} from '@mui/icons-material';

export interface IFooterInfoItem {
    image: SvgIconComponent;
    title: string;
    description: string;
}

export const FOOTER_INFO_ITEMS: IFooterInfoItem[] = [
    {
        image: PeopleAlt,
        title: '270 000',
        description: 'Клиентов в месяц',
    },
    {
        image: Map,
        title: '33',
        description: 'Пиццерии отрыто',
    },
    {
        image: Public,
        title: '93',
        description: 'Страны',
    },
    {
        image: SupportAgent,
        title: '24/7',
        description: 'Доставляем',
    },
    {
        image: HistoryToggleOff,
        title: '11:00-23:00',
        description: 'Время работы пиццерии',
    },
];
