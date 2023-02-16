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
        description: 'footer.clientsPerMons',
    },
    {
        image: Map,
        title: '33',
        description: 'footer.ourShops',
    },
    {
        image: Public,
        title: '93',
        description: 'footer.ourShopsInCountries',
    },
    {
        image: SupportAgent,
        title: '24/7',
        description: 'footer.delivery',
    },
    {
        image: HistoryToggleOff,
        title: '11:00-23:00',
        description: 'footer.openingTime',
    },
];
