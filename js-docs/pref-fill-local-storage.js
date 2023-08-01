function storeRandomData() {
    let randomProjectData = [
        {
            title: "A Really Nice Car!",
            imageSrc: "/assets/images/car.jpg",
            imageAlt: "A picture of a car parked on the road on a handicap spot.",
            description: "This dazzling, high-performance car is a true marvel of engineering. Its sleek, midnight blue silhouette speaks volumes of luxury, while the powerful engine beneath promises an exhilarating ride. The perfect blend of style, comfort and performance makes this car more than just a mode of transport; it's a statement of sophistication and speed.",
            linkHref: "https://www.caranddriver.com/features/g15383134/most-beautiful-cars/",
            linkTxt: "More Nice Cars!",
            author: "Alice Wong",
            date: "2023-01-01",
            status: "Completed"
        },
        {
            title: "A Deep Dive!",
            imageSrc: "/assets/images/dive.jpg",
            imageAlt: "A picture of a diver in the ocean taking pictures of the ecosystem.",
            description: "Armed with nothing more than a waterproof camera and an indomitable spirit, the diver plunged into the cerulean abyss. Each click echoed through the serene underwater landscape, capturing fleeting moments of the vibrant local ecosystem, a silent symphony of life unseen by the surface world. Amidst the dance of light and shadow, coral reefs bloomed like alien gardens, teeming with a myriad of creatures, a testament to the harmonious, yet fragile balance of nature's grand design.",
            linkHref: "https://www.divein.com/diving/deep-diving/",
            linkTxt: "More Diving Info!",
            author: "Bob Morgan",
            date: "2021-11-03",
            status: "Ongoing"
        }, 
        {
            title: "Such a Good Day!",
            imageSrc: "/assets/images/goodday.jpg",
            imageAlt: "A picture of a wall with some neon lights that say: today will be a good day!",
            description: "Today will be a good day, imbued with the promise of potential, wrapped up in the golden rays of a new dawn. No matter the challenges that might arise, they are but opportunities to grow and learn, paving the path to personal growth and resilience. In the simple joys and quiet moments, remember, every day is a good day when you approach it with positivity and an open heart.",
            linkHref: "https://zenhabits.net/10-simple-sure-fire-ways-to-make-today-your-best-day-ever/",
            linkTxt: "Ways to make today great!",
            author: "Charlie Sheen",
            date: "1995-03-15",
            status: "Draft"
        },
        {
            title: "Working On The Computer!",
            imageSrc: "/assets/images/work.jpg",
            imageAlt: "A picture of a computer with some tabs open, as if it is being used a lot!",
            description: "Working on a computer opens up a world of possibilities right at your fingertips. It is like wielding a powerful tool that can craft complex code, design beautiful graphics, manage vast databases, and even simulate entire worlds within its digital realm. The experience is both challenging and rewarding, demanding precision and creativity, while offering a limitless canvas to create, innovate and explore.",
            linkHref: "https://www.indeed.com/career-advice/finding-a-job/jobs-using-home-computer",
            linkTxt: "Jobs that let you work from home!",
            author: "Dave Batista",
            date: "2006-03-30",
            status: "In Review"
        },
        {
            title: "Keeping the Twitter Brand!",
            imageSrc: "/assets/images/twitter.png",
            imageAlt: "A picture of the former twitter logo.",
            description: "Here I am, staring at this little blue bird, and all I can think about is... 'X'. An unexplored symbol, a mathematical mystery, it has a certain otherworldly allure, doesn't it? But then again, 'Twitter' - it's got a chirp, a tweet, it's got personality. Hmm... 'X' or not 'X', that is the question!",
            linkHref: "https://www.theverge.com/2023/7/26/23808796/elon-musks-x-everything-app-vision",
            linkTxt: "X equals Everything, Twitter is gone!",
            author: "Elon Musk",
            date: "2023-08-01",
            status: "Cancelled"
        },
        {
            title: "Joe Biden Losing His Train of Thought!",
            imageSrc: "/assets/images/biden.jpg",
            imageAlt: "A picture of the president of the US, joe biden.",
            description: "Ah, well, here's the deal folks... I was just... err... discussing... you know... that thing. A lot of malarkey if you ask me! Now, where was I... Oh, boy... Lost my train of thought again. Ah, never mind, must've been about ice cream. Everyone loves ice cream, right?",
            linkHref: "https://www.youtube.com/watch?v=lbjgTeuTAdo",
            linkTxt: "Joe Biden Embarrassing Gaffes...",
            author: "Joe Biden",
            date: "2020-10-24",
            status: "Delayed"
        },
        {
            title: "Learning Quantum Physics in 30 days!",
            imageSrc: "/assets/images/quantum-physics.jpg",
            imageAlt: "A picture of a quantum particle.",
            description: "Imagine if everything you know about physics is turned upside down! Take a dive into the quantum world where particles can exist in two places at once, cats can be both dead and alive, and we can teleport information. Quantum physics - it's a real head-spinner, isn't it?",
            linkHref: "https://www.scientificamerican.com/article/6-times-quantum-physics-blew-our-minds-in-2022/",
            linkTxt: "6 Times Quantum Physics Blew Our Minds...",
            author: "Niels Bohr",
            date: "2023-07-15",
            status: "Completed"
        },
        {
            title: "Baking The Perfect Sourdough!",
            imageSrc: "/assets/images/sourdough-bread.jpg",
            imageAlt: "A picture of a sourdough loaf.",
            description: "Baking the perfect sourdough is an art. It's not just about mixing water and flour, it's about nurturing a living thing. You gotta feed it, care for it, and then... it rewards you with the perfect crust and that beautiful, tangy flavor. Mmm... sourdough.",
            linkHref: "https://littlespoonfarm.com/sourdough-bread-recipe-beginners-guide/",
            linkTxt: "Mastering the Art of Sourdough...",
            author: "Dominic Curiel",
            date: "2023-04-12",
            status: "Ongoing"
        },
        {
            title: "Competitive Snail Racing!",
            imageSrc: "/assets/images/snail-racing.jpg",
            imageAlt: "A picture of two snails racing.",
            description: "Forget horses, dogs, or even humans – it's all about snail racing now! Ever seen a snail move at a blazing speed of 0.03 mph? It's nail-biting, edge-of-your-seat action... that lasts for several hours. But hey, the suspense is worth it!",
            linkHref: "https://a-z-animals.com/blog/is-snail-racing-real/",
            linkTxt: "Is Snail Racing Even Real?...",
            author: "Gary The Snail",
            date: "2023-07-07",
            status: "Ongoing"
        },
        {
            title: "In Search of The Perfect Potato Chip!",
            imageSrc: "/assets/images/potato-chips.jpg",
            imageAlt: "A picture of a pile of potato chips.",
            description: "The perfect chip - crispy, salty, light, and with just the right amount of seasoning. It's an elusive creature, but I'm on a mission to find it. Join me as I navigate through mountains of chips in my quest for that elusive perfect crunch. It's a tough job, but someone's got to do it!",
            linkHref: "https://studyfinds.org/best-potato-chips-2023/#:~:text=Lay's%20Classic&text=1%3A%20%E2%80%9CYou%20can't,spot%20in%20our%20taste%20test.",
            linkTxt: "The Quest for The Perfect Chip...",
            author: "Chip Cruncher",
            date: "2023-06-29",
            status: "Cancelled"
        }
    ];

    // localStorage only stores strings, so we need to convert our array to a JSON string.
    let jsonData = JSON.stringify(randomProjectData);

    // Now we can store this JSON string in localStorage.
    localStorage.setItem('project-data', jsonData);
}

// Call this function when the page loads to ensure we have some sample data to work with.
window.addEventListener('DOMContentLoaded', storeRandomData);