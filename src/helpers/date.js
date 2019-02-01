import moment from 'moment';

export const parseDateFromCraftTimestamp = timestamp => {
    return new moment(timestamp * 1000);
}