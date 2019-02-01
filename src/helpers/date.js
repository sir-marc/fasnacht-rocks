import { pad } from 'helpers/string'

export const parseDateFromCraftTimestamp = timestamp => {
    const date = new Date(timestamp * 1000);
    const day = date.getDate()
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${pad(day)}.${pad(month)}.${year}`
}