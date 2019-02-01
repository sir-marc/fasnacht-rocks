import moment from 'moment';
import { pad } from 'helpers/string';

export const parseDateFromCraftTimestamp = timestamp => {
    return new moment(timestamp * 1000);
}