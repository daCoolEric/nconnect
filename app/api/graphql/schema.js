export const typeDefs = `#graphql


    type Users{
        id: ID!
        pin: String!
        email: String!
        hashedPassword: String!
        photoUrl: String
        role: String
        Profile: Profile!
       

    }

    type Ashanti{
        id: ID!
        districtname: String!
        location: String!
        address: String!
        staffCapacity: String
        contact: String
        staffmembers: [Profile]
        gallery: [Office_Gallery]

    }

    type Profile {
        id: ID!
        forename: String!
        surname: String!
        rank: String!
        email: String!
        contact: String!
        photoUrl: String
        districtname: String!
        order: Int!
        staffId: Users
        ashanti_id: Ashanti
        
    }

    type Office_Gallery{
        id: ID!
        imageUrl: String!
        districtname: String!
        ashanti_id: Ashanti


    }



    type Game{
        id: ID!
        title: String!
        platform: [String!]!

    }

    type Review {
        id: ID!
        rating: Int!
        content: String!

    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
    }

    type Query {
        reviews: [Review]
        review(id: ID!): Review
        games: [Game]
        game(id: ID!): Game
        authors: [Author]
        author(id: ID!): Author 
        users: [Users]
        getProfiles: [Profile]
        getDistricts: [Ashanti]
        getGallery: [Office_Gallery]
    }
`;
