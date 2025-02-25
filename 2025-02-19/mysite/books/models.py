from django.db import models

# Model for authors table
class Authors(models.Model):
    name = models.CharField(max_length=255)


# Model for books table
class Books(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey('Authors', on_delete=models.CASCADE)
    category = models.ForeignKey('Categories', on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)



# Model for categories table
class Categories(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()

    class Meta:
        db_table = 'categories'  # Use actual table name if it differs


# Model for customers table
class Customers(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)



# Model for inventory table
class Inventory(models.Model):
    book = models.ForeignKey('Books', on_delete=models.CASCADE)
    quantity = models.IntegerField()



# Model for order_details table
class OrderDetails(models.Model):
    order = models.ForeignKey('Orders', on_delete=models.CASCADE)
    book = models.ForeignKey('Books', on_delete=models.CASCADE)
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)



# Model for orders table
class Orders(models.Model):
    customer = models.ForeignKey('Customers', on_delete=models.CASCADE)
    order_date = models.DateTimeField(auto_now_add=True)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)



# Model for payments table
class Payments(models.Model):
    order = models.ForeignKey('Orders', on_delete=models.CASCADE)
    payment_date = models.DateTimeField(auto_now_add=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)


# Model for suppliers table
class Suppliers(models.Model):
    name = models.CharField(max_length=255)
    contact_info = models.TextField()

    def __str__(self):
        return self.name
