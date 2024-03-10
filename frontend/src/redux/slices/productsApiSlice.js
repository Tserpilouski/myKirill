import { SEARCH_PRODUCT_URL } from '../../utils/constants';
import apiSlice from './apiSlice';

export const productsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		searchProduct: builder.query({
			query: (query) => ({ url: `${SEARCH_PRODUCT_URL}/${query}`}),
			credentials: 'include',
			keepUnusedDataFor: 5,
		}),
	}),
});

export const { useSearchProductQuery } = productsApiSlice;
