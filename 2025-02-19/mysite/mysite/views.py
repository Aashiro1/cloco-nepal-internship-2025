from django.shortcuts import render
from books.models import Book    # assuming you have a Book model

def book_list(request):
    books = Book.objects.all()  # Fetch all books from the database
    return render(request, 'book_list.html', {'books': books})