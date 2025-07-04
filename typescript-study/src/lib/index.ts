enum Role {
    LIBRARIAN, // 사서
    MEMBER, // 멤버
  }

  abstract class User2 {
    constructor(public name: string, public age: number) {}
    abstract getRole(): Role;
  }


  class Member extends User2 {
    constructor(name: string, age: number) {
      super(name, age);
    }
    getRole(): Role {
      return Role.MEMBER;
    }
  }



  class Librarian extends User2 {
    constructor(name: string, age: number) {
      super(name, age);
    }
    getRole(): Role {
      return Role.LIBRARIAN;
    }
  }


  class Book {
    constructor(
      public title: string,
      public author: string,
      public publishedDate: Date
    ) {}
  }



  interface RentManager {
    getBooks(): Book[];
    addBook(user: User2, book: Book): void;
    removeBook(user: User2, book: Book): void;
    rentBook(user: Member, book: Book): void;
    returnBook(user: Member, book: Book): void;
  }


  class Library implements RentManager {
    private books: Book[] = [];
    // rentedBooks는 유저의 대여 이력을 관리해요!
    private rentedBooks: Map<string, Book> = new Map<string, Book>();
  
    getBooks(): Book[] {
      // 깊은 복사를 하여 외부에서 books를 수정하는 것을 방지합니다.
      return JSON.parse(JSON.stringify(this.books));
    }
  
    addBook(user: User2, book: Book): void {
      if (user.getRole() !== Role.LIBRARIAN) {
        console.log("사서만 도서를 추가할 수 있습니다.");
        return;
      }
  
      this.books.push(book);
    }
  
    removeBook(user: User2, book: Book): void {
      if (user.getRole() !== Role.LIBRARIAN) {
        console.log("사서만 도서를 삭제할 수 있습니다.");
        return;
      }
  
      const index = this.books.indexOf(book);
      if (index !== -1) {
        this.books.splice(index, 1);
      }
    }
  
    rentBook(user: User2, book: Book): void {
      if (user.getRole() !== Role.MEMBER) {
        console.log("유저만 도서를 대여할 수 있습니다.");
        return;
      }
  
      if (this.rentedBooks.has(user.name)) {
        console.log(
          `${user.name}님은 이미 다른 책을 대여중이라 빌릴 수 없습니다.`
        );
      } else {
        this.rentedBooks.set(user.name, book);
        console.log(`${user.name}님이 [${book.title}] 책을 빌렸습니다.`);
      }
    }
  
    returnBook(user: User2, book: Book): void {
      if (user.getRole() !== Role.MEMBER) {
        console.log("유저만 도서를 반납할 수 있습니다.");
        return;
      }
  
      if (this.rentedBooks.get(user.name) === book) {
        this.rentedBooks.delete(user.name);
        console.log(`${user.name}님이 [${book.title}] 책을 반납했어요!`);
      } else {
        console.log(`${user.name}님은 [${book.title}] 책을 빌린적이 없어요!`);
      }
    }
  }


  function main2() {
    const myLibrary = new Library();
    const librarian = new Librarian("르탄이", 30);
    const member1 = new Member("예비개발자", 30);
    const member2 = new Member("독서광", 28);
  
    const book = new Book("TypeScript 문법 종합반", "강창민", new Date());
    const book2 = new Book("금쪽이 훈육하기", "오은영", new Date());
    const book3 = new Book("요식업은 이렇게!", "백종원", new Date());
  
    myLibrary.addBook(librarian, book);
    myLibrary.addBook(librarian, book2);
    myLibrary.addBook(librarian, book3);
    const books = myLibrary.getBooks();
    console.log("대여할 수 있는 도서 목록:", books);
  
    myLibrary.rentBook(member1, book);
    myLibrary.rentBook(member2, book2);
  
    myLibrary.returnBook(member1, book);
    myLibrary.returnBook(member2, book2);
  }
  
  main2();