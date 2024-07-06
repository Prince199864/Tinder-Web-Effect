let users = [
    {
        name: "Jill Valentine",
        profilePic: "https://images.unsplash.com/photo-1539614474468-f423a2d2270c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        smallImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        pendingMessage: 10,
        location: "California, USA",
        age: 23,
        interests: ["Music", "Lockpicking", "Infiltration"],
        bio: " Jill is a former S.T.A.R.S. member and master of unlocking. She is known for her intelligence, resourcefulness, and expertise in combat. Jill played a critical role in the initial outbreak in Raccoon City.",
        isFriend: null
    },
    {
        name: "Claire Redfield",
        profilePic: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        smallImg: "https://plus.unsplash.com/premium_photo-1668895511243-1696733f4fcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        pendingMessage: 8,
        location: "New York, USA",
        age: 26,
        interests: ["Resourcefulness", "Combat Proficiency", "Leadership"],
        bio: "Claire is the younger sister of Chris Redfield. She is a tough and independent woman who initially arrives in Raccoon City searching for her brother, only to find herself caught in the midst of a viral outbreak.",
        isFriend: null
    },
    {
        name: "Ada Wong",
        profilePic: "https://images.unsplash.com/photo-1532328076801-a862c9d5a74a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
        smallImg: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        pendingMessage: 45,
        location: "Unknown, Earth",
        age: 21,
        interests: ["Martial Arts", "Espionage", "Manipulation"],
        bio: "Ada is a mysterious and skilled spy who often operates independently. She is highly intelligent, proficient in martial arts, and skilled in using various weapons. Ada's allegiances often shift, making her a complex character.",
        isFriend: null
    },
    {
        name: "Sherry Birkin",
        profilePic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0JTIwYm95Y3V0fGVufDB8fDB8fHww",
        smallImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        pendingMessage: 4,
        location: "Texas, USA",
        age: 24,
        interests: ["Survival", "Bioweapons", "Research"],
        bio: "Sherry is the daughter of William and Annette Birkin, both Umbrella researchers. She becomes involved in bioweapon research and is targeted by various factions due to her unique genetic makeup. ",
        isFriend: null
    },
    {
        name: "Kimson Doana",
        profilePic: "https://images.unsplash.com/photo-1508606572321-901ea443707f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8",
        smallImg: "https://images.unsplash.com/photo-1500336624523-d727130c3328?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
        pendingMessage: 0,
        location: "Houston, USA",
        age: 29,
        interests: ["Painting", "Dance", "Pubg"],
        bio: "Always up for exploring new trails 🌲 | Coffee addict ☕ | Let's hike and talk about our favorite travel stories!",
        isFriend: null
    },
];
console.log(users)
function select(elem) {
    return document.querySelector(elem);
}
let curr = 0;
let isAnimating = false;
let reqIndex;

function setData(index) {
    select(".profileImg img").src = users[index].smallImg;
    select('.badge h5').innerHTML = users[index].pendingMessage;
    select('.location h3').innerHTML = users[index].location;
    select('.name').innerHTML = users[index].name.split(' ', 1)[0];
    select('.age').innerHTML = users[index].age;
    select('.bio p').innerHTML = users[index].bio;
    let clutter = ""
    users[index].interests.forEach((item) => {
        clutter += `<div class="tag flex items-center bg-white/30 px-5 py-2 rounded-full gap-3">
        <h3 class="text-sm tracking-tight">${item}</h3>
    </div>`
    });
    select('.tags').innerHTML = clutter;
}

(function setInitial() {
    select(".maincardImg").src = users[curr].profilePic;
    select(".incomingcardImg").src = users[curr + 1]?.profilePic;
    setData(curr);
    curr = 2;
})();
function imageChange() {
    if (!isAnimating) {
        isAnimating = true;
        let tal = gsap.timeline({
            onComplete: function () {
                isAnimating = false;
                let main = select('.maincard');
                let incoming = select('.incomingcard');


                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incomingcard");

                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");

                gsap.set(main, {
                    scale: 1,
                    opacity: 1
                })
                if (curr === users.length) curr = 0;
                select('.maincard img').src = users[curr].profilePic;
                curr++;

                main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("incomingcard");
            }
        });
        tal.to(".maincard", {
            scale: 1.1,
            opacity: 0,
            ease: Circ,
            duration: 0.9
        }, "a")
            .from(".incomingcard", {
                scale: 0.9,
                opacity: 0,
                ease: Circ,
                duration: 1.1
            }, "a")
    }
};
let decline = select('.decline');
let accept = select('.accept');
decline.addEventListener("click", () => {
    imageChange();
    setData(curr - 1);
    gsap.from(".details .info", {
        y: "100%",
        opacity: 0,
        stagger: .07,
        ease: Circ,
        duration: 1
    })
});
accept.addEventListener("click", () => {
    let req = document.querySelector('.name').innerHTML;
    users.forEach((user, index) => {
        if (user.name.includes(req)) {
            reqIndex = index;
        }
    });
    users[reqIndex].isFriend = true;
    console.log(users[reqIndex]);
    imageChange();
    setData(curr - 1);
    gsap.from(".details .info", {
        y: "100%",
        opacity: 0,
        stagger: .07,
        ease: Circ,
        duration: 1
    })
});

(function containerCreator() {
    document.querySelectorAll('.info').forEach((element, index) => {
        let div = document.createElement("div");
        div.classList.add(`${element.classList[1]}Container`, 'overflow-hidden');
        div.appendChild(element);
        select(".details").appendChild(div);
    });
})();