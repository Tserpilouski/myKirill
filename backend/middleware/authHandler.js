// import jwt from 'jsonwebtoken';
// import asyncHandler from './asyncHandler.js';
// import User from '../models/userModel.js';

// //Protect routes / protect middleware
// export const protect = asyncHandler(async (req, res, next) => {
// 	let token;
  
// 	//read jwt from cookie
// 	token = req.cookies.jwt;

// 	if (token) {
// 		try {
// 			const decoded = jwt.verify(token, process.env.JWT_SECRET);
// 			const userId = decoded.userId;

// 			req.user = await User.findById(userId).select('-password');
			
// 			next();
// 		} catch (error) {
// 			res.status(401);
// 			throw new Error('Not authorized, token failed');
// 		}
// 	} else {
// 		res.status(401);
// 		throw new Error('Not authorized, no token');
// 	}
// });

// //Admin middleware
// export const admin = (req, res, next) => {
// 	if (req.user && req.user.isAdmin) {
// 		next();
// 	} else {
// 		res.status(401);
// 		throw new Error('Not authorized as admin');
// 	}
// };
