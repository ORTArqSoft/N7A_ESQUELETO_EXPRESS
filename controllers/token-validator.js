const tokenValidator = async function authenticateToken(req, res, next) {
	/*======== bearer must be verified 
      aca se puede validar el bearer token
    
    */
	next();
};

module.exports = {
	tokenValidator,
};
