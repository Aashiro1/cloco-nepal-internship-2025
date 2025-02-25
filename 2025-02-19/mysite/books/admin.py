# Register your models here.
from django.contrib import admin
from .models import Authors, Books, Categories, Customers, Inventory, OrderDetails, Orders, Payments, Suppliers

admin.site.register(Authors)
admin.site.register(Books)
admin.site.register(Categories)
admin.site.register(Customers)
admin.site.register(Inventory)
admin.site.register(OrderDetails)
admin.site.register(Orders)
admin.site.register(Payments)
admin.site.register(Suppliers)
