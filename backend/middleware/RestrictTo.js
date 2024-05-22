// admin issues

export const RestrictTo = async (req,res, next) => {
    const role = req.user.role;

    if (role !== "admin") {
        return res.status(403).json({ error: "You are not authorized to access this resource." });
    } else {
        next(); // Call next middleware in the chain
    }
};

