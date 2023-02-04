const books = [
    { category: 'Friendship and Difference', name: "Give Me Shelter",                       author: "Tony Bradman",             age: "8+",   link: "2140199.Give_Me_Shelter",                                   image: "1328727430i/2140199.jpg"},
    { category: 'Friendship and Difference', name: "The Secret Garden",                     author: "Frances Hodgson Burnett",  age: "8+",   link: "2998.The_Secret_Garden",                                    image: "1327873635i/2998.jpg"},
    { category: 'Friendship and Difference', name: "Because of Winn-Dixie",                 author: "Kate DiCamillo",           age: "9+",   link: "357664.Because_of_Winn_Dixie",                              image: "1456871914i/357664.jpg"},
    { category: 'Friendship and Difference', name: "Hurricane Wills",                       author: "Sally Grindley",           age: "9+",   link: "3698266-hurricane-wills",                                   image: "1328821709i/3698266.jpg"},
    { category: 'Friendship and Difference', name: "The Garbage King",                      author: "Elizabeth Laird",          age: "9+",   link: "823796.The_Garbage_King",                                   image: "1387736366i/823796.jpg"},
    { category: 'Friendship and Difference', name: "Secret Friends",                        author: "Elizabeth Laird",          age: "9+",   link: "2089008.Secret_Friends",                                    image: "1328845407i/2089008.jpg"},
    { category: 'Friendship and Difference', name: "There's a boy in the Girls' Bathroom",  author: "Louis Sachar",             age: "9+",   link: "236056.There_s_a_Boy_in_the_Girls_Bathroom",                image: "1346870062i/236056.jpg"},
    { category: 'Friendship and Difference', name: "The Boy in the Dress",                  author: "David Walliams",           age: "9+",   link: "4883204-the-boy-in-the-dress",                              image: "1327367796i/4883204.jpg"},
    { category: 'Friendship and Difference', name: "Refugee Boy",                           author: "Benjamin Zephaniah",       age: "9+",   link: "1483375.Refugee_Boy",                                       image: "1184081143i/1483375.jpg"},
    { category: 'Friendship and Difference', name: "Abela",                                 author: "Berlie Doherty",           age: "10+",  link: "9464305-abela",                                             image: "1356748825i/9464305.jpg"},
    { category: 'Friendship and Difference', name: "Shadow",                                author: "Michael Morpurgo",         age: "10+",  link: "9239452-shadow",                                            image: "1332960470i/9239452.jpg"},
    { category: 'Friendship and Difference', name: "Tall Story",                            author: "Candy Gourlay",            age: "10+",  link: "7412951-tall-story",                                        image: "1327909763i/7412951.jpg"},
   
    { category: 'Bullying',                  name: "Picking on Percy",                      author: "Catherine MacPhall",       age: "7+",   link: "2141207.Picking_on_Percy",                                  image: "1408939158i/2141207.jpg"},
    { category: 'Bullying',                  name: "The Savage",                            author: "David Almond",             age: "9+",   link: "3321961-the-savage",                                        image: "1439523074i/3321961.jpg"},
    { category: 'Bullying',                  name: "Cloud Busting",                         author: "Malory Blackman",          age: "9+",   link: "301125.Cloud_Busting",                                      image: "1320534167i/301125.jpg"},
    { category: 'Bullying',                  name: "Matilda",                               author: "Roald Dahl",               age: "9+",   link: "39988.Matilda",                                             image: "1388793265i/39988.jpg"},
    { category: 'Bullying',                  name: "Avenger",                               author: "Pete Johnson",             age: "9+",   link: "2634327-avenger",                                           image: "1356133828i/2634327.jpg"},
    { category: 'Bullying',                  name: "Indigos Star",                          author: "Hilary McKay",             age: "9+",   link: "435495.Indigo_s_Star",                                      image: "1348095131i/435495.jpg"},
    { category: 'Bullying',                  name: "Cookie",                                author: "Jacqueline Wilson",        age: "9+",   link: "3293749-cookie",                                            image: "1320481721i/3293749.jpg"},
    { category: 'Bullying',                  name: "The Eighteenth Emergency",              author: "Betsy Byars",              age: "10+",  link: "2042650.The_Eighteenth_Emergency",                          image: "1408924203i/2042650.jpg"},
    { category: 'Bullying',                  name: "How to be Popular",                     author: "Meg Cabot",                age: "11+",  link: "23221.How_to_Be_Popular",                                   image: "1385321684i/23221.jpg"},
    { category: 'Bullying',                  name: "Inventing Elliot",                      author: "Graham Gardner",           age: "12+",  link: "1212696.Inventing_Elliot",                                  image: "1309211517i/1212696.jpg"},
 
    { category: 'Bereavement',               name: "How Kirsty Jenkins Stole the Elephant", author: "Elen Caldecott",           age: "9+",   link: "6424305-how-kirsty-jenkins-stole-the-elephant",             image: "1328007770i/6424305.jpg"},
    { category: 'Bereavement',               name: "Wenny has Wings",                       author: "Janet Lee Carey",          age: "9+",   link: "1175829.Wenny_Has_Wings",                                   image: "1344400154i/1175829.jpg"},
    { category: 'Bereavement',               name: "Bindi Babes",                           author: "Narinder Dhami",           age: "9+",   link: "970477.Bindi_Babes",                                        image: "1320412916i/970477.jpg"},
    { category: 'Bereavement',               name: "Spilled Water",                         author: "Sally Grindley",           age: "9+",   link: "793749.Spilled_Water",                                      image: "1347561422i/793749.jpg"},
    { category: 'Bereavement',               name: "Love, Aubrey",                          author: "Suzanne LaFleur",          age: "9+",   link: "5982448-love-aubrey",                                       image: "1442769697i/5982448.jpg"},
    { category: 'Bereavement',               name: "The Thing with Finn",                   author: "Tom Kelly",                age: "9+",   link: "2923967-the-thing-with-finn",                               image: "1348249498i/2923967.jpg"},
    { category: 'Bereavement',               name: "Ice Lolly",                             author: "Jean Ure",                 age: "9+",   link: "8018162-ice-lolly",                                         image: "1328834878i/8018162.jpg"},
    { category: 'Bereavement',               name: "Vicky Angel",                           author: "Jacqueline Wilson",        age: "9+",   link: "511532.Vicky_Angel",                                        image: "1328105389i/511532.jpg"},
    { category: 'Bereavement',               name: "The Tiger Rising",                      author: "Kate DiCamillo",           age: "10+",  link: "37187.The_Tiger_Rising",                                    image: "1479692331i/37187.jpg"},
    { category: 'Bereavement',               name: "Goodnight Mister Tom",                  author: "Michelle Magorian",        age: "11+",  link: "257758.Goodnight_Mister_Tom",                               image: "1431671015i/257758.jpg"},
    
    { category: 'Coming of Age',             name: "Girls Only!",                           author: "Vic Parker",               age: "8+",   link: "855726.Girls_Only_All_About_Periods_and_Growing_Up_Stuff",  image: "1416445709i/855726.jpg"},
    { category: 'Coming of Age',             name: "Driftwood",                             author: "Cathy Cassidy",            age: "9+",   link: "348044.Driftwood",                                          image: "1408923510i/348044.jpg"},
    { category: 'Coming of Age',             name: "The Boy's Body Book",                   author: "Kelli Dunham",             age: "9+",   link: "1857784.The_Boys_Body_Book",                                image: "1347779852i/1857784.jpg"},
    { category: 'Coming of Age',             name: "The Girl's Body Book",                  author: "Kelli Dunham",             age: "9+",   link: "4100170-the-girls-body-book",                               image: "1347229606i/4100170.jpg"},
    { category: 'Coming of Age',             name: "Heartbeat",                             author: "Sharon Creech",            age: "10+",  link: "53492.Heartbeat",                                           image: "1388864878i/53492.jpg"},
    { category: 'Coming of Age',             name: "Saskia's Journey",                      author: "Theresa Breslin",          age: "10+",  link: "1056977.Saskia_s_Journey",                                  image: "1348901170i/1056977.jpg"},
]

