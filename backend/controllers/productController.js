import asyncHandler from '../middleware/asyncHandler.js';
import searchEdamamAPI from '../utils/searchEdamamAPI.js';

//@desk fetch all products
//@route GET /api/products
//@access Public
export const searchProductApi = asyncHandler(async (req, res) => {
	const query = req.params.query;
  console.log(req.params)
	try {
		const apiRes = await searchEdamamAPI(query);
    console.log(apiRes)
    const result = apiRes.hints || []
		res.status(200).json(result);
	} catch (error) {
		res.status(404);
		throw new Error(error);
	}
});
