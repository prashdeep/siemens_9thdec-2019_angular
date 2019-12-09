let courses = [
        {
            id:12,
            name:'Angular',
            version:8,
            price: 10000.00,
            offer:false,
        },
        {
            id:13,
            name:'React',
            version:16.8,
            price: 25000.00,
            offer:true,
        },
        {
            id:14,
            name:'Spring Boot',
            version:2.2,
            price: 11000.00,
            offer:false,
        },
        {
            id:14,
            name:'Microservices',
            version:4,
            price: 22000.00,
            offer:false,
        },
        {
            id:15,
            name:'Spring Cloud',
            version:86,
            price: 18000.00,
            offer:true,
        },
        {
            id:16,
            name:'Redux',
            version:3,
            price: 12000.00,
            offer:false,
        }
]

courses
.filter(course => course.price < 20000)
.map(course => ({"name": course.name, "price":course.price}))
.forEach(course => console.log(course))


