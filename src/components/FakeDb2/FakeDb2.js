const musics = [
    { 
        name: "Folk music", 
        artist: "Anton", 
        role: "musician", 
        price: 3000,
        duration: "3 months", 
        days: "Monday-Wednesday",
        description:"In this course you can learn about folk music and also know how to play instrumentals which are relating it. And also have learn pro techniques on it.Folk music may be described as that type of ancient music which springs from the heart of a community, based on their natural style of expression uninfluenced by the rules of classical music and modern popular songs. Any mode or form created by the combination of tune, voice and dance may be described as music", 
        img:"https://www.theindependentbd.com/assets/news_images/Folk-music.jpg",
        time:"5-7 PM",
        members: 12,
        contact: "+0129877324"
    },

    {
         
        name: "Rock music", 
        artist: "Aston", 
        role: "musician", 
        price: 4000, 
        duration: "5 months", 
        days: "Sunday-Wednesday", 
        description:"In this course you can learn about Rock music and also know how to play instrumentals which are relating it. And also have learn pro techniques on it.A type of pop music that developed out of rock'n'roll in the 1960s and 1970s. It is based around amplified instruments, especially the electric guitar and electric bass, and is characterized by a strong bass line and driving rhythms.", 
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe9kPf1vNfDPA9TnLrSSczVQYtJxkIMyXdEX_5eukHZ7UDmp_qMQZL9Xg0yf6uDKk0CoU&usqp=CAU",
        time:"6-8 AM",
        members: 5,
        contact: "+01298537324"
    },

    { 
        name: "Classical music", 
        artist: "Peter", 
        role: "musician", 
        price: 4500, 
        duration: "3.5 months", 
        days: "Tuesday-Wednesday", 
        description:"In this course you can learn about classical music and also know how to play instrumentals which are relating it. And also have learn pro techniques on it.The calming effect of classical music takes away any jitters or nervousness, and can help to decrease your heart rate and anxiety. The Mozart Effect relies on listening to classical music while performing a task, which helps to focus on the task at hand and improve memory retention.", 
        img:"https://w0.peakpx.com/wallpaper/1011/978/HD-wallpaper-stradivarius-violin-music-theme.jpg",
        time:"10-11 PM",
        members: 15,
        contact: "+0169877324"
    },

    { 
        name: "Jazz music", 
        artist: "Smith", 
        role: "Instructor", 
        price: 2000, 
        duration: "2 months", 
        days: "Monday-Friday", 
        description:"In this course you can learn about Jazz music and also know how to play instrumentals which are relating it. And also have learn pro techniques on it.Jazz music is a broad style of music characterized by complex harmony, syncopated rhythms, and a heavy emphasis on improvisation.The musical form evolved to embrace popular music standards, modal music, pop, rock, funk, and even true avant-garde compositions.", 
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSErwaF_gG3t7u2Q0K23yazYsYcAGOvLn3-YnVl_pndwvsgdgtwi-hOJ9_QqPSKpG1P-9g&usqp=CAU",
        time:"7-9 PM",
        members: 10,
        contact: "+01298667324"
    },

    { 
        name: "Pop music", 
        artist: "Finch", 
        role: "musician", 
        price: 5000, 
        duration: "7 months", 
        days: "Monday-Friday", 
        description:"In this course you can learn about pop music and also know how to play instrumentals which are relating it. And also have learn pro techniques on it,usually played on electronic instruments, that is popular with many people because it consists of short songs with a strong beat and simple tunes that are easy to remember. Pop music is often simply called pop.", 
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-bKCX1Q8uy9IPfxFxIUJKWhaGjxkfAfBF4g&usqp=CAU",
        time:"6-7 PM",
        members: 7,
        contact: "+0129877454"
    },
     { 
        name: "Heavy metal music", 
        artist: "Gale", 
        role: "Instructor", 
        price: 6000, 
        duration: "4.5 months", 
        days: "Monday-Saturday", 
        description:"In this course you can learn about heavy metal music and also know how to play instrumentals which are relating it. And also have learn pro techniques on it.Heavy metal, genre of rock music that includes a group of related styles that are intense, virtuosic, and powerful. Driven by the aggressive sounds of the distorted electric guitar, heavy metal is arguably the most commercially successful genre of rock music.", 
        img:"https://images.unsplash.com/photo-1515890326200-a07ce46010a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWV0YWwlMjBtdXNpY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        time:"8-9 AM",
        members: 6,
        contact: "+0129357324"
    },

    { 
        name: "Hip hop music", 
        artist: "Bell", 
        role: "Rapper", 
        price: 5500, 
        duration: "2 months", 
        days: "Monday-Wednesday", 
        description:"In this course you can learn about hip hop music and also know how to play instrumentals which are relating it. And also have learn pro techniques on it.Rap is one of the most distinctive features of hip-hop. Rappers use rhythm, lyrics, and vocal tone to express themselves. The best rappers are distinguished by their ???flow??? ??? the way the words run together without the performer getting tongue-tied.", 
        img:"https://weiscenter.blogs.bucknell.edu/files/2017/11/22894272_1639513662736709_8823527025390358080_n-1.jpg",
        time:"7-9 AM",
        members: 10,
        contact: "+01298773445"
    },

    { 
        name: "Electrical music", 
        artist: "Parker", 
        role: "musician", 
        price: 6000, 
        duration: "6 months", 
        days: "Monday-Sunday", 
        description: "In this course you can learn about electrical music and also know how to play instrumentals which are relating it. And also have learn pro techniques on it,Electronic music has transformed the production and quality of music played today. In contrast to traditional music, electronic music allows for flexibility and creativity in the music production and play including voice modification and background beats.", 
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPfDLEXcKZz6xQAClSBvEmO0YS387bOPJZqw&usqp=CAU",
        time:"8-10 AM",
        members: 9,
        contact: "+0122877327"
    },

    { 
        name: "Hindi music", 
        artist: "Anjali", 
        role: "musician", 
        price: 8000, 
        duration: "10 months", 
        days: "Monday-Saturday", 
        description:"In this course you can learn about hindi music and also know how to play instrumentals which are relating it. And also have learn pro techniques on it.It has been described as sugarcoated dance melodies with Hindi lyrics, large orchestra film music, overdubbed with dance beats.??? Indians tend to be more loyal to songs than singers. Much of the music that people listen to is still in the form of cassettes. Cassettes and CDs are often pirated.", 
        img:"https://media.ipassio.com/media/old_media/2020-04/Shriram%20Iyer_0.jpg",
        time:"8-9 AM",
        members: 8,
        contact: "+012978327324"
    }

   
    
];

