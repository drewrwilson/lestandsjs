lestandsjs
==========

This branch is for storing and sharing relevant files. Only store static files here.

#Reset database to example data
Use leStands-schema.sql to drop all tables and recreate schema:

`heroku pg:psql < leStands-schema.sql`

Then use leStands-data.sql to insert example data:

`heroku pg:psql < leStands-data.sql`
