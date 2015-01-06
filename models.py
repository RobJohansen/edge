from google.appengine.ext import ndb
from google.appengine.api import users

# def current_account():
#     u = users.get_current_user()

#     if u:
#         return Account.query(Account.user_id == u.user_id()).get() or Account().put().get()

#     else:
#         return None

# def logout_url(uri):
#     return users.create_logout_url(uri)


# class Account(ndb.Model):
#     user_id = ndb.StringProperty(default='') #users.get_current_user().user_id())