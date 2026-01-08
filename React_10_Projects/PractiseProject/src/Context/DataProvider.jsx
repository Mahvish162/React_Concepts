import { DataContext } from "./DataContext";

const DataProvider = ({ children }) => {

    const moviesData = [
        {
            id: 1,
            name: "Five Nights at Freddy's 2",
            releaseDate: "December 5, 2025",
            imageUrl: "https://wallpapercave.com/wp/wp5419284.jpg"
        },
        {
            id: 2,
            name: "Mortal Kombat II",
            releaseDate: "May 15, 2026",
            imageUrl: "https://wallpapercave.com/wp/wp5419284.jpg"
        },
        {
            id: 3,
            name: "Joker: Folie à Deux",
            releaseDate: "October 4, 2024",
            imageUrl: "https://wallpapercave.com/wp/wp5419284.jpg"
        },
        {
            id: 4,
            name: "28 Years Later",
            releaseDate: "June 20, 2025",
            imageUrl: "https://wallpapercave.com/wp/wp5419284.jpg"
        },
        {
            id: 5,
            name: "The Bride!",
            releaseDate: "March 6, 2026",
            imageUrl: "https://wallpapercave.com/wp/wp5419284.jpg"
        },
        {
            id: 6,
            name: "Reminders of Him",
            releaseDate: "March 13, 2026",
            imageUrl: "https://wallpapercave.com/wp/wp5419284.jpg"
        },
        {
            id: 7,
            name: "Apex",
            releaseDate: "April 24, 2026",
            imageUrl: "https://wallpapercave.com/wp/wp5419284.jpg"
        },
        {
            id: 8,
            name: "Disclosure Day",
            releaseDate: "June 12, 2026",
            imageUrl: "https://wallpapercave.com/wp/wp5419284.jpg"
        },
        {
            id: 9,
            name: "Spider-Man: Brand New Day",
            releaseDate: "July 31, 2026",
            imageUrl: "https://wallpapercave.com/wp/wp5419284.jpg"
        },
        {
            id: 10,
            name: "Avengers: Doomsday",
            releaseDate: "December 18, 2026",
            imageUrl: "https://wallpapercave.com/wp/wp5419284.jpg"
        }
    ];

    const catsData = [
        {
            id: 1,
            name: "Luna",
            breed: "Persian",
            age: 2,
            color: "White & Grey",
            temperament: "Calm",
            imageUrl: "https://i.pinimg.com/1200x/2b/c3/93/2bc393e2c9548048de2b362e210c35df.jpg"
        },
        {
            id: 2,
            name: "Milo",
            breed: "British Shorthair",
            age: 3,
            color: "Grey",
            temperament: "Friendly",
            imageUrl: "https://i.pinimg.com/1200x/ce/93/e8/ce93e8d5470804c679b372ded9c3d29f.jpg"
        },
        {
            id: 3,
            name: "Bella",
            breed: "Ragdoll",
            age: 1,
            color: "Cream",
            temperament: "Affectionate",
            imageUrl: "https://i.pinimg.com/1200x/7a/c9/51/7ac951e78a8e7a69b21c997eeedf700b.jpg"
        },
        {
            id: 4,
            name: "Oliver",
            breed: "Maine Coon",
            age: 4,
            color: "Brown Tabby",
            temperament: "Playful",
            imageUrl: "https://i.pinimg.com/1200x/23/1f/0d/231f0d9df1311751eec7dbfb8238bf26.jpg"
        },
        {
            id: 5,
            name: "Daisy",
            breed: "Siamese",
            age: 2,
            color: "Cream & Brown",
            temperament: "Vocal",
            imageUrl: "https://i.pinimg.com/1200x/4d/5a/8d/4d5a8d82039499abd0c9759c62138bd9.jpg"
        },
        {
            id: 6,
            name: "Leo",
            breed: "Scottish Fold",
            age: 3,
            color: "Orange",
            temperament: "Gentle",
            imageUrl: "https://i.pinimg.com/1200x/68/aa/5e/68aa5e39bafd44871c71df3f91575352.jpg"
        }
    ];

    return (
        <div>
            <DataContext.Provider value={{ moviesData,catsData }}>
                {children}
            </DataContext.Provider>
        </div>
    )
}

export default DataProvider
