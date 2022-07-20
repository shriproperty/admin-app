import moment from 'moment';

const useFormatDate = () => {
	/**
	 * @param {Date | string} unFormattedDate unformatted date
	 * @return {string | null} if unFormattedDate cannot be converted to `Date` than will return null else formattedDate
	 */
	return (unFormattedDate: Date | string) => {
		const date = new Date(unFormattedDate).getTime();

		if (!date) return '------';

		const formattedDate = moment(date).format('DD/MM/YY');

		return formattedDate;
	};
};

export default useFormatDate;
