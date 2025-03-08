import jwt from  "jsonwebtoken";
import User  from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
    try {
        
        const token = req.cookies.jwt;  

        console.log("Received Cookies:", req.cookies);

        if (!token) {
            return res.status(401).json({ message: "Access denied. No token provided." });
        }

        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ message: "Invalid token." });
        }

        
        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        
        req.user = user;
        next();

    } catch (error) {
        console.log("Error in protected middleware:",error.message);
        res.status(500).json({message :"Internal server error"});
    }
};   
export { protectRoute };


