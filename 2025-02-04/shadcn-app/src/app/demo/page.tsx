import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog";
  
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { useEffect, useState } from "react";
  // import Link from "next/link";
  
  // Define the Book type
  interface Book {
    id: string;
    name: string;
    author: string;
    price: string;
  }
  
  export default function Home() {
    const [books, setBooks] = useState<Book[]>([]);
    const [totalBooks, setTotalBooks] = useState("0");
    // const [showAll, setShowAll] = useState(true);
    const [newBook, setNewBook] = useState({ name: "", author: "", price: "" });
    const [editingBook, setEditingBook] = useState<Book | null>(null);
  
    useEffect(() => {
      fetchBooks();
    }, []);
  
    async function fetchBooks() {
      try {
        const response = await fetch("http://localhost:4000/books");
        const data: Book[] = await response.json();
        setBooks(data);
        setTotalBooks(data.length.toString());
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }
  
    async function addBook(e: React.FormEvent) {
      e.preventDefault();
      if (!newBook.name || !newBook.author || !newBook.price) return;
      const newId = (
        Math.max(...books.map((book) => parseInt(book.id, 10))) + 1
      ).toString();
      const bookToAdd = { id: newId, ...newBook };
  
      try {
        const response = await fetch("http://localhost:4000/books", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bookToAdd),
        });
  
        if (response.ok) {
          setBooks([...books, bookToAdd]);
          setNewBook({ name: "", author: "", price: "" });
          setTotalBooks(newId);
        }
      } catch (error) {
        console.error("Error adding book:", error);
      }
    }
    async function updateBook(e: React.FormEvent) {
      e.preventDefault();
      if (!editingBook) return;
      try {
        const response = await fetch(
          http://localhost:4000/books/${editingBook.id},
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editingBook),
          }
        );
        if (response.ok) {
          setBooks(
            books.map((book) => (book.id === editingBook.id ? editingBook : book))
          );
          setEditingBook(null);
        }
      } catch (error) {}
    }
    async function deleteBook(bookId: string) {
      try {
        const response = await fetch(http://localhost:4000/books/${bookId}, {
          method: "DELETE",
        });
  
        if (response.ok) {
          setBooks(books.filter((book) => book.id !== bookId));
          setTotalBooks((books.length - 1).toString());
        }
      } catch (error) {
        console.error("Error deleting book:", error);
      }
    }
  
    return (
      <>
        <h1 className="flex justify-center font-bold text-4xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            />
          </svg>
          Total Books: {totalBooks}
        </h1>
  
        {/* Table to Show Books */}
        <Table>
          <TableCaption>List of books.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Author</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book.id}>
                <TableCell className="font-medium">{book.id}</TableCell>
                <TableCell>{book.name}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell className="text-right">{book.price}</TableCell>
                <TableCell>
                  <div className="flex justify-between w-10">
                    <Popover>
                      <PopoverTrigger asChild>
                        <button
                          className="editbtn"
                          onClick={() => setEditingBook(book)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                          </svg>
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="p-4 w-80 bg-popover shadow-md rounded-lg">
                        <h3 className="text-lg font-bold mb-3">Edit Book</h3>
                        <form
                          onSubmit={updateBook}
                          className="flex flex-col gap-3"
                        >
                          <Input
                            type="text"
                            placeholder="Book Name"
                            value={editingBook?.name || ""}
                            onChange={(e) =>
                              setEditingBook({
                                ...editingBook!,
                                name: e.target.value,
                              })
                            }
                          />
                          <Input
                            type="text"
                            placeholder="Author"
                            value={editingBook?.author || ""}
                            onChange={(e) =>
                              setEditingBook({
                                ...editingBook!,
                                author: e.target.value,
                              })
                            }
                          />
                          <Input
                            type="text"
                            placeholder="Price"
                            value={editingBook?.price || ""}
                            onChange={(e) =>
                              setEditingBook({
                                ...editingBook!,
                                price: e.target.value,
                              })
                            }
                          />
                          <Button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700"
                          >
                            Update
                          </Button>
                        </form>
                      </PopoverContent>
                    </Popover>
  
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <button className="deletebutton">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete the book.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={() => deleteBook(book.id)}>
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
  
        {/* Popover for Adding a Book */}
        <div className="flex justify-center my-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button className="bg-muted-foreground text-white hover:bg-green-700">
                Add Book
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-4 w-80 bg-popover shadow-md rounded-lg">
              <h3 className="text-lg font-bold mb-3">Add a New Book</h3>
              <form onSubmit={addBook} className="flex flex-col gap-3">
                <Input
                  type="text"
                  placeholder="Book Name"
                  value={newBook.name}
                  onChange={(e) =>
                    setNewBook({ ...newBook, name: e.target.value })
                  }
                />
                <Input
                  type="text"
                  placeholder="Author"
                  value={newBook.author}
                  onChange={(e) =>
                    setNewBook({ ...newBook, author: e.target.value })
                  }
                />
                <Input
                  type="text"
                  placeholder="Price"
                  value={newBook.price}
                  onChange={(e) =>
                    setNewBook({ ...newBook, price: e.target.value })
                  }
                />
                <Button
                  type="submit"
                  className="bg-sidebar-ring hover:bg-blue-700"
                >
                  Submit
                </Button>
              </form>
            </PopoverContent>
          </Popover>
        </div>
        {/* Show More Button
        {!showAll && books.length > 5 && (
          <div className="flex justify-center mt-4">
            <Button className="bg-blue-500 hover:bg-blue-700" onClick={() => setShowAll(true)}>
              Show More
            </Button>
          </div>
        )} */}
      </>
    );
  }