const bookSection = document.querySelector('.book-list');

const bookCategories = document.createElement('div');
const bookPreview = document.createElement('div');

bookPreview.classList.add('book-preview-container')

bookCategories.classList.add('categories-container');

bookSection.appendChild(bookPreview)
bookSection.appendChild(bookCategories);

books.forEach(preview => {
    const previewAnchor = document.createElement('a');
    const previewImage = document.createElement('img')
    previewImage.src = `https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/${preview.image}`;
    previewAnchor.href = `https://www.goodreads.com/book/show/${preview.link}`;
    previewAnchor.target = `_blank`
    previewAnchor.appendChild(previewImage)
    bookPreview.appendChild(previewAnchor)
});

const categories = [...new Set(books.map(item => item.category))];
categories.forEach(category => {
    const newCategory = document.createElement('div');

    const categoryTitle = document.createElement('h1');
    categoryTitle.textContent = category;
    bookCategories.appendChild(categoryTitle)

    newCategory.classList.add(`category`);
    newCategory.ariaLabel = `${category}`;
    bookCategories.appendChild(newCategory);
});
const categoriesCondition = document.querySelectorAll('.category')

books.forEach(book => {
    const newBookItem = document.createElement('div');
    const bookInfo = document.createElement('div');

    const bookImage = document.createElement('img');
    bookImage.src = `https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/${book.image}`

    const bookTitle = document.createElement('h2');
    bookTitle.textContent = book.name;

    const bookAuthor = document.createElement('span');
    bookAuthor.textContent = book.author;

    const bookAge = document.createElement('span');
    bookAge.textContent = book.age;

    const bookButton = document.createElement('a');
    bookButton.target = `_blank`;
    bookButton.href = `https://www.goodreads.com/book/show/${book.link}`;
    bookButton.textContent = 'More Info'
    newBookItem.appendChild(bookImage);
    newBookItem.appendChild(bookInfo);
    bookInfo.appendChild(bookTitle);
    bookInfo.appendChild(bookAuthor);
    bookInfo.appendChild(bookAge);
    bookInfo.appendChild(bookButton);

    categoriesCondition.forEach(category => {
        if(book.category === category.ariaLabel) {
            category.appendChild(newBookItem)
        }
    });
});
