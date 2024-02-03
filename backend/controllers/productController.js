import asyncHandler from '../middleware/asyncHandler.js';

//@desk fetch all products
//@route GET /api/products
//@access Public
export const searchProductApi = asyncHandler(async (req, res) => {
	const query = req.body.query;

	res.status(200).json(query);

	// if (product) {
	// 	res.status(200).json(product);
	// } else {
	// 	res.status(404).json({ message: 'Product not find' });
	// }
});
