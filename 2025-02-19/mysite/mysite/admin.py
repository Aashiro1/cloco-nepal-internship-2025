from django.contrib import admin
from books.models import *

admin.site.register(Authors)
admin.site.register(Books)
admin.site.register(BooksCategories)
admin.site.register(Categories)
admin.site.register(Customers)
admin.site.register(Inventory)
admin.site.register(OrderDetails)
admin.site.register(Orders)
admin.site.register(Payments)
admin.site.register(Suppliers)
