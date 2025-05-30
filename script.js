// Dark mode and light mode navigator

var icon = document.getElementById('icon');


icon.onclick = function(){
    document.body.classList.toggle('dark-theme'); 
    if(document.body.classList.contains("dark-theme")){
       icon.src = "light-mode.png";
    }else{
        icon.src = "dark-mode.png"
    }
}








const books = [
    { title: "Atomic Habits", author: "James Clear", rating: 4.8, year: 2018 },
    { title: "Deep Work", author: "Cal Newport", rating: 4.6, year: 2016 },
    { title: "The Alchemist", author: "Paulo Coelho", rating: 4.7, year: 1988 },
    { title: "Educated", author: "Tara Westover", rating: 4.7, year: 2018 },
    { title: "Sapiens", author: "Yuval Noah Harari", rating: 4.6, year: 2011 },
    { title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", rating: 4.4, year: 2016 },
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", rating: 4.5, year: 1997 },
    { title: "Can't Hurt Me", author: "David Goggins", rating: 4.9, year: 2018 },
    { title: "The Psychology of Money", author: "Morgan Housel", rating: 4.7, year: 2020 },
    { title: "Start With Why", author: "Simon Sinek", rating: 4.5, year: 2009 },
    { title: "Zero to One", author: "Peter Thiel", rating: 4.6, year: 2014 },
    { title: "The 5 AM Club", author: "Robin Sharma", rating: 4.2, year: 2018 },
    { title: "Think Like a Monk", author: "Jay Shetty", rating: 4.5, year: 2020 },
    { title: "Hooked", author: "Nir Eyal", rating: 4.3, year: 2014 },
    { title: "Digital Minimalism", author: "Cal Newport", rating: 4.5, year: 2019 },
    { title: "Make Time", author: "Jake Knapp", rating: 4.4, year: 2018 },
    { title: "Ikigai", author: "Héctor García", rating: 4.3, year: 2016 },
    { title: "Grit", author: "Angela Duckworth", rating: 4.6, year: 2016 },
    { title: "Drive", author: "Daniel H. Pink", rating: 4.4, year: 2009 },
    { title: "The Power of Habit", author: "Charles Duhigg", rating: 4.6, year: 2012 },
    { title: "Man's Search for Meaning", author: "Viktor Frankl", rating: 4.9, year: 1946 },
    { title: "The Lean Startup", author: "Eric Ries", rating: 4.5, year: 2011 },
    { title: "The Millionaire Fastlane", author: "MJ DeMarco", rating: 4.7, year: 2011 },
    { title: "Tools of Titans", author: "Tim Ferriss", rating: 4.6, year: 2016 },
    { title: "Show Your Work", author: "Austin Kleon", rating: 4.5, year: 2014 },
    { title: "Steal Like an Artist", author: "Austin Kleon", rating: 4.4, year: 2012 },
    { title: "The War of Art", author: "Steven Pressfield", rating: 4.7, year: 2002 },
    { title: "The ONE Thing", author: "Gary Keller", rating: 4.6, year: 2013 },
    { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", rating: 4.5, year: 2011 },
    { title: "How to Win Friends & Influence People", author: "Dale Carnegie", rating: 4.8, year: 1936 }
  ];
  

  const keywordInput = document.getElementById("keyword");
  const ratingSelect = document.getElementById("rating");
  const yearSelect = document.getElementById("year");
  const resultsDiv = document.getElementById("results");

  function renderResults(filteredBooks) {
    resultsDiv.innerHTML = "";
    if (filteredBooks.length === 0) {
      resultsDiv.innerHTML = "<p>No books found.</p>";
      return;
    }
    filteredBooks.forEach(book => {
      const div = document.createElement("div");
      div.className = "book";
      div.textContent = `${book.title} by ${book.author} (${book.year}) - ⭐${book.rating}`;
      resultsDiv.appendChild(div);
    });
  }

  function searchBooks() {
    const keyword = keywordInput.value.toLowerCase();
    const minRating = parseFloat(ratingSelect.value);
    const minYear = parseInt(yearSelect.value);

    const filtered = books
      .filter(book =>
        (book.title.toLowerCase().includes(keyword) ||
         book.author.toLowerCase().includes(keyword)) &&
        book.rating >= minRating &&
        book.year >= minYear
      )
      .sort((a, b) => b.rating - a.rating);

    renderResults(filtered);
  }

  keywordInput.addEventListener("input", searchBooks);
  ratingSelect.addEventListener("change", searchBooks);
  yearSelect.addEventListener("change", searchBooks);

  // searchBooks();