import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
import { AppSidebar } from "@/components/app-sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SearchForm } from "@/components/search-form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// import { Button } from "@/components/ui/button";

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  description: string;
}

export default function Page() {
  // const router = useRouter();
  const [books, setBooks] = useState<Book[]>([]);
  // const [cart, setCart] = useState<number[]>([]);

  // Fetch books from JSON server
  useEffect(() => {
    fetch("http://127.0.0.1:37943/api/books")
      .then((res) => {
        console.log("Response status:", res.status);
        return res.json();
      })
      .then((data) => {
        console.log("Fetched books:", data);
        setBooks(data.books); // Assuming the books are wrapped in a "books" property
      })
      .catch((err) => console.error("Failed to fetch books", err));
  }, []);

  // Add book to cart
  // const addToCart = (id: number) => {
  //   setCart((prev) => {
  //     if (prev.includes(id)) return prev; // Prevent adding the same book twice
  //     return [...prev, id];
  //   });
  // };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between px-4">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Books</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center gap-2 px-4">
            <SearchForm />
            <Avatar>
              <AvatarImage src="https://github.com/Aashiro1.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        
        </header>
        
        {/* Book List */}
        <div className="flex flex-row gap-6 flex-wrap p-6">
          {books.length > 0 ? (
                books.map((book) => (
                  <Card key={book.id} className="w-72 cursor-pointer hover:shadow-lg transition">
                    <CardHeader>
                      <CardTitle>{book.title}</CardTitle>
                      <CardDescription>{book.author}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">{book.genre}</p>
                      <p className="text-sm">{book.description}</p>
                    </CardContent>
                  </Card>
                ))
            ) : (
            <p className="text-gray-500">{books.length === 0 ? "No books found." : "Loading books..."}</p>
         )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}