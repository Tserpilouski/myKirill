import asyncHandler from '../middleware/asyncHandler.js';
import searchEdamamAPI from '../utils/searchEdamamAPI.js';

//@desk fetch all products
//@route GET /api/products
//@access Public
export const searchProductApi = asyncHandler(async (req, res) => {
	const query = req.body.query;
	try {
		const apiRes = await searchEdamamAPI(query);
    const result = apiRes.hints || []
		res.status(200).json(result);
	} catch (error) {
		res.status(404);
		throw new Error(error);
	}

});
