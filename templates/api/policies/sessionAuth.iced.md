
SessionAuth
===========

Simple policy to allow any authenticated user.
Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
See [Sails Docs](http://sailsjs.org/#!documentation/policies) for more information.

If the user is allowed, she can proceed to the next policy, or if this is the last policy, the controller.
Else user is not allowed (default res.forbidden() behavior can be overridden in `config/403.js`)      

    module.exports = (req, res, next) ->
        
      if req.session.authenticated then next() 
      else res.forbidden "You are not permitted to perform this action."
