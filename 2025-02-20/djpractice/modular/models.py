from django.db import models

CATEGORY = {
    ('DRAMA','Drama'),
    ('ACTION','Action')
}
# Create your models here.
class Listings(models.Model):
    class Meta:
        verbose_name = "Listings"
        verbose_name_plural = "Listings"

    name = models.CharField(max_length=30)
    category = models.CharField(choices= CATEGORY, max_length=6)

    def _str_(self):
        return self.name
