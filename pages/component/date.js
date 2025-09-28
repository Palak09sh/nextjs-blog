import { parserISO, format }from 'date-fns';
export default function Date({ dateString }) {
    const date = parserISO(dateString)
    return<time dateTime = {dateString}>{format(date,'LLLL d, yyyy')}</time>
}