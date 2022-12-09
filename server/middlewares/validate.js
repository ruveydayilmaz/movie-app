const validate = (schema) => (req, res, next) => {
  const options = {
    errors: {
      wrap: {
        label: ''
      }
    }
  };

  const { error, value } = schema.validate(req.body, options);
  
  if (error) {
    const errorMessage = error.details?.map((detail) => detail.message).join(', ');
    res.status(400).json({
        success: false,
        data: null,
        message: errorMessage
    });
    return;
  }
  Object.assign(req, value);
  return next();
};

module.exports = validate;